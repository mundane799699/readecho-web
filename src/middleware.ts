import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard"];

export default function middleware(request: NextRequest) {
  console.log("进入middleware");
  const path = request.nextUrl.pathname;
  console.log(path);

  // 定义需要保护的路径
  const isProtectedRoute = protectedRoutes.includes(path);

  const adminToken = request.cookies.get("Admin-Token")?.value;
  console.log(adminToken);
  if (isProtectedRoute && !adminToken) {
    // 如果是受保护的路由且用户未登录，重定向到登录页面
    const response = NextResponse.redirect(new URL("/signin", request.url));
    response.headers.set("x-middleware-cache", "no-cache");
    response.headers.set("Cache-Control", "no-cache");
    return response;
  }

  // 对于其他情况，继续正常的请求处理
  return NextResponse.next();
}

// 配置哪些路径应该运行这个中间件
export const config = {
  matcher: ["/dashboard"],
};
