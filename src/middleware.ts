import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const protectedRoutes = [
  "/dashboard",
  "/dashboard/profile",
  "/dashboard/createpost",
];

export const middleware = (request: NextRequest) => {
  const token = request.cookies.get("token");

  if (
    !token &&
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard/:path*"],
};
