import React  from "react";
import { createStackNavigator } from "@react-navigation/stack"; 
import { 
    createDrawerNavigator ,
    DrawerItemList,
    DrawerContentScrollView,
    DrawerItem
} from "@react-navigation/drawer";

import MainScreen from '../components/MainScreen';
import LogInScreen from '../components/LogInScreen';
import RegisterScreen from '../components/Registerscreen';

import AccessScreen from '../components/AccessScreen';
import HistoryScreen from '../components/HistoryScreen'; 
import RestaurantDetail from '../components/RestaurantDetail';

import firebase from "firebase/app";
import { ImageBackground } from "react-native";

 
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

/**
 * Drawer Content
 * Drawer menu with content routes
 * @param {*} props 
 * @returns JSX.element
 */
function CustomDrawerContent(props) {
    let checkFirebaseUser = firebase.auth().currentUser && firebase.auth().currentUser.uid
    
    const filteredProps = {
      ...props,
      state: {
        ...props.state,
        routeNames: props.state.routeNames.filter( 
          // To hide multiple options you can add & condition with screen name
          (routeName) => {
            routeName !== 'Access' && routeName !== 'Access' && 
            routeName!== 'Login' && routeName!== 'Login' && 
            routeName!== 'Register' && routeName!== 'Register';
          }
        ),
        routes: props.state.routes.filter(
          (route) =>
            route.name !== 'Access' && route.name !== 'Access' && 
            route.name !== 'Login' && route.name !== 'Login' && 
            route.name !== 'Register' && route.name !== 'Register' 
        ),
      },
    };

    return (
      // <ImageBackground style={{ flex:1 }}  source={require("../assets/uiForApp/ScreenForComponents.png")}  >
      <DrawerContentScrollView {...filteredProps}>

        <DrawerItemList  {...filteredProps} />
        {checkFirebaseUser ? 
          <DrawerItem
            label="Logout"
            onPress={() => {
              firebase.auth().signOut().then((data) => {
                props.navigation.navigate('Access') 
              }); 
            }}
        /> :    
        <DrawerItem
          label="Login / Register"
          onPress={() => {
            firebase.auth().signOut().then((data) => {
              props.navigation.navigate('Access') 
            }); 
          }}
        />
        }  
      </DrawerContentScrollView>
      //</ImageBackground>  
    );
  }

  /**
   * Drawer Stack
   * Nav stack using DrawerStack instead of Navigator component for menu
   * @returns JSX.element
   */
const DrawerStackNavigator = () => {
  return (
    // Add All Screen here
    <Drawer.Navigator
      initialRouteName={'Access'}
      drawerContent={(props) => <CustomDrawerContent {...props} />} 
    >
    <Drawer.Screen
      name="Main"
      component={MainScreen}
      options={{headerShown: false}}
    /> 
    <Drawer.Screen
      name="History"
      component={HistoryScreen}
      options={{
          headerShown: false, 
      }}   
    /> 
    <Drawer.Screen
      name="Recommended"
      component={RestaurantDetail}
      options={{
          headerShown: false, 
      }}   
    /> 
    <Drawer.Screen
      name="Access"
      component={AccessScreen}
      options={{
        headerShown: false,
        swipeEnabled: false, 
      }}   
    />  
    <Drawer.Screen
      name="Login"
      component={LogInScreen}
      options={{
        headerShown: false,
        swipeEnabled: false,  
      }}
    />
      <Drawer.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
          swipeEnabled: false, 
        }}
    />
    </Drawer.Navigator>
  );
} 

export { 
     DrawerStackNavigator 
};