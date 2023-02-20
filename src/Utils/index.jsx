export const search = async (url) => {
  const res = await fetch(encodeURI(url));
  const resJson = await res.json();
  return resJson["results"]["shop"];
};
