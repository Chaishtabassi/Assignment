import { StyleSheet, Text, View,Image } from 'react-native'
import * as  React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from '../Screens/Homescreen';
import Icon from 'react-native-vector-icons/EvilIcons';
import Peoplescreen from '../Screens/Peoplescreen';
import Profilescreen from '../Screens/Profilescreen';
import Searchscreen from '../Screens/Searchscreen';

const Clienttab = () => {

    const Clienttab = createBottomTabNavigator();

  return (
    <Clienttab.Navigator>
            <Clienttab.Screen
            name='Homescreen'
            component={Homescreen}
            options={{
                headerShown:false,
                tabBarLabel: '',
                tabBarIcon:({color,size})=>(
                    <Image source={require('../Assets/home.png')}/>
                )
            }}
            />
             <Clienttab.Screen
            name='people'
            component={Peoplescreen}
            options={{
                headerShown:false,
                tabBarLabel: '',
                tabBarIcon:({color,size})=>(
                    <Image source={require('../Assets/group.png')}/>
                )
            }}
            />
            
                <Clienttab.Screen
            name='Search'
            component={Searchscreen}
            options={{
                headerShown:false,
                tabBarLabel: '',
                tabBarIcon:({color,size})=>(
                    <Image source={require('../Assets/search.png')}/>
                )
            }}
            />
             <Clienttab.Screen
            name='Profile'
            component={Profilescreen}
            options={{
                headerShown:false,
                tabBarLabel: '',
                tabBarIcon:({color,size})=>(
                    <Image source={require('../Assets/group.png')}/>
                )
            }}
            />
        </Clienttab.Navigator>
  )
}

export default Clienttab

const styles = StyleSheet.create({})