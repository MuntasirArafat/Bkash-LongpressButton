import { StyleSheet, Text, TouchableHighlight, View ,Image,Alert } from 'react-native'
import React ,{ useState ,useEffect} from 'react'
import ProgressBar from '../Component/Process'


const Footer = () => {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (counter >= 805) {
      setCounter(0);
      Alert.alert("Payment Successful 🍕🍕🍕");
    
    }
  }, [counter]);

  const handleLongPressIn = () => {
    const id = setInterval(() => {
      setCounter(prevCounter => prevCounter + 60);
    }, 100);
    setIntervalId(id);
  };
  const handleLongPressOut = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setCounter(0);
  };


  return (

    <TouchableHighlight
     style={styles.footer}
     onLongPress={handleLongPressIn}
     onPressOut={handleLongPressOut}
     
     
     >

 
    <View style={styles.box}>
    <ProgressBar progress={counter}/>
    <Image 
    source={require('../assets/bkash.png')}
    style={{ width: 30, height: 50, }}
      />

      <Text style={styles.text}>সেনড মানি করতে ট্যাপ করে ধরে রাখুন</Text>
    </View>
    </TouchableHighlight>

  )
}

export default Footer

const styles = StyleSheet.create({
  footer:{
    justifyContent:"center",
    position:"absolute",  
    bottom:0, 
    padding:20,
    paddingTop:30,
    paddingBottom:30,
    width:"100%",
    height:100,
    backgroundColor:"#ed2c7f",
    alignItems:'center',
   
  },

  box:{
   justifyContent:'center',
   alignItems:'center',
 
  },

   text:{
    marginTop:10,
    fontSize:17,
    fontWeight:'500',
    color:'#f2f2f2',
    width:"70%",
},


})
