"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "./navbar";
import { LogoutModal } from "./logout";
import Cookies from "js-cookie"

export const ClientLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('token')
    setOpen(false)
    router.push("/signin");
  };

  return (
    <>
      <Navbar onClick={() => setOpen(true)} />

      <LogoutModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onLogout={handleLogout}
      />

      {children}
    </>
  );
};