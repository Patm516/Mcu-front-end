import useAxios from "../hooks/useAxios";
import axios from 'axios';




function UpdateMcu() {

  async function handleSubmit(e) {
    e.preventDefault();
    
    let name = e.target.newName.value;
    let debut = e.target.debut.value;
    let debutYear = e.target.debutYear.value;

    console.log("name: " + name, "debut: " + debut, "debut year: " + debutYear);

    try {
      await axios.put(
        "http://localhost:3002/api/updateHero",
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
          <label>Let's update an MCU Character</label>
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

export default UpdateMcu;