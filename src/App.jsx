import './css/style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  const [listaPokemones, setListaPokemones] = useState([]); 
  
  useEffect(() => {    
    const obtenerPokemones = async () => {

      try {
        const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        setListaPokemones(respuesta.data.result); //aqui esta ubicada la lista de pokemones 
      } catch (error) {
        console.log(error);
      }
    };
    obtenerPokemones();
  }, [])
  

  return (
    <>
      
    </>
  )
}

export default App
