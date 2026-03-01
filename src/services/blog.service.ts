import { env } from "@/env"
import { BlogData } from "@/types"
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"

interface getBlogsParams {
    isFeatured?: boolean,
    search?: string
}
interface serviceOptions {
    cache?: RequestCache,
    revalidate?: number
}
const API_URL = env.API_URL
export const blogService = {
    getBlogPost: async function (params?: getBlogsParams, options?: serviceOptions) {
        try {
            const url = new URL(`${API_URL}/posts`)
            if (params) {
                Object.entries(params).forEach(([key, value]) => {
                    if (value) url.searchParams.append(key, value);
                });
            }
            const config: RequestInit = {}
            if (options?.cache) {
                config.cache = options.cache
            }
            if (options?.revalidate) {
                config.next = { revalidate: options.revalidate }
            }
            const res = await fetch(url.toString(), { ...config, next: { tags: ["blogPosts"] } })
            const data = await res.json()
            return { data: data, error: null }
        } catch (error) {
            console.error(error)
            return { data: null, msg: "something wrong in get post function" }
        }
    },
    getPostById: async function (id: string) {
        try {
            const res = await fetch(`${API_URL}/posts/${id}`)
            const data = await res.json()

            return { data: data, error: null }
        } catch (error) {
            console.error(error)
            return { data: null, error: { message: "fetch failed to get blog post" } }
        }

    },
    createPost: async function (blogData: BlogData) {
        try {
            const cookieStore = await cookies()
            const data = await fetch(`${API_URL}/posts`, {
                method: "POST",
                headers: {
                    Cookie: cookieStore.toString(),
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(blogData)
            })
            // console.log(data);
            return { data: data.json(), error: null }
        } catch {
            return { data: null, error: { message: "Failed Create Post" } }
        }
    }

}