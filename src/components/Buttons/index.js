import React from 'react'
import {View, Text, TouchableOpacity } from 'react-native'
import Styles from './styles'

export default function Buttons() {
  return (

    <View style = {Styles.contanier}>

      <View style = {Styles.contanierRL}> 



 <View style = {Styles.contanierLeft} >
       <TouchableOpacity style ={Styles.buttonOperations}> 
       <Text style = {Styles.textOperation}>+</Text> 
       </TouchableOpacity>

       <TouchableOpacity style ={Styles.buttonOperations}> 
       <Text style = {Styles.textOperation}>-</Text>  
       </TouchableOpacity>

       <TouchableOpacity style ={Styles.buttonOperations}>
         <Text style = {Styles.textOperation}>*</Text>  
         </TouchableOpacity>

       <TouchableOpacity style ={Styles.buttonOperations}> 
       <Text style = {Styles.textOperation}>/</Text>  
       </TouchableOpacity>
     
</View>     







<View style = {Styles.contanierRight}> 
 
 <View style = {Styles.contanierClear}>
<View style = {Styles.buttonClears}></View>
 </View>
      
      <View style = {Styles.contanierNumber}>
<View style = {Styles.buttonNumbers}></View>
      </View>
      

</View>

</View>

<View style = {Styles.contanierEqual}></View>
      

    </View>
  )
}