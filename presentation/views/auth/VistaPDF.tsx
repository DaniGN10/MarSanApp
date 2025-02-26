import React from 'react';
import { StyleSheet, View } from 'react-native';
import Pdf from 'react-native-pdf';
import { useRoute } from '@react-navigation/native';

const VistaPDF = () => {
    const route = useRoute();
    const { pdfPath } = route.params as { pdfPath: string };

    return (
        <View style={styles.container}>

        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E3F2FD' },
    pdf: { flex: 1, width: '100%', height: '100%' },
});

export default VistaPDF;
