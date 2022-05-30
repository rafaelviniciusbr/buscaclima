import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';


export default function Card(props){
    return(
        <View style={styles.container}>
            <View style={styles.areaCard}>
                <Text style={styles.textoInfo}>Nome: {props.data.name}</Text>
                <Text style={styles.textoInfo}>Céu no momento: {props.data.weather[0].description}</Text>
                <Text style={styles.textoInfo}>Temperatura: {props.data.main.temp.toFixed(0)}°C</Text>
                <Text style={styles.textoInfo}>Umidade do ar: {props.data.main.humidity}%</Text>
                <Text style={styles.textoInfo}>Velocidade do vento: {props.data.wind.speed}Km/h</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#878787',
        width: 380,
        height: 400,
        marginTop: 50,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoInfo:{
        fontSize: 20,
        color: '#FFF'
    }
});