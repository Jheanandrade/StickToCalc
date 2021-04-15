import React from 'react'
import {View , Text } from 'react-native'
import Style from './styles'


export default function Display() {
  return (
    <View style = {Style.contanier}>
      <Text style = {Style.text} >Isso é um Display</Text>
    </View>
  )
}