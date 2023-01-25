import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './Component/Footer';
import Hearder from './Component/Hearder';


export default function App() {
  return (
    <View style={styles.container}>
          <StatusBar backgroundColor="white" barStyle="light-content" />

    <View style={styles.box}>
     <Hearder/>
     <Footer/>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:15,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:50,
  },

  box:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width:'100%',
    elevation:50,
  }
});
