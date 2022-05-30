import React, {useState, useRef} from "react";
import {View, Image, StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Card from "../Card";
import axios from 'axios';
import dismissKeyboard from "react-native/Libraries/Utilities/dismissKeyboard";

export default function Header(){
    const [local, setLocal] = useState();
    const [dados, setDados] = useState();
    const refInput = useRef();

    buscarClima = async () => {
        try {
            dismissKeyboard();
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=39b00bdb769eafe514b0dbb1cb7c97f3&units=metric&lang=pt-br`);
            setDados(response.data);
            console.log(dados);
            return dados;
    
          } catch (error) {
            alert('Busca inválida, tente novamente!');
            setDados();
            dismissKeyboard();
          }
    } 
    function clearInfo(){
        setDados();
        dismissKeyboard();
    }

    return(
        <View style={styles.container}>
            <View style={styles.inputArea}>
                <TextInput ref={refInput} style={styles.inputSearch} placeholder="Pesquisa" onChangeText={(text)=> setLocal(text)}/>
                <TouchableOpacity style={styles.button} onPress={buscarClima}>
                    <Icon name="search" size={18} color='#000'/>
                </TouchableOpacity>
            </View>
            {dados &&
            <View>
                <Card data={dados}/>
                <TouchableOpacity style={{alignItems:'center', paddingTop: 20}} onPress={clearInfo}>
                <Icon name='arrow-left-circle' size={40} color={'#FFF'}/>
                </TouchableOpacity>
            </View>
            }
            {!dados &&
            <View>
            <Text style={styles.textoSol}>
                Olá, eu sou o solzinho! Me informe uma cidade, estado ou país que te 
                mostrarei algumas informações sobre o tempo.
            </Text>

            <Image style={{width: 150, height: 150}} source={require('../../assets/sol.png')}/>
            </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: 80,
        alignItems: 'center'
    },
    inputArea:{
        display: "flex",
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
    },
    inputSearch:{
        display: 'flex',
        backgroundColor: '#FFF',
        width: '80%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        color: '#000',
        fontSize: 20

    },
    button:{
        backgroundColor: '#00BBC9',
        width: '15%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
        justifyContent:'center'
    },
    textoSol:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 22,
        width: 400,
        height: 150,
        textAlign: 'center',
        marginTop: 100,
        marginBottom: -50

    }
});