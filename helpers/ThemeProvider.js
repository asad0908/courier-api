import React, { useState } from "react";
import styles from "../styles/Themes.module.css";

const ThemeProvider = (props) => {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className={isDark ? styles.dark : styles.light}>{props.children}</div>
  );
};

export default ThemeProvider;
