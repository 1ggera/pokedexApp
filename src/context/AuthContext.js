//este sería el contexto del user
import React, { useState, createContext } from "react";
//creo el contexto con export para poder reutilizarlo
export const AuthContext = createContext({
  //le digo q datos va a tener mi contexto
  auth: undefined,
  login: () => {},
  logout: () => {},
})

//provider: son todas las acciones que va a hacer nuestro contexto: Ej: usar funciones como setearvalor, obtenervalor, eliminar valor, login logout 
//El provider envuelve la app, entonces acá le digo que en su interior tendrá una app como children y contiene props
export function AuthProvider(props){
  const { children } = props;
  //un estado
  const [auth, setauth] = useState(undefined);

  const login = (userData) => {
    setauth(userData);
  };

  const logout = () => {
    setauth(undefined)
  };

  //objeto
  const valueContext = {
    auth,
    login,
    logout,
  };
  
  return(
    <AuthContext.Provider value={valueContext}>
      { children }
    </AuthContext.Provider>
    )
}

