import './css/style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  const [listaPokemones, setListaPokemones] = useState([]); 
  const [pokemonActual, setPokemonActual] = useState('');
  
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

  //GENEERAMOS EL POKEMON ALEATORIO 
  const pokemomAleatorio = (listaPokemon) => {
    //vamos a generar un numero aleatorio
    const indiceAleatorio = Math.floor(Math.random() * 100);
    //usamos el array de lista pokemon y le ponemos como indice el numero aleatorio, trayendo un pokemon
    //aleatorio
    const pokemonAleatorio = listaPokemon[indiceAleatorio];
    //guardamos el pokemon aleatorio en un estado 
    setPokemonActual(pokemonAleatorio);

    generarOpciones(pokemonAleatorio,listaPokemon);
    };

  //generar respuesta aleatorias 
  const generarOpciones = (pokemonElegido, listaPokemon) => {
    //creamos un array donde almacenamos los nombres de los pokemones que vamos a mostrar en las opciones
    //a elegir
    const opcionesGneradas = [pokemonElegido.name];
  
    while (opcionesGneradas.length < 4) {
      //generamos un numero aleatorio para elegir un pokemon de la lista
      const pokemonAleatorio = listaPokemon[Math.floor(Math.random() * 100)].name;
      
      //verificamos que el pokemon aleatorio no este ya en la lista de opciones
      if (!opcionesGneradas.includes(pokemomAleatorio)) {
        opcionesGneradas.push(pokemomAleatorio);
      }

     
    }
    console.log(opcionesGneradas);
  
  };
  
  
  
  
  return (
    <>
      
    </>
  )
}

export default App
