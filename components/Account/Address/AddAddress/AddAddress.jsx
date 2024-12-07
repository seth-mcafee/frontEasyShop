import React, { useState } from 'react'
import styles from './AddAddress.module.css'
import {BasicModal} from '@/components/Shared';
import AddressForm from '../AddressForm';


export const AddAddress = (props) => {
    const { onReload } = props;
    const [show, setShow] = useState(false);

    const onOpenClose = () => setShow(prevState => !prevState);

  return (
    <>
        <button className={`btn btn-primary ${styles.addBtn}`} onClick={onOpenClose}>Crear</button>
        <BasicModal show={show} onClose={onOpenClose} title="Create new address">
            <AddressForm onClose={onOpenClose} onReload={onReload} />
        </BasicModal>
    </>
  )
}
