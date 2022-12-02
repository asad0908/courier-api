import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { updateDataLS, updateSelectLS } from "../helpers/updateDataLS";
import styles from "../styles/RequestResponse.module.css";

const RequestResponse = () => {
  const inputBoxRef = useRef();
  const selectedOptionRef = useRef();
  const selectedTab = useSelector((state) => state.selectedTab.value);
  useEffect(() => {
    if (selectedTab) {
      inputBoxRef.current.value = selectedTab.url;
      selectedOptionRef.current.value = selectedTab.method;
    }
  }, [selectedTab]);
  return (
    <div className={styles.requestResponseBackground}>
      <div className={styles.inputArea}>
        <select
          onChange={(e) => updateSelectLS(e, selectedTab, selectedOptionRef)}
          ref={selectedOptionRef}
          name="requestMethod"
          id=""
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
        </select>
        <div className={styles.inputAreaSeperator}>
          <input
            onBlur={(e) => updateDataLS(e, selectedTab)}
            ref={inputBoxRef}
            type="text"
            placeholder="Enter the url"
          />
          <button>SEND</button>
        </div>
      </div>
    </div>
  );
};

export default RequestResponse;
