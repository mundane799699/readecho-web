import { NextRequest, NextResponse } from "next/server";
import { booksService } from "@/services/books";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("Admin-Token")?.value;
  console.log("token = ", token);
  const res = await booksService(token);
  console.log("res = ", res);
  if (res.code !== 200) {
    return NextResponse.json({ code: res.code, message: res.msg });
  }
  return NextResponse.json(res);
}
