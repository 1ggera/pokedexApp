import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Keyboard } from 'react-native'
import { useFormik } from "formik";
import * as Yup from "yup";
import {user, userDetails} from "../../utils/userDB";
import useAuth from "../../hooks/useAuth"
import { createIconSetFromFontello } from 'react-native-vector-icons';

export default function LoginForm() {
  const [error, setError] = useState("");
  const { login} = useAuth();

  const formik = useFormik({
    initialValues: initialValues(), //son los cvalores iniciales del formulario
    validationSchema: Yup.object(validationSchema()), //para validar que todos los campos estén completos
    validationOnChange: false,// para q haga validaciones solo cuando presiono 'entrar'
    onSubmit: (datosForm) => {
      setError('') //cuando ingresa aquí se limpian los campos

      const {username, password} = datosForm;
      //luego evalua como se ingresa
      if(username !== user.username || password !== user.password) {
        setError('El usuario o la contraseña son incorrectos');
        console.log();
      }
      else
      {
        login(userDetails);
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder="nombre_de_usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username} //le digo q el valor es lo ingresado en el input
        onChangeText={(text) => formik.setFieldValue("username", text)} //le digo q en username setee el 'text'
      />
      <TextInput placeholder='Contraseña' style={styles.input} autoCapitalize="none" secureTextEntry={true} value={formik.values.password} onChangeText={(text) => formik.setFieldValue("password", text)}/>
      
      {/*HandleSubmit*/}
      <Button title="Entrar" onPress={formik.handleSubmit}/> 

      {/*Alerts de errores con el formulario*/}
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>

      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

function initialValues (){
  return{
    username: "",
    password: "",
  };
}

//para establecer que la función valide username y pass
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