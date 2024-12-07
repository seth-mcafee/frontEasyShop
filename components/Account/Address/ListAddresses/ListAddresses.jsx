import React, { useEffect, useState } from 'react'
import styles from './ListAddresses.module.css'
import { Address as AddressCtrl } from '@/api'
import Address from './Address'

const addressCtrl = new AddressCtrl()

export const ListAddresses = (props) => {
  const { reload, onReload } = props; 
  const [addresses, setAddresses] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await addressCtrl.getAll();
        setAddresses(response.data);
      } catch (error) {
        console.error(error)
      }
    })()
  }, [reload])

  if(!addresses) return null;

  return (
    <div className={styles.addresses}>
      {addresses.map((address) => (
        <Address key={address.id} address={address} onReload={onReload}/>
      ))}
    </div>
  )
}
