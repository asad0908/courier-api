import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <h3>COURIER API</h3>
      </div>
      <div className={styles.right}>
        <button onClick={() => {}}>TOGGLE SIDEBAR</button>
      </div>
    </div>
  );
};

export default Navbar;
