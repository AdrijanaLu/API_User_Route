import React, {useState} from 'react';
import { useEffect } from 'react';
import './users.css';
import Cards from "./Cards";

export default function APIUsers() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://api.github.com/users?since=XXXX";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  console.log(data);


  return (
    <div className='users_container'>
      <div className="cards_div">
      {data.map((item) => (
        <Cards name={item.login} foto={item.avatar_url} />
      ))}
      </div>
    </div>
  )
}
