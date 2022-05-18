import React, { useState, useEffect } from 'react';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";//icono vacío
import FontAwesome from "react-native-vector-icons/FontAwesome";//ícono relleno
import { addPokemonFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi } from "../../api/favorite"

export default function Favorite(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [chekIcon, setChekIcon] = useState(false);
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
  }, [id, chekIcon]);

  //chekea el estado previo y devuelve el contrario
  const onCheakIconFavorite = () => {
    setChekIcon((prev) => !prev);
  }
  
  const addFavorite = async () => {
    try{
      await addPokemonFavoriteApi(id);
      onCheakIconFavorite();
    }catch(error)
    {
      console.log(error);
    }
  };

  const removeFavorite = async () => {
    try{
      await removePokemonFavoriteApi(id);
      onCheakIconFavorite();
    }catch(error){
      console.log(error)
    }
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