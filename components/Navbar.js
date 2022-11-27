import React from "react";
import styles from "../styles/Navbar.module.css";
import { useDispatch } from "react-redux";
import { toggle } from "../redux/sidebarSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <h3>COURIER API</h3>
      </div>
      <div className={styles.right}>
        <button onClick={() => dispatch(toggle())}>TOGGLE SIDEBAR</button>
      </div>
    </div>
  );
};

export default Navbar;
