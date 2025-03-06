import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton';
import Board from "../components/Board";

const EditScreen = () => {
    return (

        <View style={styles.ViewStyle}>
            <Board height="50%">
                <Text style={styles.TextStyle}>EDIT</Text>
                <View style={styles.container}>
                    <CustomInput
                        width={280}
                        text="Edit Phone Number"
                        keyboardType='numeric'
                        />
                    <CustomInput
                        width={280}
                        text="Password"
                    />
                    <CustomInput
                        ew width={280}
                        text="Confirm Password"
                    />
                    <View style={styles.buttonSize}>
                        <CustomButton
                            title="Done"
                            color="white"
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
        paddingTop: 150,
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
        marginTop:"auto",
        width: 190,
        height: 63,
    },
})

export default EditScreen;