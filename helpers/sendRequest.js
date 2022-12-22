import { getWithExpiry } from "./localstorageTTL";

export const sendRequest = async (selectedTab, outputBoxRef) => {
  const requestObjectsFromLS = getWithExpiry("sidebarValues");
  const requestedObject = requestObjectsFromLS.find(
    (item) => item.id === selectedTab.id
  );
  const { url, method, headers, body } = requestedObject;
  try {
    if (method === "GET") {
      const response = await fetch(url);
      const responseJSON = await response.json();
      if (!response.ok) {
        alert(`Error occured: ${response.status}`);
      }
      console.log(responseJSON);
    }
    if (method === "POST") {
      const response = await fetch(url, {
        method: method,
        body: body,
        headers: JSON.parse(headers),
      });
      const responseJSON = await response.json();
      if (!response.ok) {
        alert(`Error occured: ${response.status}`);
      }
      console.log(responseJSON);
    }
  } catch (error) {
    alert(error);
  }
};
