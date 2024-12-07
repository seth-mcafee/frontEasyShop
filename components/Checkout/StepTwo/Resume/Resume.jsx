import React, { useState } from "react";
import styles from "./Resume.module.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { BasicModal } from "@/components/Shared";
import { Cart } from "@/api";

const cartCtrl = new Cart();

export function Resume(props) {
  const { cart, amount, addressSelected, refreshCart } = props;
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const onPay = async () => {
    setLoading(true);
    setErrorMessage(null);

    try {
      if (!stripe || !elements) {
        throw new Error("Stripe is not available. Please, try again later.");
      }

      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        throw new Error("Error obtaining the card. Please, check the data.");
      }

      const paymentResponse = await cartCtrl.paymentCart(addressSelected);

      if (!paymentResponse.key) {
        throw new Error("Error initiating the payment. Try again later.");
      }

      const clientSecret = paymentResponse.key;

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (error) {
        throw new Error(`Error processing the payment: ${error.message}`);
      }

      if (paymentIntent?.status !== "succeeded") {
        throw new Error("Payment was not successful. Please try again.");
      }

      const orderResponse = await cartCtrl.confirmOrder(paymentIntent.id, addressSelected);

      if (!orderResponse.status) {
        throw new Error("Error creating the order. Try again later.");
      }

      refreshCart();
      goToStepEnd();
    } catch (error) {
      console.error("Error in the payment:", error);
      setErrorMessage(error.message || "An error occurred. Try again.");
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  };
  
  

  const goToStepEnd = () => {
    router.push(`?step=3`);
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  if (!amount) return null;

  return (
    <div className={styles.resume}>
      <h2>Resumen</h2>

      <div className={styles.block}>
        <div className={styles.products}>
          {Array.isArray(cart) &&
            cart.map((item) => (
              <div key={item.id} className={styles.product}>
                <div>
                  <p>{item.name}</p>
                </div>
                <p>
                  {item.price}€<span>Units: {item.quantity}</span>
                </p>
              </div>
            ))}
        </div>
      </div>

      <div className={styles.blockTotal}>
        <div>
          <span>Total</span>
          <span>{amount}€</span>
        </div>

        <button
          className="btn btn-primary"
          disabled={!addressSelected || loading}
          onClick={onPay}
        >
          {loading ? <div className="loader"></div> : "Pagar"}
        </button>
      </div>

      <BasicModal show={showErrorModal} onClose={closeErrorModal} title="Error in the payment">
        <p>{errorMessage}</p>
      </BasicModal>
    </div>
  );
}
