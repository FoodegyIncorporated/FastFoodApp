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
import RestaurantDetail from './components/RestaurantDetail';
import {DrawerStackNavigator} from './navigation'

const Stack = createStackNavigator();

export default function App() {
  FirebaseUtils.init();
  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <DrawerStackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
  );
}
