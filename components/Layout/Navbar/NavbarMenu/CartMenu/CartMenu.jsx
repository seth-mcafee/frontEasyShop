"use client";
import React, { useState } from "react";
import styles from "./CartMenu.module.css";
import { useCart } from "@/hooks";
import { Item } from "./Item";
import { Resume } from "./Resume";

export function CartMenu(props) {
  const { show, onOpenClose } = props;
  const { cart, total, addItem, deleteItem, clearCart, amount } = useCart();

  const onAddItem = (id) => {
    addItem(id);
  };

  const onDeleteItem = (id) => {
    deleteItem(id);
  };

  return (
    <>
      <div className={`${styles.cart} ${show ? styles.show : ""}`}>
        <div className={styles.cartHeader}>
          <h3>My Cart</h3>
          <button className={styles.closeButton} onClick={onOpenClose}>
            ×
          </button>
        </div>
        {cart && cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <Item
                key={item.id}
                item={item}
                onAdd={onAddItem}
                onDelete={onDeleteItem}
              />
            ))}
            <Resume total={total} amount={amount} onClear={clearCart} />
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </>
  );
}
