import { notFound } from "next/navigation";
import { Metadata } from "next";
import NoteList from "@/components/Notes/NoteList";
import Header from "@/components/Notes/Header";

export const metadata: Metadata = {
  title: "笔记详情",
};

export default async function NotePage({ params }: { params: { id: string } }) {
  const bookId = params.id;

  return (
    <div className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <Header />
      <NoteList bookId={bookId} />
    </div>
  );
}
