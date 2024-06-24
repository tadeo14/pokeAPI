import './css/style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  
  const [listaPokemones, setListaPokemones] = useState([]); 
  const [pokemonActual, setPokemonActual] = useState('');
  const [opciones, setOpciones] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [mensaje, setMensaje] = useState('');
  
  useEffect(() => {    
    const obtenerPokemones = async () => {
      try {
        const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        setListaPokemones(respuesta.data.results);
        pokemomAleatorio(respuesta.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerPokemones();
  }, []);

  const pokemomAleatorio = (listaPokemon) => {
    setIsVisible(false);
    setMensaje('');
    const indiceAleatorio = Math.floor(Math.random() * 100);
    const pokemonAleatorio = listaPokemon[indiceAleatorio];
    setPokemonActual(pokemonAleatorio);
    generarOpciones(pokemonAleatorio, listaPokemon);
  };

  const generarOpciones = (pokemonElegido, listaPokemon) => {
    const opcionesGeneradas = [pokemonElegido.name];
    
    while (opcionesGeneradas.length < 4) {
      const pokemonAleatorio = listaPokemon[Math.floor(Math.random() * 100)].name;
      if (!opcionesGeneradas.includes(pokemonAleatorio)) {
        opcionesGeneradas.push(pokemonAleatorio);
      }
    }
    
    opcionesGeneradas.sort(() => Math.random() - 0.5);
    setOpciones(opcionesGeneradas);
  };

  const pokemonElegidoUsuario = (opcion) => {
    setIsVisible(true);
    if (pokemonActual.name === opcion) {
      setMensaje('¡Felicidades! Adivinaste correctamente.');
    } else {
      setMensaje(`Lo siento, no adivinaste. Era ${pokemonActual.name}`);
    }
  };
  
  
  
  return (
    <>
      <h1>quien es nuestro pokemon?</h1>

      <div>
        {/* en el caso de que no muestre imagen mostrara un string vacio */}
        {pokemonActual ? (
          <img  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonActual.url.split('/')[pokemonActual.url.split('/').length - 2]}.svg`}
            alt="imagen del pokemon"
            style={isVisible ? {} : {filter: 'brightness(0) saturate(100%)'}}
          />
        ) : (
            ''
        )}

        {opciones.map((opcion) => {
          return <button
            onClick={() => pokemonElegidoUsuario(opcion)}
            className='btn btn-outline-primary ms-3'>
            {opcion}</button>;
        })}

        {mensaje ? (
          <div>
            <p className='fs-5 fw-bold ms-5'>{ mensaje}</p>
            <button onClick={() => pokemomAleatorio(listaPokemones)} className='btn btn-primary'
            >Volver a jugar</button>
          </div>
          
        ) : (
            ''
        )}
    </div>





    </>
  )
}

export default App
