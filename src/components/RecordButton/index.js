import React from 'react'
import {View , Text , TouchableOpacity} from 'react-native'
import Style from './styles'


export default function RecordButton() {
  return (
    <View style = {Style.contanier}>
    
   
      <TouchableOpacity style = {Style.recordButton}>
      <Text style = {Style.text}> ...</Text>
      </TouchableOpacity>
  

    </View>

    
  )
}