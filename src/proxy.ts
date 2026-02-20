import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { Roles } from "./constant/roles";

export default async function proxy(request: NextRequest){
    const pathname = request.nextUrl.pathname
    const {data} = await userService.getUserSession()
    let isAuthenticated= false;
    let isAdmin = false
    if(data){
        isAuthenticated = true;
        isAdmin = data.user.role === Roles.admin 
    }
    // console.log(isAdmin, "hello");
    if(!isAuthenticated){
        return NextResponse.redirect(new URL("/login", request.url))
    }
    if(!isAdmin && pathname.startsWith("/admin-dashboard")){
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }
    if(isAdmin && pathname.startsWith("/dashboard")){
        return NextResponse.redirect(new URL("/admin-dashboard", request.url))
    }
    return NextResponse.next()
}
export const matcher = ["/dashboard", "/admin-dashboard","/dashboard/:path*", "/admin-dashboard/:path*"]