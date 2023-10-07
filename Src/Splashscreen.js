import React, { useEffect } from 'react';
import { View, Image, StyleSheet ,Dimensions} from 'react-native';

const Splashscreen = ({ navigation }) => {
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      clearTimeout(splashTimeout);
      navigation.navigate('Crousal');
    }, 3000);
  }, );

  return (
    <View style={styles.container}>
      <Image source={require('../Src/Assets/logo.png')}   style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e6f0',
  },
  logo: {
    width: Dimensions.get('window').width * 1.2, 
    height: Dimensions.get('window').width * 0.5, 
  },

});

export default Splashscreen;