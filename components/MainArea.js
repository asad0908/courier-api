import React from "react";
import styles from "../styles/MainArea.module.css";
import RequestResponse from "./RequestResponse";
import Sidebar from "./Sidebar";

const MainArea = ({ isMobileView }) => {
  return (
    <div className={styles.mainArea}>
      <RequestResponse />
      <Sidebar isMobileView={isMobileView} />
    </div>
  );
};

export default MainArea;
