"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const HeroSection = () => {
  const { user } = useAuth();

  return (
    <>
      <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
        {user ? (
          <li>
            <a
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-primary shadow-1 transition duration-300 ease-in-out hover:bg-gray-2"
            >
              查看笔记
            </a>
          </li>
        ) : (
          <>
            <li>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2"
              >
                注册
              </Link>
            </li>
            <li>
              <Link
                href="/signin"
                className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark"
              >
                登录
              </Link>
            </li>
          </>
        )}
      </ul>
    </>
  );
};

export default HeroSection;
