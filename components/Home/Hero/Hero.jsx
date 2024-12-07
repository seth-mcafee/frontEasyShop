import Link from "next/link";
import React from "react";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <div className={styles.hero}>
      <p>Lo que quieras</p>

      <h3>Soy un h3</h3>

      <h1>Mac Air M3</h1>

      <Link href="#">
        <button className="btn btn-primary">Comprar Ahora</button>
      </Link>

      <img
        src="https://s3-eu-west-1.amazonaws.com/media.macnificos.com/Apple_landings/Mac_does_that/mac.png"
        alt=""
      />

      <div className={styles.desc}>
        <h5>Description</h5>
        <p>
          2 nucleos, 100gb ram, carga rápida, usb thunderbolt, color rojo nuevo,{" "}
        </p>
      </div>
    </div>
  );
}
