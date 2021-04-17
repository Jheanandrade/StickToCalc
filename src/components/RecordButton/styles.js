import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  contanier: {
    flexDirection: 'row',
  width: '100%',
  height: '13%',
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  },

  recordButton:{
    marginHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#007FFF',
    height: 60,
    width: 100,
    borderRadius: 150,
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
  text: {
  color: '#fff',
  fontSize: 50,
  textAlign: 'center'
}
})

export default styles