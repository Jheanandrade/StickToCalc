import React from 'react'
import { View , Text, StyleSheet } from 'react-native'
import Button from  './components/Buttons'
import Display from './components/Display'  
import RecordButton from './components/RecordButton'

const styles = StyleSheet.create({
  contanier:{
    height: '100%' ,
    width: '100%',
    backgroundColor: '#B0C4DE'
  }
})

export default function App() {
  return (
    <View style = {styles.contanier}> 
     
      <Display/>
      <Button />
      <RecordButton/>
  
    </View>
  );
}