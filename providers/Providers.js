"use client";
import { AuthProvider, CartProvider } from "@/contexts";

export function Providers({ children }) {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
}
