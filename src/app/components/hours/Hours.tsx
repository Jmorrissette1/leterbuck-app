import React from "react";
import styles from "./Hours.module.css";

const Hours: React.FC = () => {
  return (
    <div className={styles.hoursBox}>
      <h2> Wash Hours </h2>
      <p>*Hours typically change at Daylight savings time</p>
      <p>Mon-Sat</p>
      <p>7:30 a.m. to 7 p.m.</p>
      <p>Sunday </p>
      <p>9:00 a.m. to 6 p.m.</p>
    </div>
  );
};

export default Hours;
