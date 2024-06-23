import './css/style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  
  const [listaPokemones, setListaPokemones] = useState([]); 
  const [pokemonActual, setPokemonActual] = useState('');
  const [opciones, setOpciones] = useState([]);
  
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
    console.log(pokemonAleatorio);

    generarOpciones(pokemonAleatorio,listaPokemon);
    };

  //generar respuesta aleatorias 
  const generarOpciones = (pokemonElegido, listaPokemon) => {
    //creamos un array donde almacenamos los nombres de los pokemones que vamos a mostrar en las opciones
    //a elegir
    const opcionesGeneradas = [pokemonElegido.name];
  
    while (opcionesGeneradas.length < 4) {
      //generamos un numero aleatorio para elegir un pokemon de la lista
      const pokemonAleatorio = listaPokemon[Math.floor(Math.random() * 100)].name;
      
      //verificamos que el pokemon aleatorio no este ya en la lista de opciones
      if (!opcionesGeneradas.includes(pokemonAleatorio)) {
        opcionesGeneradas.push(pokemonAleatorio);
      }     
    }
    //ordenamos las opciones de manera aleatoria
    opcionesGeneradas.sort(() => Math.random() - 0.5);
    
    setOpciones(opcionesGeneradas);
  };
  
  
  
  
  return (
    <>
      <h1>quien es nuestro pokemon?</h1>

      <div>
        {/* en el caso de que no muestre imagen mostrara un string vacio */}
        {pokemonActual ? (
          <img  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonActual.url.split('/')[pokemonActual.url.split('/').length - 2]}.svg`}
            alt="imagen del pokemon"
            style={{filter: 'brightness(0) saturate(100%)'}}
          />
        ) : (
            ''
        )}

        {opciones.map((opcion) => {
          return <button className='btn btn-outline-primary ms-3'>{opcion}</button>;
        })}
    </div>





    </>
  )
}

export default App
