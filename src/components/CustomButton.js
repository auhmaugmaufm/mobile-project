import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const CustomButtonLong = ({ title, onPress, backgroundColor, color }) => {
    return (
        <TouchableOpacity
            style={[styles.ButtonLong, { backgroundColor }]}
            onPress={onPress}>
            <Text style={[styles.TextLong, { color }]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ButtonBox: {
        width: 85,
        height: 60,
        borderRadius: 50,
    },
    TextBox: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    TextLong: {
        textAlign: 'center',
        color: 'white',
        fontSize: 33,
        fontWeight: 'bold'
    },
    ButtonLong: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        height: '100%',
        marginTop: 25,
        width: '100%',
    }
})

export default CustomButtonLong;