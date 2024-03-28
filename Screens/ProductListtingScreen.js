// step: 1 Fetch the API, check data in console
//step: 2 use the data to update the state and use flatlist to render the data
// step 3 Handle the errors and error states 
//step 4 : add a loading indicator for a better user experience

// import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
// import React, { useEffect, useState } from 'react'

// const ProductListtingScreen = () => {
//     const [products,setProducts] = useState([])
//     useEffect(()=> {
//         getProducts();
//     },[])
    

//     const getProducts = ()=> {
//         const URL = "https://fakestoreapi.com/products"
//         fetch(URL)
//             .then(res => {
//                 return res.json(); //convert it into readable format
//         }).then(data => {
//             setProducts(data)
//             console.log(data);
//         })
//     }
//   return (
//     <View >
//       <Text>ProductListtingScreen</Text>
//       <FlatList showsVerticalScrollIndicator={false} data={products} renderItem={({item}) => (
//       <View style={styles.cardContainer} > 
//         <Image source={{ uri: item.image }} style={styles.image} />
//         <Text style={{fontSize:18,textAlign:"center"}} >{item.price}</Text>
//       </View>)} />
//     </View>
//   )
// }

// export default ProductListtingScreen;

// const styles = StyleSheet.create({
//     cardContainer: {
//         backgroundColor: "#fff",
//         borderRadius: 10,
//         padding: 20,
//         alignItems: "center",
//         justifyContent: "center",
//         shadowColor: "#000",
//         shadowOffset:{ width: 0, height: 2},
//         shadowOpacity: 0.2,
//         shadowRadius:4,
//         marginTop:20
//     },
//     image:{
//         height:200,
//         width:200,
//     },
//     errorStyle: {
//         color:"red",
//         fontSize:18,
//     },

// });