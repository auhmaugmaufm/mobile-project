import React, { useContext } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import ThemeContext from "../context/ThemeContext";

const CustomInput = ({ width, text, value, onChangeText, keyboardType, secureTextEntry }) => {
    const Theme = useContext(ThemeContext)
    return (
        <View>
            <TextInput style={[styles.input, { width }]} placeholderTextColor="white" placeholder={text} value={value} onChangeText={onChangeText} keyboardType={keyboardType} secureTextEntry={secureTextEntry} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        // borderWidth: 1,
        borderColor: 'black',
        borderRadius: 7,
        padding: 10,
        fontSize: 18,
        alignItems: 'center',
        backgroundColor: '#BFBFBF',
        maxHeight: 50,
        color:"white"
    }
});

export default CustomInput;