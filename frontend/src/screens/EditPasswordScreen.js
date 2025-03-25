import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Board from '../components/Board'
import { TouchableOpacity } from 'react-native'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import ThemeContext from '../context/ThemeContext'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AlertNotificationRoot, Dialog, ALERT_TYPE } from "react-native-alert-notification";
import { editPassword } from '../services/api'


const EditPasswordScreen = ({ navigation }) => {
    const Theme = useContext(ThemeContext)
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [errors, setErrors] = useState({ password: '', newPassword: '', confirmnewPassword: '' })

    const handdleChange = (field, value) => {
        switch (field) {
          case 'password':
            setPassword(value)
            setErrors((preErrorss) => ({ ...preErrorss, password: '' }))
            break;
          case 'newPassword':
            setNewPassword(value)
            setErrors((preErrorss) => ({ ...preErrorss, newPassword: '' }))
            break;
          case 'confirmnewPassword':
            setConfirmNewPassword(value)
            setErrors((preErrorss) => ({ ...preErrorss, confirmnewPassword: '' }))
            break;
        }
      }

    const handleEdit = async () => {
        try {
            const id = await AsyncStorage.getItem('userId')
            await editPassword(id, password, newPassword);
            console.log('test2');

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

    const validateField = (field, value) => {
        let error = ''
        if (!value) {
            error = 'This field is required.'
        }
        else if (field === 'newPassword' && value.length < 8) {
            error = 'Password must be at least 8 digits'
        } else if (field === 'confirmnewPassword' && value !== newPassword) {
            error = 'Password not match.'
        }
        setErrors((preErrors) => ({ ...preErrors, [field]: error }))
        return error
    }

    const checkSubmit = () => {
        const passwordError = validateField('password', password)
        const newPasswordError = validateField('newPassword', newPassword)
        const confirm_passwordError = validateField('confirmnewPassword', confirmNewPassword)

        if (!passwordError && !newPasswordError && !confirm_passwordError) {
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
            <Board height="380" backgroundColor={Theme.backgroundcontainer}>
                <Text style={styles.TextStyle}>Edit Password</Text>
                <View style={styles.container}>
                    <CustomInput
                        width={280}
                        text="Password"
                        onChangeText={(value) => handdleChange('password', value)}
                        />
                    {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
                    <CustomInput
                        width={280}
                        text="New Password"
                        ecureTextEntry={true}
                        onChangeText={(value) => handdleChange('newPassword', value)}
                        />
                    {errors.newPassword ? <Text style={styles.errorText}>{errors.newPassword}</Text> : null}
                    <CustomInput
                        width={280}
                        text="Confirm New Password"
                        secureTextEntry={true}
                        onChangeText={(value) => handdleChange('confirmnewPassword', value)}
                        />
                    {errors.confirmnewPassword ? <Text style={styles.errorText}>{errors.confirmnewPassword}</Text> : null}
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
        marginLeft: 5,
    },
})

export default EditPasswordScreen
