import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Sidebar.module.css";
import { useSelector } from "react-redux";
import { getWithExpiry, setWithExpiry } from "../helpers/localstorageTTL";
import SidebarLists from "./SIdebarLists";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isMobileView }) => {
  const [sidebarValues, setSidebarValues] = useState([]);
  const sidebarValueRef = useRef();

  useEffect(() => {
    const val = getWithExpiry("sidebarValues");
    if (val != null) {
      setSidebarValues(val);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("storage", () => {
      setSidebarValues(getWithExpiry("sidebarValues"));
      console.log("change");
    });
    return () => {
      window.removeEventListener("storage", () => {});
    };
  }, []);

  const addItemToSidebar = (e) => {
    const itemObj = {
      id: Math.random(),
      title: sidebarValueRef.current.value,
      url: "",
      method: "GET",
      body: "",
      headers: "",
    };

    if (e.key == "Enter") {
      const currentValues = getWithExpiry("sidebarValues");
      if (currentValues && currentValues.length > 4) {
        alert("You cant add more than 5 api endpoints...");
        return;
      }
      if (currentValues == null) {
        const items = [];
        items.push(itemObj);
        setWithExpiry("sidebarValues", items, 1000 * 60 * 60);
      } else {
        currentValues.push(itemObj);
        setWithExpiry("sidebarValues", currentValues, 1000 * 60 * 60);
      }
      window.dispatchEvent(new Event("storage"));
      sidebarValueRef.current.blur();
    }
  };

  const sidebarState = useSelector((state) => state.sidebar.value);
  const [addItem, setAddItem] = useState(false);
  return (
    <div
      className={`${styles.sidebar} ${
        sidebarState ? styles.sidebar : styles.sidebarClosed
      }`}
    >
      <button onClick={() => setAddItem(!addItem)} className={styles.addButton}>
        <FontAwesomeIcon className={styles.addButtonIcon} icon={faAdd} />
      </button>
      <div className={styles.sidebarLists}>
        {sidebarValues?.map((item) => (
          <SidebarLists
            isMobileView={isMobileView}
            styles={styles}
            key={item.id}
            itemval={item}
          />
        ))}
      </div>
      {addItem && (
        <div className={styles.sidebarAddList}>
          <input
            ref={sidebarValueRef}
            onKeyDown={addItemToSidebar}
            onBlur={() => setAddItem(false)}
            autoFocus={true}
            type="text"
            placeholder="Enter Item name"
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
