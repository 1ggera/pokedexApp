import React, { useState, useCallback } from 'react';
import { Text } from 'react-native';
import { useFocusEffect } from "@react-navigation/native"
import { getPokemonsFavoriteApi } from "../api/favorite";
import { getPokemonDetailsApi } from "../api/pokemon"
import useAuth from "../hooks/useAuth";
import PokemonList from '../components/PokemonList';

export default function Favorite() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
  //este useEff se ejecutará cada vez q auth sea modificado. Inicie sesión o no
  useCallback(() => {
    if(auth){
      (async () => {
        const response = await getPokemonsFavoriteApi();

        const pokemonsArray = [];      
      for await (const id of response){
        const pokemonDetails = await getPokemonDetailsApi(id);
        
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          orden: pokemonDetails.order,
          imagen: pokemonDetails.sprites.other['official-artwork'].front_default
        })
      }

        setPokemons(pokemonsArray);
      })()
    }
  }, [auth])
  )

  //comprueba el login
  return !auth ? (
      <Text>Usuario no loggeado</Text>
    ) : (
      <PokemonList pokemons={pokemons} />
    );
}