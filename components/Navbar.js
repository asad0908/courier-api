import React from "react";
import styles from "../styles/Navbar.module.css";
import { useDispatch } from "react-redux";
import { toggle } from "../redux/sidebarSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.sidebar.value);
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <h3>COURIER</h3>
      </div>
      <div className={styles.right}>
        {sidebarOpen ? (
          <FontAwesomeIcon
            className={styles.burgerIcon}
            onClick={() => dispatch(toggle())}
            icon={faBars}
          />
        ) : (
          <FontAwesomeIcon
            className={styles.burgerIcon}
            onClick={() => dispatch(toggle())}
            icon={faBarsStaggered}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
