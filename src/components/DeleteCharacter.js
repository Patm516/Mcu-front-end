import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import{API_URL} from '../constants';
import axios from 'axios';

function DeleteCharacter() {
  
  const [serverData, setServerData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/api/deleteMcuCharacter")
    .then(async res => {
      console.log(res.data.payload)
      setServerData(res.data.payload);
    })
    .catch((e) =>console.log(e))
  }, [])
  
  async function handleSubmit(e) {
    e.preventDefault();
    
    let name = e.target.newName.value;

    try {
      await axios.delete(
        'http://localhost:3002/api/deleteMcuCharacter/'+ name
      );

      alert("Character deleted successfully!")
    }
    catch(e) {
      console.log("error:" + e);
      alert("Something went wrong, Char not deleted.");
    }
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <label>Let's delete an MCU Character</label>
      Name:
      <input type="text" name="newName" />
      
      <button>DELETE</button>

      
    </form>
  );
}

export default DeleteCharacter;


