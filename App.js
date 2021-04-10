import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import Button from './src/components/Button'
import Display from './src/components/Display'

// Criar uma constante e igualha-la a uma arrow function que retorna todos os itens da tela 

const App = () => {
 
  var  state = {
    displayValue: 0,

  }
  return (
    <View style = {styles.contanier}> 

    <Display value = {state.displayValue} />

    <View style = {styles.buttons}>
              <Button label =  'ac' triple />
              <Button label = '/' operation />
              <Button label = '7' />
              <Button label = '8' />
              <Button label = '9' />
              <Button label = '*' operation />
              <Button label = '4' />
              <Button label = '5' />
              <Button label = '6' />
              <Button label = '-' operation/>
              <Button label = '1' />
              <Button label = '2' />
              <Button label = '3' />
              <Button label = '+' operation />
              <Button label = '0' double/>
              <Button label = '.'/>
              <Button label = '='/>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({ 
  contanier: {
    flex:1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
  })

export default App;
