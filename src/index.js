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
    const [lastPressKey, setlastPressKey] = useState('')

    function calculator(){
      const splitNumbers = currentNumber.split(' ')

      let sumTotal = 0;
      let currentOperation = null;

      splitNumbers.forEach((item, index) => {
        console.log(item)
        console.log(sumTotal)
        if( item === '+'|| item === '-'|| item === 'x'|| item === '÷')
        {
            currentOperation = item
        } else if( index === 0) {
             sumTotal = parseInt(item)
        } else {

          console.log("calc")

          switch(currentOperation){
          case '+':
            
            sumTotal = sumTotal+ parseInt(item)
            break
          case '-': 
          
          sumTotal = sumTotal- parseInt(item)
          break
          case 'x':
            
            sumTotal = sumTotal * parseInt(item)
            break
          case '÷': 
          
          sumTotal = sumTotal / parseInt(item)
          break
        }
        }
      })

      setCurrentNumber((sumTotal ).toString())

    }
  
    function handleInput(buttonPressed){
     
      
      console.log(lastPressKey)
      if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "x" | buttonPressed === "÷" ){
        
        if(lastPressKey === '+' | lastPressKey === "-" | lastPressKey === "x" | lastPressKey === "÷" ){
          
          setlastPressKey(buttonPressed)
         
         return
        }
        if(!currentNumber) return
        setCurrentNumber(currentNumber + " " + buttonPressed + " ")

        setlastPressKey(buttonPressed)
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

          if(lastPressKey === '+' | lastPressKey === "-" | lastPressKey === "x" | lastPressKey === "÷" | lastPressKey === "=" ){
          
            setlastPressKey(buttonPressed)
           
           return
          }

          if(!currentNumber) return
          setLastNumber(currentNumber + " = ")
          calculator()
          return
      }
      setCurrentNumber(currentNumber + buttonPressed)
      setlastPressKey(buttonPressed)
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