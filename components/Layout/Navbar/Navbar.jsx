import React from "react";
import { NavbarMenu } from "./NavbarMenu";
import Link from "next/link";
import styles from './Navbar.module.css'
import { SearchInput } from "./SearchInput";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href={'/'} className={styles.logo}>EasyShop</Link>
      <SearchInput />
      <NavbarMenu/>
    </nav>
  );
};
