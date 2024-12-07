"use client";
import React from "react";
import styles from "./Resume.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Resume(props) {
  const { amount } = props;
  const router = useRouter();

  const goToStepTwo = () => {
    router.push(`?step=2`);
  };  

  if(!amount) return null

  return (
    <div className={styles.resume}>
      <h2>Resume</h2>

      <div className={styles.block}>
        <div className={styles.price}>
            <span>Total amount: </span>
            <span>{amount}€</span>
        </div>

        <button className="btn btn-primary" onClick={goToStepTwo}>Go to next step</button>
        <Link href={"/"}>Continue buying</Link>
      </div>
    </div>
  );
}
