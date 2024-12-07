"use client";
import React from "react";
import styles from "./StepOne.module.css";
import { useCart } from "@/hooks";
import { Basket } from "./Basket";
import { Separator } from "@/components/Shared";
import { Resume } from "./Resume";

export function StepOne() {
  const { cart, addItem, deleteItem, amount } = useCart();

  return (
    <>
      <div className={styles.stepOne}>
        <div className={styles.left}>
          <Basket cart={cart} addItem={addItem} deleteItem={deleteItem} />
        </div>
        <div className={styles.right}>
          <Resume amount={amount} />
        </div>
      </div>
    </>
  );
}
