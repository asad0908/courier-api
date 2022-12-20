import React from "react";
import styles from "../styles/MainArea.module.css";
import RequestResponse from "./RequestResponse";
import Sidebar from "./Sidebar";

const MainArea = ({ isMobileView }) => {
  return (
    <div className={styles.mainArea}>
      <RequestResponse isMobileView={isMobileView} />
      <Sidebar isMobileView={isMobileView} />
    </div>
  );
};

export default MainArea;
