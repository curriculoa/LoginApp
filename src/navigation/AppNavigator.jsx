import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from '../screens/HomeScreens';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>

                <Stack.Screen name="HomeScreen"
                    component={HomeScreen}
                    options={{ title: 'Home', headerShown: false }}>
                </Stack.Screen>

                <Stack.Screen name="LoginScreen"
                    component={LoginScreen}
                    options={{ title: 'Login', headerShown: false }}>
                </Stack.Screen>

                <Stack.Screen name="RegisterScreen"
                    component={RegisterScreen}
                    options={{ tittle: 'Registro', headerShown: false }}>
                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;