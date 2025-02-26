import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../../App";
// import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import RNFS from 'react-native-fs';

const Formulario = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [dni, setDni] = useState('');
    const [domicilio, setDomicilio] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [cp, setCp] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [piezas, setPiezas] = useState('');

    // const generarPDF = async () => {
    //     try {
    //         const htmlContent = `
    //             <h1 style="text-align: center;">Formulario MarSan</h1>
    //             <p><strong>Nombre:</strong> ${nombre}</p>
    //             <p><strong>Correo:</strong> ${correo}</p>
    //             <p><strong>Teléfono:</strong> ${telefono}</p>
    //             <p><strong>DNI/NIE:</strong> ${dni}</p>
    //             <p><strong>Domicilio:</strong> ${domicilio}</p>
    //             <p><strong>Localidad:</strong> ${localidad}</p>
    //             <p><strong>CP:</strong> ${cp}</p>
    //             <p><strong>Descripción del Trabajo:</strong> ${descripcion}</p>
    //             <p><strong>Piezas Usadas:</strong> ${piezas}</p>
    //         `;
    //
    //         // const pdfPath = `${RNFS.DocumentDirectoryPath}/formulario_marsan.pdf`;
    //
    //         const options = {
    //             html: htmlContent,
    //             fileName: 'formulario_marsan',
    //             directory: 'Documents',
    //         };
    //         const pdf = await RNHTMLtoPDF.convert(options);
    //
    //         Alert.alert('PDF Generado', 'El archivo se ha generado correctamente.');
    //
    //         navigation.navigate('VistaPDF', { pdfPath: "pdf.filePath" });
    //     } catch (error) {
    //         console.error(error);
    //         Alert.alert('Error', 'Hubo un problema al generar el PDF.');
    //     }
    // };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <View style={styles.backContent}>
                    <Ionicons name="arrow-back" size={24} color="#333" />
                    <Text style={styles.backText}>Atrás</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.formContainer}>
                <Text style={styles.title}>formulario</Text>
                <Text style={styles.subtitle}>MarSan</Text>

                <TextInput style={styles.input} placeholder="Nombre y Apellidos" onChangeText={setNombre} />
                <TextInput style={styles.input} placeholder="Correo Electrónico" onChangeText={setCorreo} />

                <View style={styles.row}>
                    <TextInput style={[styles.input, styles.halfInput]} placeholder="Número Telef" onChangeText={setTelefono} />
                    <TextInput style={[styles.input, styles.halfInput]} placeholder="DNI / NIE" onChangeText={setDni} />
                </View>

                <TextInput style={styles.input} placeholder="Datos del domicilio" onChangeText={setDomicilio} />

                <View style={styles.row}>
                    <TextInput style={[styles.input, styles.halfInput]} placeholder="Localidad" onChangeText={setLocalidad} />
                    <TextInput style={[styles.input, styles.halfInput]} placeholder="CP" onChangeText={setCp} />
                </View>

                <TextInput style={styles.largeInput} placeholder="Descripción breve del Trabajo" multiline onChangeText={setDescripcion} />
                <TextInput style={styles.largeInput} placeholder="Piezas Usadas" multiline onChangeText={setPiezas} />

                <TouchableOpacity style={styles.button} onPress={() => { alert("Se ha generado el PDF")}}>
                    <Text style={styles.buttonText}>Generar PDF</Text>
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
    backButton: {
        position: 'absolute',
        top: 35,
        left: 20,
    },
    backContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        fontSize: 17,
        color: '#333',
        marginLeft: 5,
    },
    formContainer: {
        width: '90%',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'lowercase',
        color: '#444',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 12,
        borderRadius: 5,
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    halfInput: {
        width: '48%',
    },
    largeInput: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 12,
        borderRadius: 5,
        marginBottom: 12,
        height: 80,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#1565C0',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 5,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default Formulario;



