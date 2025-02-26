import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../../App";

const DetalleTarea = ({route}: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

    const {cliente} = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>estado tareas</Text>
            <Text style={styles.subtitle}>marsan</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>{cliente}</Text>
                <Text style={styles.cardText}>Información del trabajo y del cliente ....</Text>

                <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.closeButtonText}>Cerrar</Text>
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
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textTransform: 'lowercase',
        color: '#333',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textTransform: 'lowercase',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        width: '80%',
        padding: 30,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        minHeight: 400,
        justifyContent: 'space-between',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 200,
        textAlign: 'center',
    },
    closeButton: {
        backgroundColor: '#1565C0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default DetalleTarea;



