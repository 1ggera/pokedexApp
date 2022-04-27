import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, Keyboard } from 'react-native'
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
import { useFormik } from "formik";
import * as Yup from "yup";
import {user, userDetaila} from "../../utils/userDB"
>>>>>>> Stashed changes
=======
import { useFormik } from "formik";
import * as Yup from "yup";
import {user, userDetaila} from "../../utils/userDB"
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      <Text style={styles.title}>Iniciar Sesion </Text>

      <TextInput placeholder="Nombre de usuario" style={styles.input} autoCapitalize="none"></TextInput>

      <TextInput placeholder='Contraseña' style={styles.input} autoCapitalize="none" secureTextEntry={true}>
      </TextInput>

      <Button title="Entrar" onPress={() => console.log("Ingresando...")}></Button>
=======
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    </View>
  )
}

<<<<<<< Updated upstream
<<<<<<< Updated upstream
const styles = StyleSheet.create({
  title:{
    textAlign: "center",
    fontSize: 28,
=======
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input:{
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    height: 40,
    margin: 15,
=======
    height: 50,
    margin: 12,
>>>>>>> Stashed changes
=======
    height: 50,
    margin: 12,
>>>>>>> Stashed changes
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
  error:{
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  }
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
})