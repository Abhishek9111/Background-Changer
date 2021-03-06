import React,{useState} from 'react'

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native'

const App = () => {

  const [randomColor,setRandomColor] = useState('rgb(32,0,126)')
  const [defaultColor,setDefaultColor] = useState()
  
  
  const changeBg=()=>{
    let color='rgb(' +
    Math.floor(Math.random() * 256) +                         //for random non decimal numbers
    ','+
    Math.floor(Math.random() * 256) +                           //for random non decimal numbers
    ','+
    Math.floor(Math.random() * 256) +                           //for random non decimal numbers
    ')';
    
    setRandomColor(color)
  }

  const resetBg = ()=>{
    let color='rgb(0,0,0)'
    setRandomColor(color)
  }
  
  return(
    <>
    
    <StatusBar backgroundColor={randomColor}/>
    <View style={[styles.container,{backgroundColor:randomColor}]}>
    <TouchableOpacity onPress={changeBg}>
    <Text style={styles.text} >Tap</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={resetBg}>
    <Text style={styles.text1} >Reset Me</Text>
    </TouchableOpacity>
    </View>
    </>
  )

}


export default App


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  },
  text:{
    fontSize:30,
    backgroundColor:'#BB2CD9',
    paddingVertical:10,
    paddingHorizontal: 40,
    color:'#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase'
  },
  text1:{
    fontSize:30,
    backgroundColor:'#BB2CD9',
    paddingVertical:10,
    paddingHorizontal: 40,
    color:'#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase',
    marginTop:10
  }
});