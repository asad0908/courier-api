import React, { useRef } from "react";
import styles from "../styles/RequestResponse.module.css";

const RequestResponse = () => {
  const inputBoxRef = useRef();
  return (
    <div className={styles.requestResponseBackground}>
      <div className={styles.inputArea}>
        <select name="requestMethod" id="">
          <option value="GET">GET</option>
          <option value="POST">POST</option>
        </select>
        <input ref={inputBoxRef} type="text" placeholder="Enter the url" />
        <button>SEND</button>
      </div>
    </div>
  );
};

export default RequestResponse;
