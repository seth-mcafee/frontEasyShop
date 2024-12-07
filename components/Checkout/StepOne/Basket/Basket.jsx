import React from "react";
import styles from "./Basket.module.css";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

export function Basket(props) {
  const { cart, addItem, deleteItem } = props;

  return (
    <div className={styles.basket}>
      <h2>Basket</h2>

      <div className={styles.block}>
        {Array.isArray(cart) &&
          cart.map((item) => (
            <div key={item.id} className={styles.item}>
              <img src={item.image_url} />
              <div className={styles.info}>
                <div>
                  <p>{item.name}</p>
                </div>
              </div>
              <div className={styles.quantity}>
                <div className={styles.controlers}>
                    <button onClick={() => {deleteItem(item.id)}}><AiFillMinusCircle /></button>
                    <p>{item.quantity}</p>
                    <button onClick={() => {addItem(item.id)}}><AiFillPlusCircle /></button>
                </div>
                <p>{(item.price * item.quantity).toFixed(2)}€</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
