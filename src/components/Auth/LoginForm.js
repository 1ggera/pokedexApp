import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, Keyboard } from 'react-native'
import { useFormik } from "formik";
import * as Yup from "yup";
import {user, userDetails} from "../../utils/userDB"

export default function LoginForm() {
  
  const formik = useFormik({
    initialValues: initialValues(), //son los cvalores iniciales del formulario
    validationSchema: Yup.object(validationSchema()),
    validationOnChange: false,// para q haga validaciones solo cuando presiono 'entrar'
    onSubmit: (datosForm) => {
      console.log("Formulario enviado...");

      console.log(datosForm);
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder="nombre_de_usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput placeholder='Contraseña' style={styles.input} autoCapitalize="none" secureTextEntry={true} value={formik.values.password} onChangeText={(text) => formik.setFieldValue("password", text)}/>
      
      <Button title="Entrar" onPress={formik.handleSubmit} />

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    textAlign: "center",
    fontSize: 28,
function initialValues (){
  return{
    username: "",
    password: "",
  }
}

function validationSchema (){
  return{
    username: Yup.string().required("Debes ingresar un usuario para ingresar"),
    password: Yup.string().required("Debes ingresar una contraseña para ingresar")
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input:{
    height: 40,
    margin: 15,
    height: 50,
    margin: 12,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error:{
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  }
})