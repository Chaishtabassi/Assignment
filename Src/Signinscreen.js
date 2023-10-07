import { StyleSheet, Text, View, TextInput, TouchableOpacity,Dimensions ,Image} from 'react-native'
import React,{useState} from 'react'

const Signinscreen = ({navigation}) => {

  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleTextChange = (newText) => {
      setText(newText);
  };

  const handleTextChang = (newText) => {
      setText2(newText);
  };

  const handleRememberMeChange = () => {
      setRememberMe(!rememberMe);
  };

  const Signin =()=>{
    navigation.navigate('clienttab');
  }

    return (
      <View style={{ flex: 1,justifyContent:'center',}}>
          <View style={{ alignItems: 'center', justifyContent: 'space-between', height: '56%'}}>
          <Image source={require('../Src/Assets/logo.png')} style={styles.logo}/>
              <Text style={{ fontSize: 28, fontWeight: '800',color:'#49b2e9' }}>Log In</Text>
              <TextInput
                  style={styles.input}
                  placeholder="Enter Email Id"
                  onChangeText={handleTextChange}
                  value={text}
              />
              <TextInput
                  style={styles.input}
                  placeholder="Enter Password"
                  onChangeText={handleTextChang}
                  value={text2}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <TouchableOpacity onPress={handleRememberMeChange}>
                          <View
                              style={{
                                  width: 20,
                                  height: 20,
                                  borderWidth: 1,
                                  borderColor: '#49b2e9',
                                  marginRight: 5,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                              }}
                          >
                              {rememberMe ? (
                                  <Icon name="check" size={18} color="black" />
                              ) : null}
                          </View>
                      </TouchableOpacity>
                      <Text>Remember Me</Text>
                  </View>
                  <TouchableOpacity>
                      <Text style={{color:'#49b2e9',fontSize:14,fontWeight:'400'}}>Forgot Password?</Text>
                  </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.button} onPress={Signin}>
              <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
              <View style={{flexDirection:'row',top:10}}>
                 <Text> Dont have an account?</Text>
                 <Text style={{color:'#49b2e9',fontWeight:'500'}}> Sign up</Text>
              </View>
             
          </View>
      </View>
  )
}

export default Signinscreen

const styles = StyleSheet.create({
  input: {
      width: '80%',
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      marginBottom: 10,
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
    logo: {
      width: Dimensions.get('window').width * 0.5, 
      height: Dimensions.get('window').width * 0.3, 
    },
})
