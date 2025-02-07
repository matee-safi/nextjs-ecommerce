"use client";

import React, { ReactNode } from "react";
import { StateProvider } from "@/context/StateContext";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <StateProvider>
        <Toaster />
        {children}
      </StateProvider>
    </SessionProvider>
  );
}
