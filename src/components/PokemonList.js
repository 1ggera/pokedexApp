import React from 'react';
import { StyleSheet, Text, FlatList, ActivityIndicator, Platform} from 'react-native';
import PokemonCard from "./PokemonCard";

//para renderizare las props de pokemons, los datos, importamos FlatList
export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props; //para observar q props están viniendo

  //Inspecciona sobre q dispositivo se está ejecutando la app
  //console.log(Platform.OS);

  const  loadMore = () => {
    loadPokemons();
    //console.log("Cargar mas Pokemones!");
  };

  return (
    //aquí no hace falta agregar otro view ya q este componente se renderiza dentro de Pokedex.js q ya tiene un SafeAreaView
    <FlatList 
      data={pokemons} //es un array de objetos con la información q queremos renderizar
      numColumns={2} //cuantos se renderizan por fila
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}//recupero el id, lo convierto a string y lo añado al keyStractor
      renderItem={({item}) => <PokemonCard pokemon={item} /> }
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached = {isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
          size="large"
          style={styles.spinner}
          color="#AEAEAE"
          />
        )
      }
    />
  );
}

//para darle estilo al renderizado
//uso platform para acomodar el style según el dispositivo
const styles = StyleSheet.create({
  flatListContentContainer: {
    marginTop: Platform.OS === "android" ? 5 : 0,
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop:10,
    marginBottom: Platform.OS === "android" ? 95 : 40,
  }
})