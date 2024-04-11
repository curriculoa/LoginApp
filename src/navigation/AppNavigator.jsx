import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from '../screens/HomeScreens';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
             
             <Stack.Screen name="HomeScreen" 
             component={HomeScreen} 
             options={{ title: 'Home'}}>
            </Stack.Screen> 

             <Stack.Screen name="LoginScreen"
              component={LoginScreen}
               options={{ title: 'Login'}}>
               </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;