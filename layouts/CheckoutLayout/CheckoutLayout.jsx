import "@/app/globals.css";
import { Footer, HeaderCheckout } from "@/components/Layout";

export function CheckoutLayout({ children, searchParams }) {
  return (
    <>
      <HeaderCheckout searchParams={searchParams} />
      <div className="container page">
      {children}
      </div>
      <Footer />
    </>
  );
}
