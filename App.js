import React ,{useState} from 'react'
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native'

const App = () => {

  
    const buttons = ['AC', 'DEL', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.',  '=']  
  
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

    const styles = StyleSheet.create({
      contanier:{ 
        flex:1
      },
      contanierResults: {
        flex: 10
      },  
      
      contanierButtons: {
        flex : 2,
        backgroundColor: '#20B2AA',
      },
      contanierOperation:{

      },
      contanierACDEL: {

      },
      contanierNumbers: {

      },
      contanierEqual: {

      },
      contanierRecord: {

      },

      results: {
        backgroundColor: "#f5f5f5",
        width: '100%',
        minHeight: 200,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flex: 1
      },
      resultText: {
        color:  "#000",
        margin: 10,
        fontSize: 100
      },
      historyText:{
        color: "#000",
        fontSize: 20,
        marginRight: 10,
        alignSelf: 'flex-end',
      },
      
    
      button: {
        backgroundColor: '#000',
        borderColor: "#ff6b00",
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 100,
        height:100,
      },
      textButton: {
        color:"#ff6b00",
        fontSize: 20,
      }, 
      buttonOperation: {
        backgroundColor: '#000',
        borderColor: "#ff6b00",
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
        width: 120,
        height:120,
      },
      textButtonOperation: {
        color:"#fff",
        fontSize: 20,
        }
      }
    )

  return (
    <SafeAreaView style = {styles.contanier}>

      <StatusBar
        backgroundColor="#f5f5f5"
        barStyle = 'dark-content'
        />

      <View style ={styles.contanierResults}>
      <View style = {styles.results}>
      <Text style = {styles.historyText} numberOfLines= {1} >{lastNumber}</Text>
        <Text style =  {styles.resultText} numberOfLines= {1}> {currentNumber} </Text>
      </View>
      </View>

      <View style = {styles.contanierButtons}>
        {buttons.map(
          (button) => 
          {if( button === '*' | button === '+' | button === '-' | button === '/' ) { 
            return (
            <TouchableOpacity style = {styles.buttonOperation} onPress={() => handleInput(button)} key={button} >
            <Text style = {styles.textButtonOperation}>{button}</Text>
            </TouchableOpacity>)}
               } )}
      </View>

      <View>
        {buttons.map()}
      </View>
      
    </SafeAreaView>
    
  )}
export default App
