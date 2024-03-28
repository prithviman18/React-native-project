import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";


const Form = () => {
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Value, setDropdown2Value] = useState('');
  const [dropdown3Value, setDropdown3Value ] = useState('')
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [input3Value, setInput3Value] = useState('');
  const [input4Value, setInput4Value] = useState('');
  const [input5Value, setInput5Value] = useState('');
  const [input6Value, setInput6Value] = useState('');
  const [input7Value, setInput7Value] = useState('');
  const [input8Value, setInput8Value] = useState('');
  const [input9Value, setInput9Value] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());


  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setSelectedDate(selectedDate);
      setInput9Value(selectedDate.toDateString());
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const handleFormSubmit = () => {
    // Handle form submission logic here
    console.log('Dropdown 1:', dropdown1Value);
    console.log('Dropdown 2:', dropdown2Value);
    console.log('Input 1:', input1Value);
    console.log('Input 2:', input2Value);
    console.log('Input 3:', input3Value);
    console.log('Input 4:', input4Value);
    console.log('Input 5:', input5Value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formRow}>
        <Text style={styles.label}>Source:</Text>
        <Dropdown
          placeholder='Select Source'
          placeholderStyle = {styles.placeholderStyle}
          style={styles.input}
          iconColor='red'
          options={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ]}
          value={dropdown1Value}
          onSelect={(value) => setDropdown1Value(value)}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Sales Person:</Text>
        <Dropdown
          placeholderStyle = {styles.placeholderStyle}
          placeholder='Select Sales Person'
          iconColor='red'
          style={styles.input}
          options={[
            { label: 'Option A', value: 'optionA' },
            { label: 'Option B', value: 'optionB' },
            { label: 'Option C', value: 'optionC' },
          ]}
          value={dropdown2Value}
          onSelect={(value) => setDropdown2Value(value)}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Contact Name:</Text>
        <TextInput
          placeholder='Enter Name'
          style={styles.input}
          value={input1Value}
          onChangeText={(text) => setInput1Value(text)}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Company Name:</Text>
        <TextInput
          placeholder='Enter Company'
          style={styles.input}
          value={input2Value}
          onChangeText={(text) => setInput2Value(text)}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Job Position:</Text>
        <TextInput
          placeholder='Enter Job Position'
          style={styles.input}
          value={input3Value}
          onChangeText={(text) => setInput3Value(text)}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Phone:</Text>
        <TextInput
          placeholder='Enter Phone'
          style={styles.input}
          value={input4Value}
          onChangeText={(text) => setInput4Value(text)}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>WhatsApp Number:</Text>
        <TextInput
          placeholder='Enter Whatsapp'
          style={styles.input}
          value={input6Value}
          onChangeText={(text) => setInput6Value(text)}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          placeholder='Enter Email'
          style={styles.input}
          value={input7Value}
          onChangeText={(text) => setInput7Value(text)}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Address:</Text>
        <TextInput
          placeholder='Enter Address'
          style={styles.input}
          value={input8Value}
          onChangeText={(text) => setInput8Value(text)}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Remarks:</Text>
        <TextInput
          placeholder='Enter Remarks'
          style={styles.bigInput}
          value={input9Value}
          onChangeText={(text) => setInput9Value(text)}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Description:</Text>
        <TextInput
          placeholder='Enter Description'
          style={styles.bigInput}
          value={input9Value}
          onChangeText={(text) => setInput9Value(text)}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Expected Completion Date:</Text>
        <View style={styles.dateInputContainer}>
          <Text style={styles.dateInputText}>{input9Value}</Text>
          <MaterialIcons
            name="calendar-month"
            size={24}
            color="gray"
            style={styles.calendarIcon}
            onPress={showDatePickerModal}
          />
        </View>
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Priority:</Text>
        <Dropdown
          placeholder='Select Source'
          placeholderStyle = {styles.placeholderStyle}
          style={styles.input}
          iconColor='red'
          options={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ]}
          value={dropdown3Value}
          onSelect={(value) => setDropdown3Value(value)}
        />
      </View>
      <View>
        <Button title="Submit" onPress={handleFormSubmit} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    width: 120,
    marginRight: 10,
    fontSize: 14,
    color: "#111111",
    fontStyle: "italic",
    // fontFamily:"Dancing Script Medium"
    
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 11,
    height: 32,
    fontStyle:"italic"
  },
  bigInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    height: 60,
    fontStyle:"italic"
  },
  placeholderStyle:{
    fontSize:13,
    color:"grey",
    fontStyle: "italic"
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  dateInputText: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    height: 40,
  },
  calendarIcon: {
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default Form;
