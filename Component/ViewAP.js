import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import axios from 'axios';

export default function ViewAP() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAPI();
    }, []);

    const getAPI = () => {
        axios({
            method: "GET",
            url: "http://139.59.66.191:3016/viewProducts"
        })
        .then(res => {
            // console.log(res.data); // Check the API response in console
            setProducts(res.data.data); // Set the state with the array of products
            console.log("data is ",products)
        })
        .catch(err => console.log(err));
    };

    const renderProduct = ({ item }) => {
        return (
            <View style={styles.card}>
                {item.image_url && <Image source={{ uri: item.image_url }} style={styles.image} />}
                {item.product_name && <Text style={styles.title}>{item.product_name}</Text>}
                {item.category && item.category.category_name && <Text style={styles.description}>{item.category.category_name}</Text>}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item._id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
    }
});
