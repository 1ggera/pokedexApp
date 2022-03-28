import { API_HOST } from "../utils/constants"

export async function getPokemonsApi(endpointUrl){
  //console.log(endpointUrl);
  try{
    const url = `${API_HOST}/pokemon?limit=20&offset=0`; //construye la url
    const response = await fetch(endpointUrl || url); //ejecuta la peticion al servidor
    const result = await response.json(); //recupera los datos
    return result;//devolvemos ese json con los  datos
  } catch(error){
    throw error;
  }
}

export async function getPokemonDetailsByUrlApi(url) {
  try{
    const response = await fetch(url);
    const result = await response.json();
    return result;
  }catch(error){
    throw error;
  }
}

//para recuperar la info a través del id
export async function getPokemonDetailsApi(id){
  try{
    const url = `${API_HOST}/pokemon/${id}`
    const response = await fetch(url);
    const  result = await response.json();
    return result;
  }
  catch (error){
    throw error;
  }
}