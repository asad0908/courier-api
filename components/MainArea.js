import React from "react";
import styles from "../styles/MainArea.module.css";
import Sidebar from "./Sidebar";

const MainArea = () => {
  return (
    <div className={styles.mainArea}>
      <Sidebar />
    </div>
  );
};

export default MainArea;
