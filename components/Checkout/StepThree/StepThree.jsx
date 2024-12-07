import React from 'react'
import styles from './StepThree.module.css'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Link from 'next/link'

export function StepThree() {
  return (
    <div className={styles.stepThree}>
        <AiOutlineCheckCircle />

        <h2>¡Sucesfully Transaction!</h2>

        <Link href={'/account'} className='btn btn-primary'>Show orders</Link>
    </div>
  )
}
