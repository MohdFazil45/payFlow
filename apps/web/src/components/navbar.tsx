"use client";
import Link from "next/link";
import { Button } from "./button";
import { ThemeToggle } from "./themetoggle";
import { useRouter } from "next/navigation";
import { useAuthorize } from "@/hooks/useAuthorize";
import { User } from "lucide-react";

export const Navbar = () => {
  const isAuthorise = useAuthorize();
  return (
    <>
      <div className="h-16 w-full flex items-center justify-between px-4 md:px-8 xl:p-12">
        <Link href={"/"}>
          <div className="dark:text-white text-black font-bold text-xl md:text-3xl xl:text-6xl">
            PayFlow
          </div>
        </Link>

        <div className="flex items-center xl:text-xl gap-3 md:gap-4">
          <div>
            <ThemeToggle/>
          </div>

          <div>
            {isAuthorise ? (
              <User className="border-none dark:text-neutral-300 text-neutral-800 xl:h-10 xl:w-10 xl:font-light"/>
            ) : (
              <Link href="/signin">
                <Button size="sm">Signin</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
