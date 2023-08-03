import React, { useState, useEffect } from "react";
import fastapi from "../lib/api";
import { useHistory } from "react-router-dom"; // Assuming you are using react-router for routing.

moment.locale("ko");

function MyComponent() {
  const [containerList, setContainerList] = useState([]);

  useEffect(() => {
    getContainerList();
  }, [page, kw]);

  function getContainerList() {
    let params = {
      page: page,
      size: size,
      keyword: kw,
    };

    fastapi("get", "/api/container/list", params, (json) => {
      setContainerList(json.container_list);
      setTotal(json.total);
    });
  }

  return <div></div>;
}

export default MyComponent;
