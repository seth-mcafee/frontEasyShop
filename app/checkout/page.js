"use client";

import { CheckoutLayout } from "@/layouts";
import React from "react";
import { Checkout } from "@/components/Checkout";
import { Separator } from "@/components/Shared";

export default function CheckoutPage({ searchParams }) {
  const currentStep = Number(searchParams?.step) || 1;

  return (
    <CheckoutLayout searchParams={searchParams}>
      <Separator height={80} />
      {currentStep === 1 && <Checkout.StepOne />}
      {currentStep === 2 && <Checkout.StepTwo />}
      {currentStep === 3 && <Checkout.StepThree />}
      <Separator height={100} />
    </CheckoutLayout>
  );
}
