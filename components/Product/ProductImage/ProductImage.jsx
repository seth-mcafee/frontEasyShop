import React from "react";
import styles from './ProductImage.module.css'

export function ProductImage(props) {
  const { image } = props;

  return (
    <div className={styles.imgBox}>
      <img src={image} />
    </div>
  );
}
