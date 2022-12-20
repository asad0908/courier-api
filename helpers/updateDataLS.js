import { setSelectedTab } from "../redux/SelectedTabSlice";
import { getWithExpiry, setWithExpiry } from "./localstorageTTL";

export const updateDataLS = (e, selectedTab) => {
  const currentObj = getWithExpiry("sidebarValues");
  const newObj = currentObj.map((item) => {
    if (item.id == selectedTab.id) {
      return { ...item, url: e.target.value };
    }
    return item;
  });
  setWithExpiry("sidebarValues", newObj, 1000 * 60 * 60);
};

export const updateSelectLS = (e, selectedTab, selectedOption) => {
  const currentObj = getWithExpiry("sidebarValues");
  const newObj = currentObj.map((item) => {
    if (item.id == selectedTab.id) {
      return { ...item, method: selectedOption.current.value };
    }
    return item;
  });
  setWithExpiry("sidebarValues", newObj, 1000 * 60 * 60);
};

export const updateHeadersLS = (
  selectedTab,
  headersRef,
  currentSelected,
  dispatch
) => {
  const currentObj = getWithExpiry("sidebarValues");
  const newObj = currentObj.map((item) => {
    if (item.id == selectedTab.id && currentSelected == "Body") {
      return { ...item, body: headersRef.current.value };
    }
    if (item.id == selectedTab.id && currentSelected == "Headers") {
      return { ...item, headers: headersRef.current.value };
    }
    return item;
  });
  setWithExpiry("sidebarValues", newObj, 1000 * 60 * 60);
  dispatch(setSelectedTab(newObj.find((item) => item.id == selectedTab.id)));
};

export const deleteHeadersLS = (currentSelected, selectedTab, dispatch) => {
  const currentObj = getWithExpiry("sidebarValues");
  const newObj = currentObj.map((item) => {
    if (item.id == selectedTab.id && currentSelected == "Body") {
      return { ...item, body: "" };
    }
    if (item.id == selectedTab.id && currentSelected == "Headers") {
      return { ...item, headers: "" };
    }
    return item;
  });
  setWithExpiry("sidebarValues", newObj, 1000 * 60 * 60);
  dispatch(setSelectedTab(newObj.find((item) => item.id == selectedTab.id)));
};
