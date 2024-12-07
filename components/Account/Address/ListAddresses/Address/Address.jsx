import React, { useState } from "react";
import styles from "./Address.module.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import AddressForm from "../../AddressForm";
import { Address as AddressCtrl } from "@/api";
import {BasicModal, ConfirmModal} from "@/components/Shared";

const addressCtrl = new AddressCtrl();

export const Address = (props) => {
  const { address, onReload } = props;
  const [showEdit, setShowEdit] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onOpenCloseEdit = () => setShowEdit(prevState => !prevState)
  const onOpenCloseConfirm = () => setShowConfirm(prevState => !prevState)
  const onConfirm = () => {
    try {
      addressCtrl.delete(address.id)
      onReload();
      onOpenCloseConfirm()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className={styles.address}>
        <div>
          <p className={styles.title}>{address.title}: </p>
          <p className={styles.addressInfo}>
            {address.name}, {address.address}, {address.region}, {address.city},{" "}
            {address.cp}, Tel.: {address.phone}, Email: {address.email}
          </p>
        </div>
        <div className={styles.actions}>
          <button onClick={onOpenCloseEdit}>
            <AiFillEdit />
          </button>
          <button onClick={onOpenCloseConfirm}>
            <AiFillDelete />
          </button>
        </div>
      </div>

      <BasicModal show={showEdit} onClose={onOpenCloseEdit} title="Edit address">
        <AddressForm onClose={onOpenCloseEdit} onReload={onReload} address={address} />
      </BasicModal>

      <ConfirmModal 
        show={showConfirm}
        onClose={onOpenCloseConfirm}
        onConfirm={onConfirm}
        content="Are you sure about deleting that address?" 
      />
    </>
  );
};
