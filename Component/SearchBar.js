import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



// Card component for displaying an image and text
const Card = ({ imageSource, text }) => (
  <View style={styles.card}>
    <Image source={{ uri: imageSource }} style={styles.cardImage} />
    <View style={styles.cardTextContainer}>
    <Text style={styles.cardText}>{text}</Text>
    </View>
  </View>
);

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.Main}>
          <TextInput placeholder='What are you looking for ?' placeholderTextColor="#FFD300" style={styles.Input}></TextInput>
        </View>
        <TouchableOpacity style={styles.buttonP}>
          <Icon name="search" size={30} color={"white"} style={{marginTop: 5, marginLeft:5}} />
        </TouchableOpacity>
      </View>
      <View style={styles.Discount}>
        <Text>Discount available for bulk products</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://www.91-cdn.com/hub/wp-content/uploads/2023/10/amazon-best-phones-deals.png' }} style={styles.image}  />
      </View>
      {/* Three cards */}
      <View style={styles.cardsContainer}>
        <Card imageSource="https://t4.ftcdn.net/jpg/04/17/80/13/360_F_417801326_v56pJQQ9LxfsPV2tGpRY9VHKnLyJQNcC.jpg" text="Pick up" />
        <Card imageSource="https://www.creativefabrica.com/wp-content/uploads/2018/10/Computer-service-repair-auto-service-logo-by-DEEMKA-STUDIO.jpg" text="Services" />
        <Card imageSource="https://www.shutterstock.com/image-vector/client-loyalty-customer-satisfaction-icon-600nw-2174562919.jpg" text="Customers" />
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Main: {
    backgroundColor: "black",
    width: 280,
    height: 50,
    borderWidth: 2,
    borderColor: "#FFF",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    marginLeft: 10,
    marginTop: 2
  },
  Input: {
    marginLeft: 50,
    marginTop: 7,
  },
  buttonP: {
    height: 46,
    width: 60,
    backgroundColor: 'black',
    borderWidth: 0,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderColor: "black",
    marginLeft: -8,
    marginTop: 2,
  },
  Discount: {
    marginTop: 10,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 600,
    height: 150,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Evenly space the cards
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 130,
    elevation: 3,
  },
  cardTextContainer: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
  },
  cardText: {
    color: '#fff',
    textAlign: 'center',
  },
  cardImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
});