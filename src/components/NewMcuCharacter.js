import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import{API_URL} from '../constants';
import axios from 'axios';

function NewMcuCharacter() {
  const [serverData, setServerData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/api/newMcu")
    .then(async res => {
      console.log(res.data.payload)
      setServerData(res.data.payload);
    })
    .catch((e) =>console.log(e))
  }, [])


  async function handleSubmit(e) {
    e.preventDefault();
    
    let name = e.target.newName.value;
    let debut = e.target.debut.value;
    let debutYear = e.target.debutYear.value;

    console.log("name: " + name, "debut: " + debut, "debut year: " + debutYear);

    try {
      await axios.post(
        "http://localhost:3002/api/createMcuCharacter",
        {
          name,
          debut,
          debutYear
        }
      );

      alert("Character inserted successfully!")
    }
    catch(e) {
      console.log("error:" + e);
      alert("Something went wrong, Char not inserted.");
    }
  }


  return ( 
    <form onSubmit={handleSubmit}>
      <label>Let's add a new MCU Character</label>
      Name:
      <input type="text" name="newName" />

      Debut:
      <input type="text" name="debut" />

      Debut Year: 
      <input type="number" name="debutYear" />
      
      <button>Submit</button>

      
    </form>
  
   );
}


export default NewMcuCharacter;