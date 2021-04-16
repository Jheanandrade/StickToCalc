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

      if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "x" | buttonPressed === "÷"| buttonPressed === "=" ){
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