import { Image, StyleSheet, Text, View,useWindowDimensions,TouchableOpacity,Dimensions} from 'react-native'
import React, { useEffect, useRef, useState }  from 'react'
import Slides from './Data/Slides';

const Crousalitem = ({item ,scrollto, currentIndex,handleSkipPress}) => {

    const [currentindex, setcurrentindex] = useState(0);
    const{width}=useWindowDimensions();

    const renderDots = () => {
        return Slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === currentIndex ? '#49b2e9' : 'gray',
              },
            ]}
          />
        ));
      };


  return (
    <View style={[styles.container,{width}]}>
      <Image source={item.image} style={[ styles.image],{width, resizeMode:'contain'}}/>
      <View style={styles.dotsContainer}>{renderDots()}</View>
      <View style={{flex:0.5,margin:15}}>
      <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={scrollto}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkipPress}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Crousalitem

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        flex:0.7,
        justifyContent:'center'
    },
    title:{
        fontWeight:'800',
        fontSize:28,
        marginBottom:10,
        color:'#49b2e9',
        textAlign:'center'
    },
    description:{
        fontWeight:'300',
        color:'black',
        textAlign:'center',
        paddingHorizontal:64
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
      },
      dot: {
        width: 18,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
      },
      button: {
        backgroundColor: '#49b2e9',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
        width:Dimensions.get('window').width * 0.8, 
        height:50,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:16
      },

      skipButton: {
        position: 'absolute',
        top: 20, 
        right: 20, 
        backgroundColor: 'transparent',
        padding: 10,
      },
      skipButtonText: {
        color: '#49b2e9',
        fontSize: 17,
        fontWeight:'500'
      },
})