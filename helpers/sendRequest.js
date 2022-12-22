import { getWithExpiry } from "./localstorageTTL";

export const sendRequest = (selectedTab) => {
  const requestObjectsFromLS = getWithExpiry("sidebarValues");
  const requestedObject = requestObjectsFromLS.find(
    (item) => item.id === selectedTab.id
  );
  console.log(requestedObject);
  const { url, method, headers, body } = requestedObject;
  try {
    if (method === "GET") {
      fetch(url)
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => alert(err));
    }
    if (method === "POST") {
      fetch(url, {
        method: method,
        body: body,
        headers: JSON.parse(headers),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => alert(err));
    }
  } catch (error) {
    alert(error);
  }
};
