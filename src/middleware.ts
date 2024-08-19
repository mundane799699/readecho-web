import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard"];

export default function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // 定义需要保护的路径
  const isProtectedRoute = protectedRoutes.includes(path);

  const adminToken = request.cookies.get("Admin-Token")?.value;
  if (isProtectedRoute && !adminToken) {
    // 如果是受保护的路由且用户未登录，重定向到登录页面
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // 对于其他情况，继续正常的请求处理
  return NextResponse.next();
}

// 配置哪些路径应该运行这个中间件
export const config = {
  matcher: ["/dashboard/:path*"],
};
