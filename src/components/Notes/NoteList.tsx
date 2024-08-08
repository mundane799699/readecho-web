"use client";

import { useEffect, useState } from "react";

const NoteList = ({ bookId }: { bookId: string }) => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);
  const getNotes = async () => {
    const response = await fetch(`/api/notes?bookId=${bookId}`, {
      method: "GET",
    });
    if (!response.ok) {
      console.log(response.statusText);
      return;
    }
    const { code, rows } = await response.json();
    console.log("rows = ", rows);
    if (code === 200) {
      const filteredRows = rows.filter((item: any) => item.markText);
      setNotes(filteredRows);
    }
  };
  return (
    <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <div className="container">
        <div className="space-y-4">
          {notes.map((note: any) => (
            <div
              key={note.reviewId}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold">{note.noteContent}</h3>
              <div className="flex">
                <div className="mr-3 w-1 bg-gray-300"></div>
                <p className="flex-1 text-sm text-gray-600">
                  {note.markText.length > 100
                    ? `${note.markText.slice(0, 100)}...`
                    : note.markText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoteList;
