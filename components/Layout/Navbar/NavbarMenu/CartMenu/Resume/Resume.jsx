import React from "react";
import styles from "./Resume.module.css";
import Link from "next/link";

export function Resume(props) {
  const { amount, total, onClear } = props;
  return (
    <div className={styles.resume}>
      <div className={styles.data}>
        <p>Unidades:</p>
        <p><strong>{total}</strong></p>
      </div>
      <div className={styles.data}>
        <p>Total <small>(IVA incluido)</small></p>
        <p className={styles.price}>{amount}€</p>
      </div>
      <Link href={'/checkout'} className="btn btn-primary">Go to Checkout</Link>
      <button className="btn btn-outline-primary" onClick={onClear}>Clear cart</button>
    </div>
  );
}
