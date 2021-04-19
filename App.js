import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FirebaseUtils from './components/FirebaseUtils';
import LoginButton from './components/LoginButton';
import MainScreen from './components/MainScreen';

const Stack = createStackNavigator();

export default function App() {
  FirebaseUtils.init();
  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginButton}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}