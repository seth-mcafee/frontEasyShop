import React from 'react'
import styles from './Payment.module.css'
import { CardElement } from '@stripe/react-stripe-js'

export function Payment() {
    const cardStyle = {
        style: {
            base: {
                fontSize: "16px"
            }
        }
    }
  return (
    <div className={styles.payment}>
        <h2>Payment Methods</h2>

        <div className={styles.block}>
            <CardElement options={cardStyle} />
        </div>
    </div>
  )
}
