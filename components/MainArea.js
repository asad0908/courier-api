import React from "react";
import styles from "../styles/MainArea.module.css";
import Sidebar from "./Sidebar";

const MainArea = ({ isMobileView }) => {
  return (
    <div className={styles.mainArea}>
      <Sidebar isMobileView={isMobileView} />
    </div>
  );
};

export default MainArea;
