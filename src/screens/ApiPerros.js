import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { Button } from 'react-native-paper';

export default function ApiPerros() {
    const [perro, setPerro] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getPerro();
    }, [])

    const getPerro = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            const nuevoPerro = response.data;

            setPerro(nuevoPerro);
            setLoading(false);
        } catch (error) {
            console.log("Hubo un error listando los perros. Guau guau.", error);
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text>
                Imagen del perro:
            </Text>
            <Image style={styles.image} source={{ uri : perro.message}}/>
            <Button onPress={() => getPerro()}>Nuevo perro</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        gap: 25
    },
    image: {
      width: 250,
      height: 250,
    },
});
