import React from "react";
import styles from "../styles/Sidebar.module.css";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const sidebarState = useSelector((state) => state.sidebar.value);
  return (
    <div
      className={`${styles.sidebar} ${
        sidebarState ? styles.sidebar : styles.sidebarClosed
      }`}
    >
      <button className={styles.addButton}>Add +</button>
    </div>
  );
};

export default Sidebar;
