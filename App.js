import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import Header from './Components/Header';
import { NavigationContainer } from '@react-navigation/native';
import Form from './Components/Form';

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      <Form />
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  statusbar:{
    backgroundColor:"red"
  }
});
=======
import SearchBar from './Component/SearchBar';
import ViewApi from './Component/ViewApi';
import ViewAP from './Component/ViewAP';
import Home from './Component/Home';
import Settings from './Component/Settings';
import Prices from './Component/Prices';
import Profile from './Component/Profile';
import InputField from './Component/InputField/InputField';


// import AppNavigation from './Component/Index';


export default function App() {
  return (
    <View style={style.BG}>
      {/* <StatusBar backgroundColor='#FFD300' />
      <SearchBar />
      <ViewAP />
      <AppNavigation/> */}
      <InputField />
    </View>
  );
}

const style = StyleSheet.create({
  BG:{
      backgroundColor:"#FFF",
      flex:1
  }
})
>>>>>>> 71fb1f66d69f879a9ee9809eab3394b8b67a1623
