import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import{API_URL} from './constants';
import axios from 'axios';

import Contact from "./components/Contact";
import Home from "./components/Home";
import Layout from './components/Layout';
import Gallery from './components/Gallery';
import NewMcuCharacter from './components/NewMcuCharacter';
// import UpdateHero from './components/UpdateHero';
import UpdateMcu from './components/UpdateMcu';
import DeleteCharacter from './components/DeleteCharacter';
import NoPage from './components/NoPage';
import McuHero from './components/McuHero';

function App() {
  // const [serverData, setServerData] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:3002/api/allCharacters")
  //   .then(async res => {
  //     console.log(res.data.payload)
  //     setServerData(res.data.payload);
  //   })
  //   .catch((e) =>console.log(e))
  // }, [])
  return ( 
    // <>
    // <h1>This is an MCU app, see what year each hero debuted. Hello World</h1>
    // {serverData.length > 0 ? serverData.map((character, index) =>
    //   (
    //     <li key={index}>{character.name}</li>
    //   )
    // ) : <h1>Loading....</h1>}
    // </>

    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/getOneMcuCharacter/:name" element={<McuHero />} />

        <Route path="/newMcu" element={<NewMcuCharacter />} />
        <Route path="/updateHero" element={<UpdateMcu />} />
        <Route path="/deleteMcuCharacter" element={<DeleteCharacter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />

      </Route>
    </Routes>

   );
}

export default App;