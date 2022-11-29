import { useDispatch } from "react-redux";
import { getWithExpiry, setWithExpiry } from "../helpers/localstorageTTL";
import { setSelectedTab } from "../redux/SelectedTabSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SidebarLists = ({ itemval, styles }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    const vals = getWithExpiry("sidebarValues");
    const newVals = vals.filter((item) => item.id != itemval.id);
    setWithExpiry("sidebarValues", newVals, 1000 * 60 * 60);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className={styles.itemlistElement}>
      <div
        onClick={() => dispatch(setSelectedTab(itemval))}
        className={styles.itemListLeft}
      >
        {itemval.title}
      </div>
      <div onClick={deleteItem} className={styles.itemListRight}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
};

export default SidebarLists;