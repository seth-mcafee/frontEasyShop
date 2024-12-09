import Link from "next/link";
import React from "react";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <div className={styles.hero}>
      <p>Este Black Friday</p>

      <h3>Llévate por menos de 1000 euros</h3>

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
          4 nucleos, 12gb ram, carga rápida, usb thunderbolt, color rojo nuevo,{" "}
        </p>
      </div>
    </div>
  );
}
