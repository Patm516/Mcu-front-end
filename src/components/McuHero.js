import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';
import{API_URL} from '../constants';
import useAxios from "../hooks/useAxios";



function McuHero() {


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

  return ( 
    <>
    <h1>Mcu Hero: {name} </h1>
    
    {
      (!loading && data)
      ?
      <>
        <h2>Movie Debut: {data.payload[0].debut}</h2>
        <h3>Debut year: {data.payload[0].debutYear}</h3>
      </>
      
      :
      <h1>Loading...</h1>
    }
    
    </>
   );
}



//useaxios hook to get 

export default McuHero;