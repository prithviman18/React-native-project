import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
