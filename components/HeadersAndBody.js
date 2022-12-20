import styles from "../styles/HeadersAndBody.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faSquareCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { updateHeadersLS } from "../helpers/updateDataLS";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

//constants
const HEADER = "Headers";
const BODY = "Body";

const HeadersAndBody = ({ headersRef, isMobileView, selectedTab }) => {
  const [currentSelected, setCurrentSelected] = useState(BODY);
  const dispatch = useDispatch();

  const currentSelector = (val) => {
    setCurrentSelected(val);
    if (val == BODY) {
      headersRef.current.value = selectedTab.body;
    }
    if (val == HEADER) {
      headersRef.current.value = selectedTab.headers;
    }
  };

  useEffect(() => {
    setCurrentSelected(BODY);
  }, [selectedTab]);

  const spaceAdder = (e) => {
    if (e.key == "Tab") {
      e.preventDefault();
      headersRef.current.value = headersRef.current.value + "  ";
    }
  };

  const clearTextAreaValue = () => {
    headersRef.current.value = "";
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
            {!isMobileView && <FontAwesomeIcon icon={faSquareCaretDown} />}
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
            {!isMobileView && <FontAwesomeIcon icon={faSquareCaretDown} />}
            Body
          </div>
        </div>
        <div className={styles.headersTopRight}>
          <button onClick={clearTextAreaValue}>Clear</button>
        </div>
      </div>
      <div className={styles.headerTextAreaContainer}>
        <textarea
          rows={10}
          cols={10}
          spellCheck={false}
          onKeyDown={spaceAdder}
          ref={headersRef}
          onBlur={() =>
            updateHeadersLS(selectedTab, headersRef, currentSelected, dispatch)
          }
        ></textarea>
      </div>
    </div>
  );
};

export default HeadersAndBody;
