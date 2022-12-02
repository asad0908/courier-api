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
