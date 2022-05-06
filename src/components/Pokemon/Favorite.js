import React, { useState, useEffect } from 'react';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";//icono vacío
import FontAwesome from "react-native-vector-icons/FontAwesome";//ícono relleno
import { addPokemonFavoriteApi, isPokemonFavoriteApi } from "../../api/favorite"

export default function Favorite(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined)
  const Icon = isFavorite ? FontAwesome : FontAwesome5;
  
  useEffect(() => {
    (async () => {
      try{ //devolverá true o false si lo tiene o no en la lista
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      }catch(error)
      {
        setIsFavorite(false)
      }
    })()
  }, [id])
  
  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
  };

  const removeFavorite = () => {
    console.log("Eliminar de favoritos");
  }

  return (
    <Icon
      name="heart"
      color="#fff"
      size={24}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 6 }}
    />
  );
}