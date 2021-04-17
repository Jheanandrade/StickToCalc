import React , {useCallback, useEffect, useState} from 'react'
import { View , Text, StyleSheet, StatusBar } from 'react-native'
import Voice from '@react-native-community/voice'
import Button from  './components/Buttons'
import Display from './components/Display'  
import RecordButton from './components/RecordButton'
import Tts from 'react-native-tts'

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

    function calculator(expression){
      const splitNumbers = expression.split(' ')

      let sumTotal = 0;
      let currentOperation = null;

      splitNumbers.forEach((item, index) => {
        console.log(item)
        console.log(sumTotal)
        if( item === '+'|| item === '-'|| item === 'x'|| item === '÷'|| item === '/')
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
          case '/': 
          
          sumTotal = sumTotal / parseInt(item)
          break
        }
        }
      })

      setCurrentNumber((sumTotal ).toString())
      return sumTotal

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
           _destroyRecognizer()
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
          calculator(currentNumber)
          return
      }
      setCurrentNumber(currentNumber + buttonPressed)
      setlastPressKey(buttonPressed)
    }

  const [pitch, setPitch] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([])


  useEffect(() => {
    function onSpeechStart(e) {
      console.log('onSpeechStart: ', e);
      setStarted('√');
    }
    function onSpeechEnd(e) {
      console.log('onSpeechEnd: ', e);
      setEnd('√');
    }

    function onSpeechError(e) {
      console.log('onSpeechError: ', e);
      setError(e.value);
    }

    function onSpeechResults(e) {
      console.log('onSpeechResults: ', e);
      setResults(e.value);
    }

    function onSpeechPartialResults(e) {
      console.log('onSpeechPartialResults: ', e);
      setPartialResults(e.value);
    }

    function onSpeechVolumeChanged(e) {
      // console.log('onSpeechVolumeChanged: ', e);
      setPitch(e.value);
    }

    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
    Tts.setDefaultLanguage('pt-BR');
    Tts.setDefaultVoice("pt-BR-SMTf00")
    Tts.setDefaultRate(0.8, true)
    Tts.voices().then(voices => console.log(voices))
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
  
  const _startRecognizing = async () => {
    setPitch('');
    setError('');
    setStarted('');
    setResults([]);
    setPartialResults([]);
    setEnd('');
    try {
      await Voice.start('pt-BR');
    } catch (e) {
      console.error(e);
    }
  };


  const _stopRecognizing = async () => {
    //Stops listening for speech
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };


  const _cancelRecognizing = async () => {
    //Cancels the speech recognition
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  };


  const _destroyRecognizer = async () => {
    //Destroys the current SpeechRecognizer instance
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    setPitch('');
    setError('');
    setStarted('');
    setResults([]);
    setPartialResults([]);
    setEnd('');
  };

  useEffect(()=>{
    let valueCalc =  finalResult(results)
    console.log(results) 
    console.log('analise de parametros ', valueCalc)
   
    if(valueCalc){
      valueCalc = valueCalc.toLowerCase().replace('dividido por',"/").replace('com', '+').replace('tira', '-').replace('arrocha', '+')
      setCurrentNumber(valueCalc)
      const voiceResult = calculator(valueCalc)
      setLastNumber(valueCalc + ' =')
      Tts.speak(` O resultado é ${voiceResult}`, {
        androidParams: {
          KEY_PARAM_PAN: 1,
          KEY_PARAM_VOLUME: 1,
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
      });

    console.log(voiceResult)
    }
  },[results])
  
  const finalResult = useCallback((counts)=> {
    
    const validResult = counts.find((value)=>{
      console.log(value)
      const resultsSplit = value.toLowerCase().replace('dividido por',"/").replace('com', '+').replace('tira', '-').replace('arrocha', '+').split(' ')

      console.log(resultsSplit)

      const numberPattern = /\d/

      const valid = resultsSplit.every((item)=> {
          item = `${item}`.trim()
          console.log('Item encontrado:', item)
        if( item === '+'||item === '-'||item === 'x'||item === '/' ) {

          console.log('encontrei o operador')
          return true
        } else if(numberPattern.test(parseInt(item))){
          console.log('encontrei o numero')
          return true
        }
         else {
           console.log('encontrei nada')
           return false
         }
      }) 
      return valid
    })
    return validResult
 }, [] ) 
  

  return (

    <View style = {styles.contanier}> 
     <StatusBar
        backgroundColor="#fff"
        barStyle = 'dark-content'
        />
      
      <Display history = {lastNumber} calc = {currentNumber}/>
      
      <Button handlePress={handleInput} />
    
      <RecordButton onRecord={_startRecognizing} onCancel = {_stopRecognizing} />
      
  
    </View>
  );
}