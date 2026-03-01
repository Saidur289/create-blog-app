import { env } from "@/env"
import { cookies } from "next/headers"

const AUTH_URL = env.AUTH_URL
export const userService = {
    getUserSession: async function () {
        try {
            const cookieStore = await cookies()
            const res = await fetch(`${AUTH_URL}/get-session`, {
                headers: {
                    Cookie: cookieStore.toString()
                }
            })
            const session = await res.json()
            // console.log(session);
            return { data: session, error: null }
        } catch (error) {
            console.error(error)
            return { data: null, error: { message: "Some thing wrong in get session" } }
        }
    }
}