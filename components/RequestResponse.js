import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { sendRequest } from "../helpers/sendRequest";
import { updateDataLS, updateSelectLS } from "../helpers/updateDataLS";
import styles from "../styles/RequestResponse.module.css";
import HeadersAndBody from "./HeadersAndBody";
import ResponseSection from "./ResponseSection";

const RequestResponse = ({ isMobileView }) => {
  const inputBoxRef = useRef();
  const selectedOptionRef = useRef();
  const headersRef = useRef();
  const outputBoxRef = useRef();
  const [responseData, setResponseData] = useState(["N/A", "N/A"]);
  const selectedTab = useSelector((state) => state.selectedTab.value);

  useEffect(() => {
    if (selectedTab) {
      inputBoxRef.current.value = selectedTab.url;
      selectedOptionRef.current.value = selectedTab.method;
      outputBoxRef.current.value = "";
    }
    setResponseData(["N/A", "N/A"]);
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
          <button
            onClick={() =>
              sendRequest(selectedTab, outputBoxRef, setResponseData)
            }
          >
            SEND
          </button>
        </div>
      </div>
      <HeadersAndBody
        selectedTab={selectedTab}
        isMobileView={isMobileView}
        headersRef={headersRef}
      />
      <ResponseSection
        responseData={responseData}
        outputBoxRef={outputBoxRef}
      />
    </div>
  );
};

export default RequestResponse;
