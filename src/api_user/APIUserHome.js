import React, { useState } from "react";
import { useEffect } from "react";
import "./home.css";
import Cards from "./Cards";

export default function APIUserHome() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://api.github.com/search/repositories?q=XXX";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json.items);
      });
  }, []);
  console.log(data);

  return (
    <div className="home_container">
      <div className="cards_div">
        {data.map((item, index) => (
          <Cards key={index} name={item.name} foto={item.owner.avatar_url} language={`Language: ` + item.language} />
        ))}
      </div>
    </div>
  );
}
