import { notFound } from "next/navigation";
import { Metadata } from "next";
import NoteList from "@/components/Notes/NoteList";

export const metadata: Metadata = {
  title: "笔记详情",
};

export default async function NotePage({ params }: { params: { id: string } }) {
  const bookId = params.id;

  // 这里你可以根据 noteId 获取笔记的详细信息
  // const note = await fetchNoteById(noteId)

  // 如果笔记不存在，你可以返回一个 404 页面
  // if (!note) notFound()

  return (
    <>
      <NoteList bookId={bookId} />
    </>
  );
}
