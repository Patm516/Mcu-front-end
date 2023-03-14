import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import{API_URL} from '../constants';
import axios from 'axios';
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";


function Gallery() {
  const [serverData, setServerData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/api/allCharacters")
    .then(async res => {
      console.log(res.data.payload)
      setServerData(res.data.payload);
    })
    .catch((e) =>console.log(e))
  }, [])
  return ( 
    <>
      <h1>Gallery</h1>
       {serverData.length > 0 ? serverData.map((character, index) =>
      (
        <li key={index}>
          <Link to= { `/getOneMcuCharacter/${character.name}`} >

            {character.name}
          </Link>
          
        </li>
      )
    ) : <h1>Loading....</h1>}
    </>
   );
}

export default Gallery;