import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import {capitalize} from 'lodash';
//import { getPokemonDetailsByUrlApi } from '../api/pokemon';
import { useNavigation } from "@react-navigation/native"
import getColorByPokemonType from '../utils/getColorByPokemonType';

export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation();
  
  //inspecciono
  //console.log(pokemonColor)

  //solicito el color y lo guardo en una variable
  const pokemonColor = getColorByPokemonType(pokemon.type);
  //luego aplico la variable en una función
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles }
  
  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
    //console.log("Pokemon", {id: pokemon.id});
    //console.log(pokemon.id);
  }

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>#{`${pokemon.orden}`.padStart(3,0)}</Text>

            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>

            <Image source={{ uri: pokemon.imagen }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    //backgroundColor: "#cc0000",
    //width: 100,
    //height: 100,
    //margin: 8,
    //borderRadius: 20
  },
  spacing: {
    flex: 1,
    padding: 5
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding:10,
  },
  number:{
    position: "absolute",
    right: 10,
    top: 10,
    color:"#fff",
    fontSize: 11,
  },
  name:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:20,
    paddingTop: 1 
  },
  image:{
    width:90,
    height:90,
    position: "absolute",
    bottom: 10,
    right: 15,
  }
})