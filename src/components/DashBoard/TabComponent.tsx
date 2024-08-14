"use client";

import React, { useState } from "react";

interface TabProps {
  Bookshelf: JSX.Element;
  Underline: JSX.Element;
}

const TabComponent: React.FC<TabProps> = ({ Bookshelf, Underline }) => {
  const [activeTab, setActiveTab] = useState<"bookshelf" | "underline">(
    "bookshelf",
  );

  return (
    <div className="w-full">
      <div className="flex justify-center border-b border-gray-200">
        <button
          className={`px-4 py-2 ${
            activeTab === "bookshelf"
              ? "border-b-2 border-blue-500 text-blue-500"
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
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("underline")}
        >
          划线
        </button>
      </div>
      <div className="mt-4">
        {activeTab === "bookshelf" ? Bookshelf : Underline}
      </div>
    </div>
  );
};

export default TabComponent;
