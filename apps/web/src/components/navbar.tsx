"use client";
import Link from "next/link";
import { Button } from "./button";
import { ThemeToggle } from "./themetoggle";
import axios from "axios";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const route = useRouter();
  const login = async () => {
    try {
    } catch (error) {}
  };
  return (
    <>
      <div className="h-16 w-full flex items-center justify-between px-8 py-16 bg-transparent ">
        <div className="dark:text-white text-black font-bold text-3xl">
          PayFlow
        </div>
        <div className="flex items-center justify-center gap-4">
          <div>
            <ThemeToggle />
          </div>
          <div>
            <Link
              href={"/signin"}
              children={<Button children="Signin" size="sm" />}
            />
          </div>
        </div>
      </div>
    </>
  );
};
