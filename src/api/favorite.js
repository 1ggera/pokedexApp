import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants"

//obtiene elementos de favoritos
export async function getPokemonsFavoriteApi(){
  try{
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return JSON.parse(response || []);
  }catch (error){
    throw error;
  }
}

//añade elementos a favoritos
export async function addPokemonFavoriteApi(id){
  try{
    const favorites = await getPokemonsFavoriteApi();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch(error){
    throw error;
  }
}

//verifica si el pokemon ya está agendado en favoritos. Solo obtiene el estado de getPokem y chekea si existe el ID
export async function isPokemonFavoriteApi(id){
  try{
    const response = await getPokemonsFavoriteApi();
    return includes(response, id)// a include se le pasa un array y el valor que buscamos dentro del array. NO se le envía objetos. Array de un solo nivel. Si lo encuentra devuelve true sino false
  }catch (error)
  {
    throw error;
  }
}