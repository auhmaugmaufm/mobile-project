import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const CustomButton = ({ title, onPress, backgroundColor, color }) => {
    return (
        <TouchableOpacity
            style={[styles.Button, { backgroundColor }]}
            onPress={onPress}>
            <Text style={[styles.Text, { color }]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    Text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 33,
        fontWeight: 'bold'
    },
    Button: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        height: '100%',
        marginTop: 25,
        width: '100%',
    }
})

export default CustomButton;