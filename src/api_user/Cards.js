import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Cards({foto, name, language}) {

  const [username, setUsername] = useState("");


    return (
      <Card style={{ width: '18rem', margin: '10px', border: 'none'}}>
        <Card.Img variant="top" src={foto} />
        <Card.Body style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <span style={{color: 'red'}}>{language}</span>
          </Card.Text>
          <Button style={{backgroundColor: 'white', border: '1px solid black', color: 'black'}} variant="primary">
            <Link to={`/users/${username}`}>Wiew Repo</Link>
          </Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default Cards;