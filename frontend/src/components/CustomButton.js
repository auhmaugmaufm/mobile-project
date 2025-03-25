import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Butto, Button } from "react-native";
import ThemeContext from '../context/ThemeContext';


const CustomButton = ({ title, onPress, color, fontSize }) => {
    const Theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
            style={[styles.Button, styles.buttonStyle, { borderColor: Theme.borderColor }]}
            onPress={onPress}>
            <Text style={[styles.Text, { color, fontSize }]}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    Text: {
        textAlign: 'center',
        color: 'white',
        // fontSize: 33,
        fontWeight: 'bold'
    },
    Button: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45,
        height: '100%',
        marginTop: 25,
        width: '100%',
        backgroundColor: 'white'
    },
    buttonStyle: {
        borderTopWidth: 1,
        borderWidth: 2,
        borderBottomWidth: 10,
        borderColor: 'orange',
        shadowColor: "black",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 6,
    }
})

export default CustomButton;