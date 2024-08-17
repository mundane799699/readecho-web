import React, { useEffect, useState, useCallback } from "react";
import dayjs from "dayjs";
import { useDebounce } from "use-debounce";
import { X } from "lucide-react";
import { exportNotesService } from "@/services/notes";

const NoteList = ({ initialBookName }: { initialBookName: string }) => {
  const [notes, setNotes] = useState([]);
  const [bookName, setBookName] = useState(initialBookName);
  const [debouncedBookName] = useDebounce(bookName, 300);

  const getNotes = useCallback(async (name: string) => {
    const response = await fetch(`/api/notes?bookName=${name}`, {
      method: "GET",
    });
    if (!response.ok) {
      console.log(response.statusText);
      return;
    }
    const { code, rows } = await response.json();
    if (code === 200) {
      const filteredRows = rows.filter((item: any) => item.markText);
      setNotes(filteredRows);
    }
  }, []);

  useEffect(() => {
    getNotes(debouncedBookName);
  }, [debouncedBookName, getNotes]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookName(e.target.value);
  };

  const clearInput = () => {
    setBookName("");
  };

  const exportNotes = async () => {
    exportNotesService(debouncedBookName);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <label htmlFor="bookName" className="w-16 font-medium text-primary">
            书名:
          </label>
          <div className="relative w-full max-w-sm">
            <input
              id="bookName"
              type="text"
              value={bookName}
              onChange={handleInputChange}
              placeholder="请输入书名"
              className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
            />
            {bookName && (
              <button
                onClick={clearInput}
                className="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
        <button
          onClick={exportNotes}
          className="rounded-md border  border-primary px-4 py-2 text-primary transition duration-300"
        >
          导出
        </button>
      </div>
      <ul className="space-y-4">
        {notes.map((note: any) => (
          <div
            key={note.reviewId}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-md"
          >
            <h3 className="mb-2 text-lg font-semibold">{note.noteContent}</h3>
            <div className="flex">
              <div className="mr-3 w-1 bg-gray-300"></div>
              <p className="flex-1 text-sm text-gray-600">{note.markText}</p>
            </div>
            <div className="mt-16 flex justify-between">
              <p className="text-gray-400">
                {note.bookName}/{note.chapterName}
              </p>
              <p className="text-gray-400">
                {note.noteTime &&
                  dayjs.unix(note.noteTime).format("YYYY-MM-DD HH:mm:ss")}
              </p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
