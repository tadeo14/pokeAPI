import './css/style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  const [listaPokemones, setListaPokemones] = useState([]); 
  
  useEffect(() => {    
    const obtenerPokemones = async () => {

      try {
        const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        setListaPokemones(respuesta.data.results); //aqui esta ubicada la lista de pokemones 
        pokemomAleatorio(respuesta.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerPokemones();
  }, [])
  const pokemomAleatorio = (listaPokemon) => {
    //vamos a generar un numero aleatorio
    const indiceAleatorio = Math.floor(Math.random() * 100);

    const pokemon = listaPokemon[indiceAleatorio];
    console.log(pokemon.name);

    };

  return (
    <>
      
    </>
  )
}

export default App
