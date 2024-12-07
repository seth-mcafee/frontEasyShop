"use client";
import { useAuth, useCart } from "@/hooks";
import { DateTime } from "luxon";
import styles from "./Info.module.css";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Tabs } from "../../Layout/Tab";
import { Address } from "../Address";
import { Separator } from "../../Shared";
import { Orders } from "../Orders";

export function Info() {
  const { user, logout } = useAuth();
  const { refreshCart } = useCart();
  const router = useRouter();
  const [reload, setReload] = useState(false)

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const onReload = () => setReload(prevState => !prevState)


  const onLogout = () => {
    refreshCart();
    logout();
  }

  const leftTabs = [
    { label: "My Orders", content: <Orders /> },
    { 
      label: "My Addresses",
      content: 
      <div>
        <Address.AddAddress onReload={onReload} />
        <Address.ListAddresses reload={reload} onReload={onReload} />
      </div> 
    },
  ];

  const rightTabs = [
    { label: "Logout", icon: <AiOutlineLogout /> ,onClick: onLogout },
  ];

  return (
    <div className={styles.info}>
      <button className={styles.user}>
        <AiOutlineUser />
      </button>
      <h3 className={styles.username}>{user.name}</h3>
      <h4 className={styles.email}>{user.email}</h4>
      <p className={styles.createdAt}>
        Member since:{" "}
        {DateTime.fromISO(user.createdAt, { locale: "en" }).toFormat("DDD")}
      </p>
      <Separator height={70} />
      <Tabs leftTabs={leftTabs} rightTabs={rightTabs} />
      <Separator height={100} />
    </div>
  );
}
