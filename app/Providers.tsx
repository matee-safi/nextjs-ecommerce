"use client";

import React, { ReactNode } from "react";
import { StateProvider } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <StateProvider>
      <Toaster />
      {children}
    </StateProvider>
  );
}
