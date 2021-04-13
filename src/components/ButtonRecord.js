import React from 'react'
import {
TouchableOpacity,
View,
Text,
StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  buttonrecord: {
    marginBottom:15,
    color: '#8b10ae',
    fontSize: 100,
    padding: 20,
    backgroundColor: '#8b10ae',
    borderRadius: 50,
    borderColor: '#fff',
    width: 100,
    height:100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
  color: "#fff",
  fontSize: 30,
  justifyContent: 'center',
  alignItems: 'center',
  } 
})

export default props => 
  
<TouchableOpacity style = {styles.buttonrecord}> 
{/* <Text style= {styles.text}> {props.record}</Text>  */}
</TouchableOpacity>
  
