import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';
import{API_URL} from '../constants';
import useAxios from "../hooks/useAxios";

function UpdateHero() {
  const { name } = useParams();

  const [ setUrl, data, loading, setLoading, error ] = useAxios(); 

  useEffect(
    () => {
      setUrl(API_URL + "/oneMcuCharacter/" + name );
      console.log("API URL IS: " + API_URL + "/oneMcuCharacter/" + name);
      setLoading(true);
    },
    []
  );


  async function handleSubmit(e) {
    e.preventDefault();
    
    let name = e.target.newName.value;
    let debut = e.target.debut.value;
    let debutYear = e.target.debutYear.value;

    try {
      await axios.put(
        'http://localhost:3002/api/updateHero/'+ name
      );

      alert("Character updated successfully!")
    }
    catch(e) {
      console.log("error:" + e);
      alert("Something went wrong, Char not updated.");
    }
  }

  return ( 
    <>
    <h1>Update Mcu Hero: {name} </h1>
    
    <form onSubmit={handleSubmit}>
      <label>Let's update an MCU Character</label>
      Name:
      <input type="text" name="newName" />
      
      <button>UPDATE</button>

      
    </form>


    
    
    </>
   );
}

export default UpdateHero;

