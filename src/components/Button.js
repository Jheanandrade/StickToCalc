import React from 'react';
import {StyleSheet, Text, Dimensions, TouchableHighlight} from 'react-native';

// Criaremos Estilos que serão usados nas chamadas especificas!
// Styles é igual a "estilos", ou seja, todos os estilos criados estão aqui!
// Mais tarde chamaremos unicamento um estilo entre os aqui criados!

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#888',
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231'
  },
  buttonDouble: {
    width: (Dimensions.get('window').width /4) *2,
  },
  buttontriple:{
    width:( Dimensions.get('window').width /4 ) *3,
  },

})

export default props => {
  // A adição de parênteses após o "return" ocorre pela busca por bons hábitos tendo como benéfio
  //  evitar os problemas gerados pela inserção automática de ponto e vírgula (ASI) ao quebrar linhas!
 const styleButton = [styles.button]
 if (props.double) styleButton.push(styles.buttonDouble)
 if(props.triple) styleButton.push(styles.buttontriple)
 if(props.operation) styleButton.push(styles.operationButton)
  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={styleButton}> {props.label} </Text>
    </TouchableHighlight>
  )
}
