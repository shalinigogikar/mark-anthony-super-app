"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/userStore";

interface Props {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: Props) {
  return <>{children}</>;
}