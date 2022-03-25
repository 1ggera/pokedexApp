import React from 'react';
import { StyleSheet, Text, FlatList} from 'react-native';
import PokemonCard from "./PokemonCard";

//para renderizare las props de pokemons, los datos, importamos FlatList
export default function PokemonList(props) {
  const { pokemons } = props; //para observar q props están viniendo

  return (
    //aquí no hace falta agregar otro view ya q este componente se renderiza dentro de Pokedex.js q ya tiene un SafeAreaView
    <FlatList 
      data={pokemons} //es un array de objetos con la información q queremos renderizar
      numColumns={2} //cuantos se renderizan por fila
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}//recupero el id, lo convierto a string y lo añado al keyStractor
      renderItem={({item}) => <PokemonCard pokemon={item} /> }
      contentContainerStyle={styles.flatListContentContainer}
    />
  )
}

//para darle estilo al renderizado
const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5
  }
})