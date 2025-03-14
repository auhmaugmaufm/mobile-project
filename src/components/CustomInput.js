import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const CustomInput = ({width, text, value, onChangeText, keyboardType ,secureTextEntry}) => {
    return (
        <View>
            <TextInput style={[styles.input, { width }]} placeholderTextColor="white" placeholder={text} value={value} onChangeText={onChangeText} keyboardType={keyboardType} secureTextEntry={secureTextEntry}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        // borderRadius: 10,
        padding: 10,
        fontSize: 18,
        marginTop: 15,
        alignItems: 'center',
        backgroundColor: '#1E535F',
        maxHeight: 50,
        color: 'white',
    }
});

export default CustomInput;