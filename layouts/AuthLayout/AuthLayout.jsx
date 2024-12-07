"use client";
import { useAuth } from "@/hooks";
import styles from "./AuthLayout.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import '@/app/globals.css';

export function AuthLayout({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      window.location.replace("/");
    }
  }, [user, router]);

  if (user) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>{children}</div>
      <div className={styles.right}></div>
    </div>
  );
}
