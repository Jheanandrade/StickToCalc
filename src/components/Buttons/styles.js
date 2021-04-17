import {StyleSheet} from 'react-native'
import colors from '../styles/colors' 


const styles = StyleSheet.create({
  contanier:{
    width: '100%',
    height: '67%',
    backgroundColor:'#fff'
  }, 
  contanierEnd: {
   height: '12%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 50,
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
  paddingTop: 20,
  paddingBottom:20,
},


contanierRight: {
  height: '100%',
  width: '75%',
  backgroundColor: '#fff'
},


contanierClear: {
paddingRight: 10,
width: '100%',
height: '12%',
backgroundColor: '#fff',
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center'
},


contanierNumber: {
  flex: 1,
  paddingTop: 10,
  paddingRight: 10,
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%',
  height: '88%',
  backgroundColor: '#fff',
  justifyContent: 'space-around',
 alignItems: 'center',
  },


  buttonOperations: {
  height: 75,
  width:75,
  borderRadius: 75 /2,
  backgroundColor: '#87CEFA',
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: "#000",
  shadowOffset:{
  width: 0,
  height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
  },


  buttonClears: {

    height: 45,
    width:120,
    borderRadius: 50 / 2,
    backgroundColor:  '#3A847D',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
shadowOffset:{
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
  },


 buttonNumber: {
   marginBottom: 30,
  borderRadius: 75/2, 
  width: 75,
  height: 75,
  backgroundColor: '#14213d',
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: "#000",
shadowOffset:{
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
 },


 buttonEqual: {
   flexDirection: 'row',
  height: 50,
  width:130,
  borderRadius: 50 / 2,
  backgroundColor:  '#3A847D',
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: "#000",
shadowOffset:{
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
},


textNumbers: {
  textAlign: 'center',
  color: '#fff',
  fontSize: 40, 
  fontWeight: 'bold'
}
})

export default styles