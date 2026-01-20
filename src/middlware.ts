import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

const protectedRoutes = ["/modules/dashboard"];

export default async function middleware(request: NextRequest) {
    const session = await auth();
    const isProtected = protectedRoutes.includes(request.nextUrl.pathname);
    // if the user is NOT authenticated and the route is protected, redirect to the signin page
    if (isProtected && !session) {
        return NextResponse.redirect(new URL("api/auth/signin", request.url));
    }
    // if the user IS authenticated and the route is protected, redirect to the dashboard
    return NextResponse.next();
}