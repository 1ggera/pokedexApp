import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import {map, capitalize} from "lodash";


export default function Stats(props) {
  const { stats } = props;

  const barStyles = (num) => {
    //si no es mayor a 49 es rojo, sino, es verde
    const color = num > 49 ? "#00ac17" : "#ff3e3e"
    return {
      backgroundColor: color,
      width: `${num}%`
    }
  }
  return (
    <View styles={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {map(stats, (item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{item.stat.name}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(item.base_stat)]}/>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content:{
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 50,
  },
  title:{
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block:{
    marginLeft: 38,
    flexDirection:"row",
    paddingVertical: 5,

  },
  blockTitle:{
    width: "25%"
  },
  statName:{
    fontSize: 15,
    color: "#6b6b6b"
  },
  blockInfo:{
    width: "75%",
    flexDirection: "row",
    alignItems: "center",
  },
  number:{
    width: "12%",
    fontSize: 12,
  },
  bgBar:{
    backgroundColor: "#dedede",
    width: "75%",
    height:5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar:{
    //backgroundColor: "orange",
    //width: "70%",
    height: 5,
    borderRadius: 20,
  },
})