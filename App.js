import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './Component/SearchBar';
import ViewApi from './Component/ViewApi';
import ViewAP from './Component/ViewAP';
import Home from './Component/Home';
import Settings from './Component/Settings';
import Prices from './Component/Prices';
import Profile from './Component/Profile';


export default function App() {
  return (
    <View style={style.BG}>
      <StatusBar backgroundColor='#FFD300' />
      <SearchBar />
      <ViewAP />
    </View>
  );
}

const style = StyleSheet.create({
  BG:{
      backgroundColor:"#FFF",
      flex:1
  }
})
