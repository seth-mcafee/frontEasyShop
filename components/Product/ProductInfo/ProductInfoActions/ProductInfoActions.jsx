"use client";
import React, { useState } from "react";
import styles from "./ProductInfoActions.module.css";
import { useAuth, useCart } from "@/hooks";
import { useRouter } from "next/navigation";

export const ProductInfoActions = (props) => {
  const { productId } = props;
  const { cart, addItem } = useCart();
  const { user } = useAuth();
  const router = useRouter();
  const [loadingAddToCart, setLoadingAddToCart] = useState(false);
  const [loadingBuyNow, setLoadingBuyNow] = useState(false);

  const addToCartWraper = () => {
    setLoadingAddToCart(true);
    addItem(productId);

    setTimeout(() => {
      setLoadingAddToCart(false);
    }, 500);
  };

  const buyNowWrapper = () => {
    setLoadingBuyNow(true);
    addItem(productId);
    router.push('/checkout')
  }

  const onNotLogged = () => {
    router.push('/auth/login')
  }

  return (
    <div className={styles.actionsBox}>
      <button
        type="button"
        className={styles.addToCartBtn}
        onClick={user ? addToCartWraper : onNotLogged}
        disabled={loadingAddToCart}
      >
        {loadingAddToCart ? <div className="loader"></div> : "Add to cart"}
      </button>
      <button type="button" className={styles.buyNowBtn} onClick={user ? buyNowWrapper : onNotLogged} disabled={loadingBuyNow}>
        {loadingBuyNow ? <div className="loader"></div> : "Buy now"}
      </button>
    </div>
  );
};
