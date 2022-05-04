import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Button } from 'react-native'
import { getPokemonsFavoriteApi } from "../api/favorite"

export default function Favorite() {
  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getPokemonsFavoriteApi();
      console.log(response);
    })();
  });

  // const chekFavorites = async() => {
  //   const response = await getPokemonsFavoriteApi();
  //   console.log(response);
  // }

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      {/* <Button title="Obtener Favoritos" onPress={chekFavorites}/> */}
    </SafeAreaView>
  )
}