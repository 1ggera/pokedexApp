import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getPokemonsApi } from "../api/pokemon"

export default function Pokedex() {

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  //función q devuelve los datos de los pokemones
  const loadPokemons = async () =>{
    try{
      const response = await getPokemonsApi();
      console.log(response);
    }catch(error){
      console.error(error);
    }
  }

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  )
}