import React from 'react'
import './detail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function APIUserDetail({username}) {

  const [filter, setFilter] = useState();

  useEffect(() => {
    const url = `https://api.github.com/users/${username}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setFilter(json);
      })
  }, [])


  return (
    <div className='detail_container'>
      <h2>User Detail</h2>
      {/* {filter.map((item) => (
        <p>Username: {item.login}</p>
      ))} */}
    </div>
  )
}
