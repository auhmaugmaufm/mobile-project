import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { AlertNotificationRoot, Dialog, ALERT_TYPE } from "react-native-alert-notification";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton';
import Board from "../components/Board";
import { editPhoneNumber } from "../services/api";
import ThemeContext from '../context/ThemeContext'


const EditScreen = ({ navigation }) => {
    const Theme = useContext(ThemeContext)

    const [phoneNumber, setPhoneNubmer] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')

    const handleEdit = async () => {
        try {
            const id = await AsyncStorage.getItem('userId')
            await editPhoneNumber(id, phoneNumber, password);
            Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: "Edit Success",
                textBody: "You have edit successfully!",
                button: "OK",
                onPressButton: () => {
                    navigation.navigate("Home")
                }
            })
        } catch (error) {
            Dialog.show({
                type: ALERT_TYPE.WARNING,
                title: "Edit Failed",
                textBody: error.message,
                button: "OK"
            })
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
        <View style={[styles.ViewStyle, { backgroundColor: Theme.backgroundColor }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Navbar", { screen: 'Setting' })}>
                    <MaterialIcons name="arrow-back" size={40} color={Theme.color} />
                </TouchableOpacity>
                <Text style={[styles.TextHeader, { color: Theme.color }]}>Setting</Text>
            </View>
            <Board height="320" backgroundColor={Theme.backgroundcontainer}>
                <Text style={styles.TextStyle}>Edit Phone Number</Text>
                <View style={styles.container}>
                    <CustomInput
                        width={260}
                        text="Edit Phone Number"
                        keyboardType='numeric'
                        onChangeText={(value) => {
                            setPhoneNubmer(value)
                            setErrors('')
                        }}
                    />
                    {errors ? <Text style={styles.errorText}>{errors}</Text> : <View style={{ marginTop: 18 }}></View>}
                    <CustomInput
                        width={260}
                        text="Password"
                        secureTextEntry={true}
                        onChangeText={setPassword}
                    />
                    <View style={styles.buttonSize}>
                        <CustomButton
                            title="Done"
                            color="black"
                            fontSize={25}
                            onPress={checkSubmit}
                            backgroundColor='#25A6C3'
                        />
                    </View>
                </View>
            </Board>
            <AlertNotificationRoot />
        </View>
    )
}

const styles = StyleSheet.create({
    ViewStyle: {
        paddingTop: 60,
        flex: 1,
        backgroundColor: "#1E535F",
        height: 900
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
    },
})

export default EditScreen;