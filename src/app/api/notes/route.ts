import { NextRequest, NextResponse } from "next/server";
import { notesService } from "@/services/notes";

export async function GET(request: NextRequest) {
  const bookId = request.nextUrl.searchParams.get("bookId") as string;
  const token = request.cookies.get("Admin-Token")?.value;
  const res = await notesService(bookId, token);
  if (res.code !== 200) {
    return NextResponse.json({ code: res.code, message: res.msg });
  }
  return NextResponse.json(res);
}
