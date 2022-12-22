import styles from "../styles/ResponseSection.module.css";

const ResponseSection = () => {
  return (
    <div className={styles.responseSectionContainer}>
      <div className={styles.responseSectionDetails}>
        <div className={styles.responseSectionLeft}>
          <p>Response Data</p>
        </div>
        <div className={styles.responseSectionRight}>
          <p>
            Status: <span>200</span>
          </p>
          <p>
            Time: <span>400ms</span>
          </p>
        </div>
      </div>
      <div className={styles.responseTextAreaContainer}>
        <textarea
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
