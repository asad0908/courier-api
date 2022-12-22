import styles from "../styles/ResponseSection.module.css";

const ResponseSection = ({ outputBoxRef, responseData }) => {
  return (
    <div className={styles.responseSectionContainer}>
      <div className={styles.responseSectionDetails}>
        <div className={styles.responseSectionLeft}>
          <p>Response Data</p>
        </div>
        <div className={styles.responseSectionRight}>
          <p>
            Status: <span>{responseData[0]}</span>
          </p>
          <p>
            Time: <span>{responseData[1]}{responseData[1] !== "N/A" && "ms"}</span>
          </p>
        </div>
      </div>
      <div className={styles.responseTextAreaContainer}>
        <textarea
          ref={outputBoxRef}
          disabled={true}
          rows={10}
          cols={10}
          spellCheck={false}
        ></textarea>
      </div>
    </div>
  );
};

export default ResponseSection;
