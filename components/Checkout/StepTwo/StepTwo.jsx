"use client";
import React, { useState } from "react";
import styles from "./StepTwo.module.css";
import { Separator } from "@/components/Shared";
import { Addresses } from "./Addresses";
import { loadStripe } from "@stripe/stripe-js";
import { ENV } from "@/utils";
import { Elements } from "@stripe/react-stripe-js";
import { Payment } from "./Payment";
import { Resume } from "./Resume";
import { useCart } from "@/hooks";

const stripeInit = loadStripe(ENV.STRIPE_KEY);

export function StepTwo(props) {
  const { cart, amount, refreshCart } = useCart();
  const [addressSelected, setAddressSelected] = useState(null);

  return (
    <Elements stripe={stripeInit}>
    <div className={styles.stepTwo}>
      <div className={styles.center}>
        <Addresses
          addressSelected={addressSelected}
          setAddressSelected={setAddressSelected}
        />
        <Separator height={50} />
        { addressSelected && (
            <Payment />
        )}
      </div>

      <div className={styles.right}>
        <Resume cart={cart} addressSelected={addressSelected} amount={amount} refreshCart={refreshCart} />
      </div>
    </div>
    </Elements>
  );
}
