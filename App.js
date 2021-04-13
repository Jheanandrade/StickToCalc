import React ,{useState} from 'react'
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'

const App = () => {

  
    const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '=']  
  
    const [currentNumber, setCurrentNumber] = useState("")

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

      console.log(buttonPressed)

      if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/" ){
        setCurrentNumber(currentNumber + " " + buttonPressed + " ")
        return
      }

      switch(buttonPressed){
        case 'DEL':
          setCurrentNumber(currentNumber.substring(0, (currentNumber.length -1)))
          return
        case 'AC':
         
          setCurrentNumber("")
          return
        case '=':

          calculator()
          return
        case '+/-':
          return
      }
      setCurrentNumber(currentNumber + buttonPressed)
    }

  return (
    <SafeAreaView>

      <View >
        <Text >{currentNumber}</Text>
      </View>

      <View>
        {buttons.map(
          
          (button) => 
          button === '=' ?
        <TouchableOpacity onPress={() => handleInput(button)} key={button}>
          <Text >{button}</Text>
        </TouchableOpacity>

          :

          <TouchableOpacity onPress={() => handleInput(button)} key={button} >
            <Text >{button}</Text>
          </TouchableOpacity>
          
        )}
      </View>
      
    </SafeAreaView>
    
  )
}

export default App;
