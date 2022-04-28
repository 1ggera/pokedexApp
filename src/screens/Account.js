import React from 'react';
import { View, Text} from 'react-native';
import LoginForm from "../components/Auth/LoginForm";
import UserPanel from "../components/Auth/UserPanel";
import useAuth from "../hooks/useAuth"

export default function Account() {

  const {auth} = useAuth();
  
  return (
    <View>
      {auth ? <UserPanel/> : <LoginForm/>}
    </View>
  )
}

/**
 * 
 * I am a man with big dreams in tecnology. Take mi CV and give me a chance.
 * 
 */