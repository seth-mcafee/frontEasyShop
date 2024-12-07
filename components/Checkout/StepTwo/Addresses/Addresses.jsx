"use client";
import React, { useEffect, useState } from "react";
import styles from "./Addresses.module.css";
import { Address } from "@/api";
import { AiFillPlusSquare } from "react-icons/ai";
import Link from "next/link";

const addressCtrl = new Address();

export function Addresses(props) {
  const { addressSelected, setAddressSelected } = props;
  const [addresses, setAddresses] = useState(null);

  console.log(addressSelected);

  useEffect(() => {
    (async () => {
      try {
        const response = await addressCtrl.getAll();
        setAddresses(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className={styles.addresses}>
      <h2>Address</h2>

      {Array.isArray(addresses) &&
        addresses.map((address) => (
          <div key={address.id} className={`${styles.address} ${addressSelected?.id === address.id ? styles.active : ""}`} onClick={() => setAddressSelected(address)}>
            <p>
              {address.name} | {address.title}
            </p>
            <p>
              {address.address}, {address.cp}, {address.region}, {address.city}
            </p>
          </div>
        ))}
        <div className={styles.address}>
            <Link href={'/account'}>
            <p className={styles.newAddress}>
                <AiFillPlusSquare />
                Add new Address
            </p>
            </Link>
        </div>
    </div>
  );
}
