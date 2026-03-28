"use client";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import Link from "next/link";
import { useAuthorize } from "@/hooks/useAuthorize";

export const Hero = () => {
  const route = useRouter();
  const isAuthorise = useAuthorize();

  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <div className="flex flex-col items-center justify-center gap-4 text-center max-w-4xl xl:max-w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[6vw]  dark:text-neutral-300 text-neutral-800 font-bold leading-tight">
          Fast, Secure & Easy Payments
        </h1>

        <h5 className="text-sm sm:text-sm md:text-lg xl:text-xl dark:font-light dark:text-neutral-400 text-neutral-600 font-medium mt-12 xs:mt-10 sm:mt-8 md:mt-8 lg:mt-6 xl:-mt-4">
          Send, receive and manage your money effortlessly with PayFlow. Built
          for speed, security, and simplicity.
        </h5>
      </div>
      <div className="mt-4 xs:mt-6 sm:mt-5 md:mt-5 lg:mt-4 xl:mt-8">
        {isAuthorise ? (
          <Link
            href={"/dashboard"}
            children={<Button children="DashBoard" size="lg" />}
          />
        ) : (
          <Link
            href={"/signup"}
            children={<Button children="Get Started" size="lg" />}
          />
        )}
      </div>
    </div>
  );
};
