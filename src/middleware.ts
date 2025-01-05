import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest): NextResponse {
  // console.log('req url: ',request.url);

  const { pathname } = request.nextUrl; // Get the requested path
  // console.log('pathname ',pathname)
  const key = cookies().get("accessToken")?.value;
  // console.log('key',key);

  // Define protected routes
  const protectedRoutes: string[] = [
    "/dashboard",
    "/all-Product/:path*",
  ];

  // Check if the route is protected and the user is not authenticated
  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !key) {
    // Redirect unauthenticated users to the login page
    // return NextResponse.redirect(new URL("/login", request.url));

    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Allow the request to continue if authenticated
  return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
  matcher: ["/dashboard/:path*", "/all-Product/:path*"], // Routes to protect
};
