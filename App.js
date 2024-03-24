import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './Component/SearchBar';
import ViewApi from './Component/ViewApi';
import ViewAP from './Component/ViewAP';


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
