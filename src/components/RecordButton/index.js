import React from 'react'
import {View , Text , TouchableOpacity} from 'react-native'
import Style from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function RecordButton({onRecord, onCancel}) {
  return (
    <View style = {Style.contanier}>
    
   
      <TouchableOpacity activeOpacity={0.7} onPressIn= {onRecord} onPressOut= {onCancel} style = {Style.recordButton} >
      <Icon name="microphone" size = {40} color= '#fff'/>
      </TouchableOpacity>


    </View>

    
  )
}