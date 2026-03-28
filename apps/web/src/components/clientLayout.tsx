"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "./navbar";
import { LogoutModal } from "./logout";

export const ClientLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setOpen(false);
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