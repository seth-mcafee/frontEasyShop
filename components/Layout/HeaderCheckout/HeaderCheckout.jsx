"use client"
import React from "react";
import styles from "./HeaderCheckout.module.css";
import Link from "next/link";
import { AiFillLock, AiOutlineCheck } from "react-icons/ai";
import { useSearchParams } from "next/navigation";

export function HeaderCheckout() {
    const searchParams = useSearchParams();
    const currentStep = Number(searchParams.get("step")) || 1;
    const steps = [
      { number: 1, title: "Cart" },
      { number: 2, title: "Checkout" },
      { number: 3, title: "Payment" },
    ];
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link href={"/"}>EasyShop</Link>
      </div>
      <div className={styles.center}>
        {steps.map((step) => (
          <div key={step.number} className={`${currentStep === step.number ? styles.active : ''} ${currentStep > step.number ? styles.success : ''}`}>
            <span className={styles.number}>
              <AiOutlineCheck />
              {step.number}
            </span>
            <span>{step.title}</span>
            <span className={styles.space} />
          </div>
        ))}
      </div>
      <div className={styles.right}>
        <AiFillLock />
        <div>
          <span>Pago seguro</span>
          <span>256-bit SSL Secure</span>
        </div>
      </div>
    </div>
  );
}
