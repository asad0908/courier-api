import React, { useState } from "react";
import styles from "../styles/Sidebar.module.css";

const SidebarLists = ({ itemname }) => {
  return (
    <div className={styles.itemlistElement}>
      <div className={styles.itemListLeft}>{itemname}</div>
      <div className={styles.itemListRight}>X</div>
    </div>
  );
};

const Sidebar = () => {
  const [addItem, setAddItem] = useState(false);
  return (
    <div
      className={`${styles.sidebar} ${
        true ? styles.sidebar : styles.sidebarClosed
      }`}
    >
      <button onClick={() => setAddItem(!addItem)} className={styles.addButton}>
        Add +
      </button>
      <div className={styles.sidebarLists}>
        <SidebarLists itemname="Item a" />
        <SidebarLists itemname="Item b" />
        <SidebarLists itemname="Item c" />
      </div>
      {addItem && (
        <div className={styles.sidebarAddList}>
          <input
            onBlur={() => setAddItem(false)}
            autoFocus={true}
            type="text"
            placeholder="Enter Item name"
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
