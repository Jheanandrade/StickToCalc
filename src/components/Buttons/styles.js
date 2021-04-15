import {StyleSheet} from 'react-native'
import colors from '../styles/colors' 


const styles = StyleSheet.create({
  contanier:{
  
    width: '100%',
    height: '70%',
    backgroundColor:'#D2691E'
  }, 
  
  contanierRL: {
    flexDirection: 'row',
    height: '88%'
  },

contanierLeft: {
  height: '100%',
  width: '25%',
  backgroundColor: colors.backgroudcolor,
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: 5,
  paddingBottom: 5,
},

contanierRight: {
  height: '100%',
  width: '75%',
  backgroundColor: '#556B2F'
},

contanierClear: {
width: '100%',
height: '12%',
backgroundColor: '#fff'
},

contanierNumber: {
  width: '100%',
  height: '88%',
  backgroundColor: '#8B4513'
  },

  buttonOperations: {
  height: 90,
  width:90,
  borderRadius: 45,
  backgroundColor: '#87CEFA',
  justifyContent: 'center',
  alignItems: 'center',
  },
  buttonNumbers: {
    height: 50,
    width:50,
    backgroundColor: '#1E90FF'
  },
  buttonClears: {
    height: 50,
    width:50,
    backgroundColor: '#0000FF'
  },
  contanierEqual: {
    height: 50,
    width:50,
    backgroundColor: '#000080'
  },
 buttonNumber: {
  borderRadius: 25, 
  width: 50,
  height: 50,
  borderWidth: 1,
  backgroundColor: '#fff'
 },
textOperation: {
  color: colors.numberoperations,
  fontSize: 45,
  textAlign: 'center'
}
})

export default styles