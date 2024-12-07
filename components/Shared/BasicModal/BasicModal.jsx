import React from "react";
import styles from "./BasicModal.module.css";

export const BasicModal = ( props ) => {
  const { children, show, onClose, title } = props;

  if (!show) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        {title && <h2 className={styles.modalTitle}>{title}</h2>}
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};
