# ¿Quién es nuestro Pokémon?

Este proyecto es un juego interactivo desarrollado en **React** que utiliza la [PokeAPI](https://pokeapi.co/) para obtener una lista de Pokémon y desafiar al usuario a adivinar el Pokémon correcto entre varias opciones.

Puedes ver la aplicación desplegada aquí: [Formulario de práctica](https://pokeapibytadeo.netlify.app/)

## Descripción del proyecto

La aplicación carga una lista de 100 Pokémon al azar y selecciona uno de ellos para que el usuario intente adivinar cuál es, eligiendo entre cuatro opciones. Si la respuesta es correcta, se muestra un mensaje de felicitación. Si la respuesta es incorrecta, se informa al usuario cuál era el Pokémon correcto. El usuario puede volver a jugar tantas veces como desee.

### Características principales:

- Carga de una lista de Pokémon desde la PokeAPI.
- Generación de un Pokémon aleatorio para adivinar.
- Visualización de una imagen oculta del Pokémon para aumentar la dificultad.
- Opción de volver a jugar con un nuevo Pokémon aleatorio.
- Estilos aplicados con **Bootstrap** para un diseño sencillo y atractivo.

## Tecnologías utilizadas

- **React**: Biblioteca principal para la creación de la interfaz.
- **Axios**: Para realizar solicitudes HTTP a la PokeAPI.
- **Bootstrap**: Framework CSS para el diseño de los componentes.
- **PokeAPI**: API pública utilizada para obtener la lista de Pokémon.
