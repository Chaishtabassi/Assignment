import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Rootnavigator from './Src/Navigation/Rootnavigator'

const App = () => {
  return (
    <View style={{flex:1}}>
      <Rootnavigator/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})