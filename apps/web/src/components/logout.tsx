"use client";

import { useDetails } from "@/hooks/useDetails";
import { User } from "lucide-react";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export const LogoutModal = ({
  isOpen,
  onClose,
  onLogout,
}: LogoutModalProps) => {
  if (!isOpen) return null;

  const {name, number} = useDetails()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-[90%] max-w-sm rounded-2xl bg-white dark:bg-neutral-900 p-6 shadow-xl">
        <div className="flex flex-col items-center gap-3">
          <div className="p-3 rounded-full bg-neutral-200 dark:bg-neutral-800">
            <User className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
          </div>

          <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
            {name}
          </h2>

          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {number}
          </p>
        </div>
        <div className="my-5 border-t border-neutral-200 dark:border-neutral-700" />
        <div className="flex flex-col gap-3">
          <button
            onClick={onLogout}
            className="w-full py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition"
          >
            Logout
          </button>

          <button
            onClick={onClose}
            className="w-full py-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};