import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../../App";
import { Ionicons } from '@expo/vector-icons';

const Inicio = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

    const handleLogout = () => {
        console.log("Sesión cerrada");

        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <View style={styles.logoutContent}>
                    <Ionicons name="arrow-back" size={18} color="#333" />
                    <Text style={styles.logoutText}>Cerrar Sesión</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.section}>
                <Text style={styles.title}>formulario</Text>
                <Text style={styles.subtitle}>MarSan</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Formulario")}>
                    <Text style={styles.buttonText}>Acceder</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.title}>estado tareas</Text>
                <Text style={styles.subtitle}>MarSan</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("EstadoTareas")}>
                    <Text style={styles.buttonText}>Acceder</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3F2FD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoutButton: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    logoutContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoutText: {
        fontSize: 16,
        color: '#333',
        marginLeft: 5,
    },
    section: {
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#444',
        textTransform: 'lowercase',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
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
});

export default Inicio;




