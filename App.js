/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ActivityIndicator
} from 'react-native';

export default function App() {
  // this is hook 
  const [Item1,setItem1] = useState('');
  const [Item2,setItem2] = useState('');
  const [loading,setLoading] = useState(false);
  // if we dont write anything is consider its bool value is true by default 
  if(loading){
    return(
     <View>
       <Text>Lover Percentage is calculating </Text>
       <ActivityIndicator size="small" color="green"/>
     </View> 

    )
  }
  

  const calculateLove = ()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
      alert(Math.floor(Math.random()*100)+"%")
    }, 2000);
    
  }

  return(
    <View>
      <Text>Welcome to love calculator </Text>
      <TextInput 
          placeholder='Enter First person Name'
          style= {{marginTop:5,borderWidth:2}}
          value = {Item1}
          onChangeText = {(Text)=> setItem1(Text)}
        />
      <TextInput 
          placeholder='Enter Second person Name'
          style= {{marginTop:5,borderWidth:2}}
          value = {Item2}
          onChangeText = {(Text)=> setItem2(Text)}
        />
        <Button 
          title = 'Press me'
          onPress={()=>{
            calculateLove()
          }}
        />
    </View>
  );
}


