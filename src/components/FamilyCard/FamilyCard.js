import React from 'react';
import { capitalize } from '../../utils';
import styles from './FamilyCard.module.css';

export default function FamilyCard({
  familyName,
  status,
  dateFound,
  numberChildren,
  married,
  hardshipScale,
}) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return `${styles.green}`;
      case 'reserved':
        return `${styles.blue}`;
      case 'scheduled':
        return `${styles.yellow}`;
      case 'completed':
        return `${styles.orange}`;
    }
  };

  const statusColor = getStatusColor(status);

  return (
    <article className={styles.card}>
      <div className={`${styles.statusBar} ${statusColor}`}>
        {capitalize(status)}
      </div>
      <div className={styles.heading}>
        <div className={styles.prefix}>Familia</div>
        <div className={styles.familyName}>{capitalize(familyName)}</div>
      </div>
      <div className={styles.frame}>
        <img
          className={styles.photo}
          src={`https://www.ocregister.com/wp-content/uploads/2021/05/OCR-L-REUNITED-06-LO.jpg?w=1020`}
          alt="family photo"
        />
      </div>
    </article>
  );
}
