import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from './ProductInfo.module.css'
import { ProductInfoActions } from "./ProductInfoActions";

export function ProductInfo(props) {
  const { product } = props;
  const { id, name, price, description } = product;

  return (
    <div className={styles.infoBox}>
      <h1>{name}</h1>
      <div className={styles.reviewsBox}>
        <div>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
        <p>(20)</p>
      </div>

      <h4>Details</h4>
      <p>{description}</p>
      <p className={styles.price}>{price}€</p>
      
      <ProductInfoActions productId={id} />
    </div>
  );
}
