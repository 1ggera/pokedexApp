import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";
import { addPokemonFavoriteApi, getPokemonsFavoriteApi } from "../../api/favorite"

export default function Favorite(props) {
  const { id } = props; 
  
  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
  };

  const getFav = async () => {
    const response = await getPokemonsFavoriteApi(id);
    console.log(response);
  }

  return (
    <>
      <Icon name="heart" color="#fff" size={24} onPress={addFavorite} style={{ marginRight: 6 }}/>

      <Icon name="user" color="#fff" size={24} onPress={getFav} style={{ marginRight: 6 }}/>
    </>
  );
}