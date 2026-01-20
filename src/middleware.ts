import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

const protectedRoutes = ["/modules/dashboard"];

export default async function middleware(request: NextRequest) {
    const session = await auth();
    const isProtected = protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route));
    // if the user is NOT authenticated and the route is protected, redirect to the signin page
    if (isProtected && !session) {
        return NextResponse.redirect(new URL("api/auth/callback/cognito", request.url));
    }
    // if the user IS authenticated and the route is protected, redirect to the dashboard
    return NextResponse.next();
}