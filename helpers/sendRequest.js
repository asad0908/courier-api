import { getWithExpiry } from "./localstorageTTL";

const roundOffTo = (num) => {
  const quotient = num / 10;
  const res = Math.round(quotient) * 10;
  return res;
};

export const sendRequest = async (
  selectedTab,
  outputBoxRef,
  setResponseData
) => {
  const requestObjectsFromLS = getWithExpiry("sidebarValues");
  const requestedObject = requestObjectsFromLS.find(
    (item) => item.id === selectedTab.id
  );
  const { url, method, headers, body } = requestedObject;
  try {
    if (method === "GET") {
      const startTime = new Date().getTime();
      const response = await fetch(url);
      const responseJSON = await response.json();
      const endTime = new Date().getTime();
      if (!response.ok) {
        alert(`Error occured: ${response.status}`);
      }
      //add all metadata
      setResponseData([response.status, roundOffTo(endTime - startTime)]);
      outputBoxRef.current.value = JSON.stringify(responseJSON, null, 4);
    }
    if (method === "POST") {
      const startTime = new Date().getTime();
      const response = await fetch(url, {
        method: method,
        body: body,
        headers: JSON.parse(headers),
      });
      const responseJSON = await response.json();
      const endTime = new Date().getTime();
      if (!response.ok) {
        alert(`Error occured: ${response.status}`);
      }
      //add all metadata
      setResponseData([response.status, roundOffTo(endTime - startTime)]);
      outputBoxRef.current.value = JSON.stringify(responseJSON, null, 4);
    }
  } catch (error) {
    alert(error);
  }
};
