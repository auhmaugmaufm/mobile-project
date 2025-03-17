import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton';
import Board from "../components/Board";
import { editPhoneNumber } from "../services/api";

const EditScreen = ({ navigation }) => {

    const [phoneNumber, setPhoneNubmer] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')


    const handleEdit = async () => {
        try {
            const id = await AsyncStorage.getItem('userId')
            await editPhoneNumber(id, phoneNumber, password);
            Alert.alert('Edit result: ', 'SUCCESS',)
            navigation.navigate("Home")
        } catch (error) {
            Alert.alert('Edit result: ', error.message);
        }
    }

    const validateField = (value) => {
        let error = ''
        const phoneRegex = /^(06|08|09)\d{8}$/;
        if (!phoneRegex.test(value)) {
            error = 'Invalid Phone Number format.';
        }
        return error
    }

    const checkSubmit = () => {
        const PhoneNumberError = validateField(phoneNumber)
        if (PhoneNumberError) {
            setErrors(PhoneNumberError)
        } else {
            handleEdit();
        }
    }


    return (
        <View style={styles.ViewStyle}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate("SettingMain")}>
                    <MaterialIcons name="arrow-back" size={40} color="white" />
                </TouchableOpacity>
                <Text style={styles.TextHeader}>Setting</Text>
            </View>
            <Board height="50%">
                <Text style={styles.TextStyle}>Edit</Text>
                <View style={styles.container}>
                    <CustomInput
                        width={280}
                        text="Edit Phone Number"
                        keyboardType='numeric'
                        onChangeText={setPhoneNubmer}
                    />
                    {errors ? <Text style={styles.errorText}>{errors}</Text> : null}
                    <CustomInput
                        width={280}
                        text="Password"
                        secureTextEntry={true}
                        onChangeText={setPassword}
                    />
                    <View style={styles.buttonSize}>
                        <CustomButton
                            title="Done"
                            color="white"
                            onPress={checkSubmit}
                            backgroundColor='#25A6C3'
                        />
                    </View>
                </View>
            </Board>
        </View>
    )
}

const styles = StyleSheet.create({
    ViewStyle: {
        paddingTop: 60,
        flex: 1,
        backgroundColor: "#1E535F",
        // alignItems: 'center'
    },
    TextStyle: {
        fontSize: 20,
        marginTop: "5%",
        marginLeft: "7%"
    },
    container: {
        alignItems: "center",
        width: "80%",
        height: "35%",
        marginLeft: "10%",
        borderRadius: 18,
        padding: 20,
        marginTop: "3%"
    },
    buttonSize: {
        marginTop: "auto",
        width: 190,
        height: 63,
    },
    TextHeader: {
        fontWeight: 'bold',
        fontSize: 34,
        color: 'white',
        marginLeft: 15
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 2,
        // position: 'absolute'
        alignSelf: 'flex-start',
        marginLeft: 5,
    },
})

export default EditScreen;