import "@/app/globals.css";
import { Footer, HeaderCheckout } from "@/components/Layout";

export function CheckoutLayout({ children }) {
  return (
    <>
      <HeaderCheckout />
      <div className="container page">
      {children}
      </div>
      <Footer />
    </>
  );
}
