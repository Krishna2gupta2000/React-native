import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Button,TextInput} from 'react-native';
import {useState,useEffect } from "react";

function Home() {

  const [count,setCount] = useState(0);
  const [input,setInput]= useState("");
  const [display,setDisplay]= useState("");


  //useEffect(() => setDisplay(input) );


    setTimeout(() => {
      setCount((count)=>count +1);
    },500);
    
  function resetFun(){
    setCount(0);
  }
  function displayBtn(){
    setInput("");
  }
  return (
    <View style={styles.container}>
      <TextInput 
      
      style={{height:40, borderColor: 'black',borderWidth:5,width:'40%',margin:20}}
      onChangeText= {text=>{setInput(text);setDisplay(input)}}
      value={input}
      />
      <Image style={{width:'100%',height:'30%',aspectRatio:1.5}} source={require("../assets/MyGIF.gif")}/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text style={{fontSize:20}}>Open up App.js to start working on your app!</Text>
      <Text>Running for : {count} seconds </Text>
      <Text style={{fontSize:20}}>Input String {display}</Text>
      <Button onPress={resetFun} title='reset' color='red' ></Button>
      <Button onPress={()=>{displayBtn(input);setInput('')}} title='ClrDisplay' color='lightblue'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50
  },
});
export default Home;
