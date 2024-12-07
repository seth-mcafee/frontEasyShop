import React from "react";
import { ProductImage } from "./ProductImage";
import styles from "./Product.module.css";
import { ProductInfo } from "./ProductInfo";

export default function Product(props) {
  const { product } = props;
  const { image_url } = product;

  return (
    <div className={styles.productContainer}>
      <ProductImage image={image_url} />
      <ProductInfo product={product} />
    </div>
  );
}
