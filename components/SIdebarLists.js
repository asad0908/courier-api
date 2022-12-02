import { useDispatch } from "react-redux";
import { getWithExpiry, setWithExpiry } from "../helpers/localstorageTTL";
import { setSelectedTab } from "../redux/SelectedTabSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { toggle } from "../redux/sidebarSlice";

const SidebarLists = ({ itemval, styles, isMobileView }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    const vals = getWithExpiry("sidebarValues");
    const newVals = vals.filter((item) => item.id != itemval.id);
    setWithExpiry("sidebarValues", newVals, 1000 * 60 * 60);
    window.dispatchEvent(new Event("storage"));
  };

  const selectATab = () => {
    const localObj = getWithExpiry("sidebarValues");
    const localItem = localObj.find((item) => item.id == itemval.id);
    dispatch(setSelectedTab(localItem));
    if (isMobileView) {
      dispatch(toggle());
    }
  };

  return (
    <div className={styles.itemlistElement}>
      <div onClick={selectATab} className={styles.itemListLeft}>
        {itemval.title}
      </div>
      <div onClick={deleteItem} className={styles.itemListRight}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
};

export default SidebarLists;
