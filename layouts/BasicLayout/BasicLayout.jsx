import "@/app/globals.css";
import { Footer, Navbar } from "../../components/Layout";

export function BasicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
