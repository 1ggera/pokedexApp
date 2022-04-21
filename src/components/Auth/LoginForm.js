import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, Keyboard } from 'react-native'

export default function LoginForm() {
  return (
    <View>
      <Text style={styles.title}>Iniciar Sesion </Text>

      <TextInput placeholder="Nombre de usuario" style={styles.input} autoCapitalize="none"></TextInput>

      <TextInput placeholder='Contraseña' style={styles.input} autoCapitalize="none" secureTextEntry={true}>
      </TextInput>

      <Button title="Entrar" onPress={() => console.log("Ingresando...")}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input:{
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
})