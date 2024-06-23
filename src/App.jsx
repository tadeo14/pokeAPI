import './css/style.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    
    const obtenerPokemones = async () => {

      try {
        const respuesta = axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        console.log(respuesta);
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
