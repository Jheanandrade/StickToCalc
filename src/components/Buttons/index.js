import React, {useCallback, useMemo, useState} from 'react'
import {View, Text, TouchableOpacity, Animated} from 'react-native'
import Styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ButtonAnimated from './components/buttonAnimation'

export default function Buttons() {


  return (

<View style = {Styles.contanier}>

      <View style = {Styles.contanierRL}> 

 <View style = {Styles.contanierLeft} >
       
       <ButtonAnimated style ={[Styles.buttonOperations, {backgroundColor: '#ee6c4d',}]}>
                        <Icon name="plus" size={50} color="#fff" />
       </ButtonAnimated>

       <ButtonAnimated style ={[Styles.buttonOperations, {backgroundColor: '#415a77',}]}>
                       <Icon name="minus" size={50} color="#fff" />  
       </ButtonAnimated>
       
       <ButtonAnimated style ={[Styles.buttonOperations, {backgroundColor: '#f9c74f',}]}>
                       <Icon name="times" size={50} color="#fff" />  
       </ButtonAnimated>

       <ButtonAnimated style ={[Styles.buttonOperations, {backgroundColor: '#718355',}]}>
                        <Icon name="divide" size={50} color="#fff" />  
       </ButtonAnimated>
     
</View>     



  <View style = {Styles.contanierRight}> 
 
      <View style = {Styles.contanierClear}>

< TouchableOpacity activeOpacity={0.7} style = {[Styles.buttonClears, {backgroundColor: '#ff6b6b'}]}>
                      <Icon name="trash" size={25} color= '#fff'/>
</TouchableOpacity>

< TouchableOpacity activeOpacity={0.7} style = {[Styles.buttonClears, {backgroundColor: '#1a535c'}]}>
                      <Icon name="backspace" size={25} color= '#fff'/>
</TouchableOpacity>


 </View>
      
      <View style = {Styles.contanierNumber}>

      <ButtonAnimated style ={Styles.buttonNumber}>
                        <Icon name="divide" size={50} color="#fff" />  
       </ButtonAnimated>
       <ButtonAnimated style ={Styles.buttonNumber}>
                        <Icon name="divide" size={50} color="#fff" />  
       </ButtonAnimated>
       <ButtonAnimated style ={Styles.buttonNumber}>
                        <Icon name="divide" size={50} color="#fff" />  
       </ButtonAnimated>
       <ButtonAnimated style ={Styles.buttonNumber}>
                        <Icon name="divide" size={50} color="#fff" />  
       </ButtonAnimated>
       <ButtonAnimated style ={Styles.buttonNumber}>
                        <Icon name="divide" size={50} color="#fff" />  
       </ButtonAnimated>
       <ButtonAnimated style ={Styles.buttonNumber}>
                        <Icon name="divide" size={50} color="#fff" />  
       </ButtonAnimated>
       <ButtonAnimated style ={Styles.buttonNumber}>
                        <Icon name="divide" size={50} color="#fff" />  
       </ButtonAnimated>
       <ButtonAnimated style ={Styles.buttonNumber}>
                        <Icon name="divide" size={50} color="#fff" />  
       </ButtonAnimated>
       <ButtonAnimated style ={Styles.buttonNumber}>
                        <Icon name="divide" size={50} color="#fff" />  
       </ButtonAnimated>
       <ButtonAnimated style ={Styles.buttonNumber}>
                        <Icon name="divide" size={50} color="#fff" />  
       </ButtonAnimated>



      </View>
      

</View>

</View>


<View style = {Styles.contanierEnd}>
<ButtonAnimated style= {Styles.buttonEqual}>
<Icon name="equals" size={50} color="#fff" />  
</ButtonAnimated>
</View>

      

    </View>
  )
}