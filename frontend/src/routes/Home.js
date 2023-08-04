import React, { useState, useEffect } from "react";
import fastapi from "../lib/api";

const Home = () => {
  const [containerList, setContainerList] = useState();
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState();

  useEffect(() => {
    getContainerList();
  }, [page]);

  const getContainerList = () => {
    let params = {
      page: page,
      size: size,
    };

    fetch("api/container/list").then((response) => {
      response.json().then((json) => {
        setContainerList(json.container_list)
        console.log(json.container_list)
      })
    })
    // fastapi("get", "/api/container/list", params, (json) => {
    //   console.log(json.container_list)
    //   setContainerList(json.container_list);
    //   setTotal(json.total);
    // });
  };

  return (
    <div>
      <table>
        <tbody>
          <th>번호</th>
          <th>이름</th>
          <th>냉장 여부</th>
          <th>온도</th>
          <th>습도</th>
          <th>기울기</th>
          <th>진동</th>
          <th>항만</th>
          <th>부두</th>
        {containerList && containerList.map((container) => (  // 맵함수를 이용해 dummy 안의 days 그룹 내의 원소를 검색한다.
          <tr key={container.id}>
            <td>{container.id}</td>
            <td>{container.name}</td>
            <td>{container.cold ? "O" : "X"}</td>
            <td>{container.temperature}</td>
            <td>{container.humidity}</td>
            <td>{container.slope}</td>
            <td>{container.vibration}</td>
            <td>{container.port}</td>
            <td>{container.wharf}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );

}

export default Home;
