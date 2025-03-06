import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../components/CustomInput'
import CustomCard from '../components/CustomCard';

const EditScreen = () => {
    return (
        <View style ={styles.ViewStyle}>
            <View style={styles.container}>
                <Text style = {styles.TextStyle}>EDIT</Text>
                <CustomInput/>
                <CustomInput/>
                <CustomInput/>
            </View>
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
    container: {
        alignItems: "center",
        width: "80%",
        height: "85%",
        backgroundColor: "#EEEEEE",
        marginLeft: "10%",
        borderRadius: 18,
        padding: 20,
        // marginTop: 5,
    },
    TextStyle:{
        fontSize:20,
    }
})

export default EditScreen;