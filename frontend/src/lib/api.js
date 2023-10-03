import axios from "axios";

const fastapi = async (method, url, params) => {
  let _url = url;
  if ((method === "get" || method == "delete") && params != null) {
    _url += "/" + params.id;
  }
  console.log("들어감");
  console.log(_url);
  let response;
  if (method == "get") {
    response = await axios.get(_url);
  } else if (method == "post") {
    response = await axios.post(_url, params);
  } else if (method == "delete") {
    response = await axios.delete(_url);
  }
  console.log("나옴");

  let responseOK =
    response && response.status === 200 && response.statusText === "OK";

  if (responseOK) {
    let data = await response.data;
    return data;
  }
};

export default fastapi;
