import React from "react";
import styles from "./MassageCard.module.css";

function MassageCard({ massage }) {
  const { name, duration, price } = massage;

  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p className={styles.description}>{duration} minutes</p>
      <p className={styles.price}>£{price}</p>
    </div>
  );
} 

export default MassageCard;