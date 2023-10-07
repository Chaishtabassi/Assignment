import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import Splashscreen from '../Splashscreen';
import Crousalscreen from '../Crousalscreen';
import Signinscreen from '../Signinscreen';
import Clienttab from './Clienttab';

const Auth=createStackNavigator();

const Authstack = () => {
  return (
    <Auth.Navigator>
          <Auth.Screen
            name='splash'
            component={Splashscreen}
            options={{
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />
             <Auth.Screen
            name='Crousal'
            component={Crousalscreen}
            options={{
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />
              <Auth.Screen
            name='SignInScreen'
            component={Signinscreen}
            options={{
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />
                   <Auth.Screen
            name='clienttab'
            component={Clienttab}
            options={{
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />
        </Auth.Navigator>
  )
}

export default Authstack