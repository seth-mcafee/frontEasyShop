import React from "react";
import styles from './ConfirmModal.module.css'

export const ConfirmModal = (props) => {
  const { show, onClose, onConfirm, content } = props;

  if (!show) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContent}>{content}</div>
        <div className={styles.modalActions}>
            <button className="btn btn-primary" onClick={onClose}>Cancel</button>
            <button className="btn btn-outline-primary" onClick={onConfirm}>Continue</button>
        </div>
      </div>
    </div>
  );
};
