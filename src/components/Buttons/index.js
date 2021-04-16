import React, {useCallback, useMemo, useState} from 'react'
import {View, Text, TouchableOpacity, Animated} from 'react-native'
import Styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ButtonAnimated from './components/buttonAnimation'

const KEYS_NUMBER = [7,8,9,4,5,6,1,2,3,0]


export default function Buttons({handlePress}) {


  return (

<View style = {Styles.contanier}>

      <View style = {Styles.contanierRL}> 

 <View style = {Styles.contanierLeft} >
       
       <ButtonAnimated onPress= {()=> handlePress('+')}style ={[Styles.buttonOperations, {backgroundColor: '#f08080',}]}>
                        <Icon name="plus" size={50} color="#fff" />
       </ButtonAnimated>

       <ButtonAnimated onPress= {()=> handlePress('-')} style ={[Styles.buttonOperations, {backgroundColor: '#415a77',}]}>
                       <Icon name="minus" size={50} color="#fff" />  
       </ButtonAnimated>
       
       <ButtonAnimated onPress= {()=> handlePress('x')} style ={[Styles.buttonOperations, {backgroundColor: '#f9c74f',}]}>
                       <Icon name="times" size={50} color="#fff" />  
       </ButtonAnimated>

       <ButtonAnimated onPress= {()=> handlePress('÷')}style ={[Styles.buttonOperations, {backgroundColor: '#c75146',}]}>
                        <Icon name="divide" size={50} color="#fff" />  
       </ButtonAnimated>
     
</View>     



  <View style = {Styles.contanierRight}> 
 
      <View style = {Styles.contanierClear}>

< TouchableOpacity onPress={()=> handlePress('AC')} activeOpacity={0.7} style = {[Styles.buttonClears, {backgroundColor: '#e07a5f'}]}>
                      <Icon name="trash" size={25} color= '#fff'/>
</TouchableOpacity>

< TouchableOpacity onPress={()=> handlePress('DEL')} activeOpacity={0.7} style = {[Styles.buttonClears, {backgroundColor: '#1a535c'}]}>
                      <Icon name="backspace" size={25} color= '#fff'/>
</TouchableOpacity>


 </View>
      
      <View style = {Styles.contanierNumber}>
        
        {KEYS_NUMBER.map((keyNumber) =>{
        return (  
         <ButtonAnimated key= {keyNumber} onPress={()=>handlePress(keyNumber)} style ={Styles.buttonNumber}>
                        <Text style = {Styles.textNumbers}>{keyNumber}</Text> 
       </ButtonAnimated>)} )}
      </View>
      

</View>

</View>


<View style = {Styles.contanierEnd}>
<ButtonAnimated onPress={()=> handlePress('=')} style= {Styles.buttonEqual}>
<Icon name="equals" size={50} color="#fff" />  
</ButtonAnimated>
</View>

      

    </View>
  )
}