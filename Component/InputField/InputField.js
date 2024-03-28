import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

export default function InputField() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

  const locations = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney'];

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://139.59.66.191:3016/userCreation', {
        user_name: userName,
        password: password,
        user_type_id: null, // Fill in user_type_id if needed
        warehouse_id: '', // Fill in warehouse_id if needed
        company_id: '', // Fill in company_id if needed
        department_id: null, // Fill in department_id if needed
        related_profile: '', // Fill in related_profile if needed
        user_group_id: '', // Fill in user_group_id if needed
        active_status: false // Set active_status based on your requirement
      });

      console.log('API Response:', response.data);

      // Handle success
      Alert.alert('Success', 'User created successfully!');
      // Clear form fields
      setUserName('');
      setPassword('');
      setEmail('');
      setLocation('');
    } catch (error) {
      console.error('API Error:', error);
      // Handle error
      Alert.alert('Error', 'Failed to create user. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>User Name:</Text>
      <TextInput
        placeholder="Enter your user name"
        value={userName}
        onChangeText={text => setUserName(text)}
        style={styles.input}
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        style={styles.input}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <Text style={styles.label}>Location:</Text>
      <Picker
        selectedValue={location}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => setLocation(itemValue)}
      >
        {locations.map((loc, index) => (
          <Picker.Item key={index} label={loc} value={loc} />
        ))}
      </Picker>

      <Button title="Submit" onPress={handleSubmit} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30
  },
  label: {
    color: '#FFA500',
    fontStyle: 'italic',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
  },
});
