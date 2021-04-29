import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FirebaseUtils from './components/FirebaseUtils';
import MainScreen from './components/MainScreen';
import LogInScreen from './components/LogInScreen';
import AccessScreen from './components/AccessScreen';
import Registerscreen from './components/Registerscreen';
import {DrawerStackNavigator} from './navigation'

const Stack = createStackNavigator();

export default function App() {
  FirebaseUtils.init();
  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <DrawerStackNavigator>
            <Stack.Navigator>
              <Stack.Screen
                name="Access"
                component={AccessScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Main"
                component={MainScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="LoginScreen"
                component={LogInScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Registerscreen"
                component={Registerscreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </DrawerStackNavigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}