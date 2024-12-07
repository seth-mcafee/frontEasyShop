import React from "react";
import styles from "./Item.module.css";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

export function Item(props) {
  const { item, onAdd, onDelete } = props;

  return (
    <div>
      <div className={styles.itemBox}>
        <div className={styles.item}>
          <img src={item.image_url} />
          <div className={styles.info}>
            <p>{item.name}</p>
            <p>
              <strong>{item.price}€</strong>
            </p>
            <small>
              Units: <strong>{item.quantity}</strong>
            </small>
          </div>
        </div>
        <div className={styles.itemActions}>
            <button onClick={() => onAdd(item.id)}>
                <AiFillPlusCircle/>
            </button>
            <button onClick={() => onDelete(item.id)}>
                <AiFillMinusCircle />
            </button>
        </div>
      </div>
    </div>
  );
}
