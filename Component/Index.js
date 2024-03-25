import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Prices from './Prices';
import Profile from './Profile';
import Settings from './Settings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function AppNavigation(){
    function MyStack() {
        return (
          <Stack.Navigator>
            {/* <Stack.Screen name="Home" component={Home} /> */}
            <Stack.Screen name="Tabs" component={MyTabs} />
            
            {/* <Stack.Screen name="Settings" component={Settings} /> */}
          </Stack.Navigator>
        );
      }
      function MyTabs() {
        return (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Prices" component={Prices} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        );
      }
    return(
        // <View>
        //     <Text>index</Text>
        // </View>
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}