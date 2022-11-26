import React from "react";
import styles from "../styles/MainArea.module.css";

const MainArea = () => {
  return (
    <div className={styles.mainArea}>
      <div className={styles.leftPanel}></div>
      <div className={styles.rightPanel}></div>
    </div>
  );
};

export default MainArea;
