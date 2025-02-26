import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../../App";

const EstadoTareas = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

    const clients = [
        { id: 1, name: 'Cliente 1' }, { id: 2, name: 'Cliente 2' },
        { id: 3, name: 'Cliente 3' }, { id: 4, name: 'Cliente 4' },
        { id: 5, name: 'Cliente 5' }, { id: 6, name: 'Cliente 6' },
        { id: 7, name: 'Cliente 7' }, { id: 8, name: 'Cliente 8' },
        { id: 9, name: 'Cliente 9' }, { id: 10, name: 'Cliente 10' },
        { id: 11, name: 'Cliente 11' }, { id: 12, name: 'Cliente 12' },
        { id: 13, name: 'Cliente 13' }, { id: 14, name: 'Cliente 14' },
        { id: 15, name: 'Cliente 15' }, { id: 16, name: 'Cliente 16' },
        { id: 17, name: 'Cliente 17' }, { id: 18, name: 'Cliente 18' },
        { id: 19, name: 'Cliente 19' }, { id: 20, name: 'Cliente 20' }
    ];

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#333" />
                <Text style={styles.backText}>Atrás</Text>
            </TouchableOpacity>

            <Text style={styles.title}>estado tareas</Text>
            <Text style={styles.subtitle}>MarSan</Text>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.clientsGrid}>
                    {clients.map((client) => (
                        <TouchableOpacity
                            key={client.id}
                            style={styles.clientButton}
                            onPress={() => navigation.navigate('DetalleTarea', { cliente: client.name })}
                        >
                            <Text style={styles.clientText}>{client.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3F2FD',
        alignItems: 'center',
        paddingTop: 50,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 35,
        left: 20,
    },
    backText: {
        fontSize: 17,
        color: '#333',
        marginLeft: 5,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textTransform: 'lowercase',
        color: '#333',
        marginTop: 60,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textTransform: 'lowercase',
        marginBottom: 20,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingVertical: 20,
    },
    clientsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '90%',
    },
    clientButton: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        margin: 5,
        width: '45%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    clientText: {
        fontSize: 16,
        color: '#333',
    },
});

export default EstadoTareas;




