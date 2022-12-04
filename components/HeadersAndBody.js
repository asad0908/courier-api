import styles from "../styles/HeadersAndBody.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faSquareCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

//constants
const HEADER = "Headers";
const BODY = "Body";

const HeadersAndBody = () => {
  const [currentSelected, setCurrentSelected] = useState(BODY);

  const currentSelector = (val) => {
    setCurrentSelected(val);
  };

  return (
    <div className={styles.headersContainer}>
      <div className={styles.headersTop}>
        <div className={styles.headersTopLeft}>
          <div
            onClick={() => currentSelector(HEADER)}
            className={`${styles.headersTopLeftOne} ${
              currentSelected == HEADER
                ? styles.headersTopLeftSelected
                : styles.headersTopLeftOne
            }`}
          >
            <FontAwesomeIcon icon={faSquareCaretDown} />
            Headers
          </div>
          <div
            onClick={() => currentSelector(BODY)}
            className={`${styles.headersTopLeftTwo} ${
              currentSelected == BODY
                ? styles.headersTopLeftSelected
                : styles.headersTopLeftTwo
            }`}
          >
            <FontAwesomeIcon icon={faSquareCaretDown} />
            Body
          </div>
        </div>
        <div className={styles.headersTopRight}>
          <button>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default HeadersAndBody;
