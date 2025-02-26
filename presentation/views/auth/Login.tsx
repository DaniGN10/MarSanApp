import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AppFonts } from "../../theme/AppTheme";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamsList} from "../../../App";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

    const login = () => {
        navigation.navigate("Inicio");
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("../../../assets/logoMarSan.png")}
                />
                <Text style={styles.title}>¡Bienvenido a MarSan!</Text>
            </View>

            <TextInput style={styles.input} placeholder="Usuario" />

            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Contraseña"
                    secureTextEntry={!passwordVisible}
                />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                    <Ionicons name={passwordVisible ? "eye-off" : "eye"} size={24} color="#666" />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.button} onPress={login}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.info}>
                Si tienes algún <Text style={styles.bold}>problema</Text> al iniciar sesión contacta
                con el <Text style={styles.bold}>proveedor del usuario</Text> y <Text style={styles.bold}>las claves</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3F2FD',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: 20,
    },
    title: {
        color: 'black',
        textAlign: 'center',
        marginTop: "10%",
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: AppFonts.medium
    },
    imageContainer: {
        alignSelf: 'center',
        marginTop: 50,
    },
    image: {
        width: 200,
        height: 100,
    },
    logo: {
        fontSize: 50,
        color: '#1e40af',
        marginBottom: 20,
    },
    welcome: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        marginTop: "10%",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        padding: 10,
        borderRadius: 5,
        marginBottom: 30,
    },
    passwordInput: {
        flex: 1,
    },
    button: {
        backgroundColor: '#1565C0',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    redirectButton: {
        marginTop: 10,
    },
    redirectButtonText: {
        color: '#1565C0',
        fontSize: 14,
        textAlign: 'center',
    },
    info: {
        marginTop: 20,
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
    bold: {
        fontWeight: 'bold',
        color: '#000',
    },
});

export default Login;
