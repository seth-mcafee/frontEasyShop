"use client"
import React, { useEffect, useState } from "react";
import styles from "./GridProducts.module.css";
import { Product as ProductCtrl } from "@/api";
import Product from "./Product";

const productCtrl = new ProductCtrl();

export function GridProducts(props) {
  const {search} = props;
  const [ products, setProducts ] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await productCtrl.getAll(search);
        setProducts(response);

        console.log(products)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  if(!products) return null;

  return (
    <>
      <div className="container">
      {/*BANNER*/}
      <div className={styles.title}>
        <h2>Más vendidos</h2>

        <p>Productos preferidos por nuestros clientes</p>
      </div>

      <div className={styles.products}>
        {Array.isArray(products) ? (
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p>No hay productos</p>
        )}
      </div>
      </div>
    </>
  );
}
