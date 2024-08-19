"use client";

import React, { useState } from "react";
import BookList from "@/components/DashBoard/BookList";
import NoteList from "@/components/DashBoard/NoteList";

const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"bookshelf" | "underline">(
    "bookshelf",
  );
  const [selectedBookName, setSelectedBookName] = useState<string>("");
  const handleBookSelect = (bookName: string) => {
    setSelectedBookName(bookName);
    setActiveTab("underline");
  };

  return (
    <div className="w-full">
      <div className="flex justify-center border-b border-gray-200">
        <button
          className={`px-4 py-2 ${
            activeTab === "bookshelf"
              ? "border-b-2 border-orange-500 text-orange-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("bookshelf")}
        >
          书架
        </button>
        <div className="w-4"></div>
        <button
          className={`px-4 py-2 ${
            activeTab === "underline"
              ? "border-b-2 border-orange-500 text-orange-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => handleBookSelect("")}
        >
          笔记
        </button>
      </div>
      <div className="mt-4">
        {activeTab === "bookshelf" ? (
          <BookList onBookSelect={handleBookSelect} />
        ) : (
          <NoteList initialBookName={selectedBookName} />
        )}
      </div>
    </div>
  );
};

export default TabComponent;
