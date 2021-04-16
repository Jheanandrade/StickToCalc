import React from 'react'
import {View , Text } from 'react-native'
import Style from './styles'


export default function Display() {
  return (

    <View style = {Style.contanier}>


      <View>
    <Text style ={Style.textHistory}>2 + 2 </Text>
    </View>


    <View>
    <Text style = {Style.textResult} >2 + 2 </Text>
    </View>
      

    

    </View>

    
  
  )
}