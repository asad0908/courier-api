import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <h3>COURIER API</h3>
      </div>
      <div>Right</div>
    </div>
  );
};

export default Navbar;
