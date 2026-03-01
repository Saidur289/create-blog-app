"use server"

import { blogService } from "@/services/blog.service"
import { BlogData } from "@/types"
import { revalidateTag } from "next/cache";

export const createBlog = async (data: BlogData) => {
    const response = await blogService.createPost(data);

    revalidateTag("blogPosts", "max");

    return response;
};