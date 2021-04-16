import React from 'react'
import {View , Text, ScrollView } from 'react-native'
import Style from './styles'


export default function Display({history, calc}) {
  return (

    <View style = {Style.contanier}>


      <View>
    <Text style ={Style.textHistory} numberOfLines={1}>{history}</Text>
    </View>

    <ScrollView showsHorizontalScrollIndicator = {false} horizontal>

    <View>
    <Text style = {Style.textResult} numberOfLines={1}> {calc} </Text>
    </View>

    </ScrollView>
    
      

    

    </View>

    
  
  )
}