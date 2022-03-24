import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon"

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  console.log("pokemons--->", pokemons);
    //useState está compuesto por el estado (pokemons) y la función que se ocupa de actualizar nuestro estado(setPokemon)

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  //función q devuelve los datos de los pokemones
  const loadPokemons = async () =>{
    try{
      const response = await getPokemonsApi();
      
      const pokemonsArray = [];      
  //para traer los datos aplico un for asincrono.Este ejecuta la petición pór cad iteración a la url. Consiste en que hasta q no termine de traer los datos de uno no trae el otro.  
  // llamo a 'result' porque en 'getPokemonsApi' es quien contiene los datos
      for await (const pokemon of response.results){
        // console.log(pokemon.url); --> PARA inspeccionar LOS  POKEMON
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        console.log(pokemonDetails);
        
        //con push ordeno traer información del pokemons que quiero
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          orden: pokemonDetails.order,
          imagen: pokemonDetails.sprites.other['official-artwork'].frot_default
        })
      }
      setPokemons([...pokemons, ...pokemonsArray]); //desde acá actualizamos el estado. Los ... indican traer la info del array dato por dato
    }catch(error){
      console.error(error);
    }
  }

  //lo que se renderiza en la screen
  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  )
}