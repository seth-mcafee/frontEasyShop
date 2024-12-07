"use client"
import React, { useState } from "react";
import styles from "./Order.module.css";
import { DateTime } from "luxon";
import { BasicModal } from "@/components/Shared";

export function Order(props) {
  const { order } = props;
  const [showModal, setShowModal] = useState(null)
  
  const openCloseModal = () => setShowModal((prevState) => !prevState)

  const textColor = () => {
    switch(order.status) {
      case 'pending':
        return '#ffc107';
      case 'paid':
        return '#4bb543';
      default:
        return '#000';
    }
  };

  return ( 
  <>
  <div className={styles.order} onClick={openCloseModal}>
    <div>
        <span>{DateTime.fromISO(order.created_at, {locale: "en"}).toFormat("dd/MM/yyyy")}</span>
        <p>{ order.products.length } products</p>
    </div>

    <p style={{ color: textColor(), textTransform: 'capitalize' }}>{order.status}</p>

    <p>{order.total}€</p>
  </div>
    <BasicModal show={showModal} onClose={openCloseModal} title="Information about the order">
      {Array.isArray(order.products) && order.products.map((product) => (
        <div className={styles.product}>
          <img src={product.image_url} />
          <div>
            <div className={styles.info}>
              <div>
                <p>{product.name}</p>
              </div>
            </div>
            <div className={styles.quantity}>
              <span>x{product.quantity}</span>
              <span>{product.price}€</span>
            </div>
          </div>
        </div>
      ))}

      <div className={styles.address}>
        <div>
          <p className={styles.title}>Delivery address:</p>
          <p className={styles.addressInfo}>
            {order.address.name}, {order.address.address}, {order.address.region}, {order.address.city}, {order.address.cp}
          </p>
        </div>
      </div>

      <div className={styles.total}>
        <p>TOTAL: {order.total}€</p>
      </div>
    </BasicModal>
  </>
  )
}
