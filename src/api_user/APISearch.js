import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './search.css';

export default function APISearch() {
 
  const navigateTo = useNavigate();

  const [username, setUsername] = useState("");

  useEffect(() => {
    const url = `https://api.github.com/users/${username}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
  }, [])

  const submit = (event) => {
    event.preventDefault();

    if(username != ""){
      navigateTo(`/users/${username}`) 
    }else{
      alert(`Bitte ausfüllen!`)
    }
  }


  return (
    <div className='search_container'>
      <section>
      <form onSubmit={submit}>
        <label>Find user:</label>
        <input value={username}
          onChange={(e) => setUsername(e.target.value)} />
        <button style={{margin: "15px"}} 
        type='submit'>Submit</button>
      </form>
      </section>
    </div>
  )
}
