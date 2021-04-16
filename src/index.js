import React , {useState} from 'react'
import { View , Text, StyleSheet, StatusBar } from 'react-native'
import Button from  './components/Buttons'
import Display from './components/Display'  
import RecordButton from './components/RecordButton'

const styles = StyleSheet.create({
  contanier:{
    height: '100%' ,
    width: '100%',
    backgroundColor: '#fff'
  }
})

export default function App() {
  
    const [currentNumber, setCurrentNumber] = useState("")
    const [lastNumber, setLastNumber] = useState("")

    function calculator(){
      const splitNumbers = currentNumber.split(' ')
      const fistNumber = parseFloat(splitNumbers[0])
      const lastNumber = parseFloat(splitNumbers[2])
      const operator = splitNumbers[1]
  
      switch(operator){
        case '+':
          setCurrentNumber((fistNumber + lastNumber).toString())
          return
        case '-': 
          setCurrentNumber((fistNumber - lastNumber).toString())
          return
        case '*':
          setCurrentNumber((fistNumber * lastNumber).toString())
          return
        case '/': 
          setCurrentNumber((fistNumber / lastNumber).toString())
          return
      }
    }
  
    function handleInput(buttonPressed){

      if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/" ){
        if(!currentNumber) return
        setCurrentNumber(currentNumber + " " + buttonPressed + " ")
        return
      }

      switch(buttonPressed){
        case 'DEL':
          setCurrentNumber(currentNumber.substring(0, (currentNumber.length -1)))
          return
        case 'AC':
         setLastNumber("")
          setCurrentNumber("")
          return
        case '=':
          setLastNumber(currentNumber + " = ")
          calculator()
          return
      }
      setCurrentNumber(currentNumber + buttonPressed)
    }

  return (
    <View style = {styles.contanier}> 
     <StatusBar
        backgroundColor="#fff"
        barStyle = 'dark-content'
        />
      <Display history = {lastNumber} calc = {currentNumber}/>
      <Button handlePress={handleInput} />
      <RecordButton/>
  
    </View>
  );
}