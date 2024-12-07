"use client";
import { useAuth, useCart } from "@/hooks";
import styles from "./NavbarMenu.module.css";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import { CartMenu } from "./CartMenu";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function NavbarMenu() {
  const { user } = useAuth();
  const { total } = useCart();
  const router = useRouter(); 
  const [show, setShow] = useState(false);

  const onOpenClose = () => setShow((prevState) => !prevState);
  const onNotLogged = () => {
    router.push('/auth/login')
  }

  return (
    <div className={styles.navbarmenu}>
      <button type="button" className={styles.navbarmenu_icon} onClick={user ? onOpenClose : onNotLogged}>
        <AiOutlineShoppingCart />
        {total > 0 && <span className={styles.navbarmenu_badge}>{total}</span>}
      </button>
      <Link
        href={`${user ? "/account" : "/auth/login"}`}
        className={`${styles.navbarmenu_icon} ${
          user ? styles.navbarmenu_iconLogged : ""
        }`}
      >
        <AiOutlineUser />
      </Link>

      <CartMenu show={show} onOpenClose={onOpenClose} />
    </div>
  );
}
