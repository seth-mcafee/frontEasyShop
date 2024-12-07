import Link from 'next/link'
import React from 'react'
import styles from './Banner.module.css'

export function Banner() {
    return (
        <div className={styles.banner}>

            <div className={styles.bannerDesc}>

                <div className={styles.left}>
                    <p>20% desc</p>
                    <h3>Otoño  </h3>
                    <h3>Blanco</h3>
                    <p>Del 15 de Noviembre al 7 de Diciembre</p>
                </div>
                <div className={styles.right}>
                    <p>
                        Mac air M3

                    </p>

                    <h3>
                        Descuento de Otoño
                    </h3>

                    <p>
                        El mejor ordenador del mercado, Mac es más.
                    </p>

                    <Link href="#">

                        <button>Comprar Ahora</button>

                    </Link>
                </div>
                <img src="https://s3-eu-west-1.amazonaws.com/media.macnificos.com/Apple_landings/Mac_does_that/mac.png" alt="" />
            </div>
        </div>
    )
}
