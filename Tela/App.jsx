import {View, Button, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Home from './Screens/Home.jsx';
import User from './Screens/User.jsx';
import SignIn from './Screens/Sign.jsx';
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function App() {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Home">
                <Stack.Screen name="Home" component={Home} options ={{
                    title:"Bem Vindo",
                    headerStyle:{
                        backgroundColor: "#17A9FD"
                    },
                    headerTintColor:"#fff",
                    headerTitleAlign:"center"
                }}/>
                <Stack.Screen name="Sign-in" component={SignIn} options ={{
                    title:"Vamos começar",
                    headerStyle:{
                        backgroundColor: "#17A9FD"
                    },
                    headerTintColor:"#fff",
                    headerTitleAlign:"center"}}/>
                <Stack.Screen name="User" component={User}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;