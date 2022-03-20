// import React from 'react';
// import { Image } from "react-native"
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Icon from "react-native-vector-icons/FontAwesome5";
// import FavoriteScreen from '../screens/Favorite';
// import PokedexScreen from "../screens/Pokedex";
// import Account from "../screens/Account";

// const Tab = createBottomTabNavigator();

// export default function Navigation() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Favoritex"
//         component={FavoriteScreen}
//         options={{
//           tabBarLabel: "Favoritrix",
//           tabBarIcon: ({ color, size }) => 
//             <Icon name="heart" color={color} size={size} />,
//           headerTitle: "Favoritix"
//            }}
//       />

//       <Tab.Screen
//         name="Pokedex"
//         component={PokedexScreen}
//         options={{
//           tabBarLabel: "",
//           tabBarIcon: () => renderPokeball(),
//           headerTitle: "Pokedexi"
//         }}
//       />

//       <Tab.Screen
//         name="Account"
//         component={Account} 
//         options={{ 
//           tabBarLabel: "Mi cuenta",
//           tabBarIcon: ({color, size}) => 
//             <Icon name="user" color={color} size={size} />,
//           headerTitle: "Accounti"
//           }} />
//     </Tab.Navigator>
//   )
// }

// function renderPokeball() {
//   return(
//     <Image
//       source={require('../assets/pokeball.png')}
//       style={{ width: 57, height: 57/* top: -1 */ }}
//     />
//   )
// }