import React from 'react'
import {StyleSheet, View, Text, Button } from 'react-native'
import useAuth from "../../hooks/useAuth"

export default function UserPanel() {
  const { auth, logout } = useAuth();

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido, </Text>
        <Text style={styles.title}>
          {`${auth.firstname} ${auth.lastname}`}
        </Text>
      </View>

      {/*items del menu para mostrar lista nombre favoritos etc*/}
      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth.firstname} ${auth.lastname}`} />
        <ItemMenu title="Username" text={auth.username}/>
        <ItemMenu title="Email" text={auth.email}/>
        <ItemMenu title="Total favoritos" text={`0 Pkemons`} />
      </View>

      <Button title="Desconectarse" onPress={logout} style={styles.btnLogout}/>
    </View>
  )
}

function ItemMenu(props){
  const {title, text} = props;

  return(
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content:{
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock:{
    marginBottom: 30,
  },
  title:{
    fontWeight: "bold",
    fontSize: 24,
  },
  dataContent:{
    marginBottom:20,

  },
  itemMenu:{
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF"
  },
  itemMenuTitle:{
    fontWeight: "bold",
    paddingRight: 20,
    width:120,
  },
  btnLogout:{
    paddingTop: 18,
  }
})