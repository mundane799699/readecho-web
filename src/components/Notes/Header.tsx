"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const Header = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex cursor-pointer items-center" onClick={handleBack}>
          <ArrowLeft className="mr-2 h-5 w-5 text-gray-600" />
          <span className="font-medium text-gray-800">返回</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
