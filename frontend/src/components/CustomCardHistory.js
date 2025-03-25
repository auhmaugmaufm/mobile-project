import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Board from "./Board"

const CustomCardHistory = ({ props }) => {
    const { start, end, time, carType, numberOfSeats, date } = props
    return (
        <View style={styles.Container}>
            <Text style={styles.Text}>Start: {start}</Text>
            <Text style={styles.Text}>End: {end}</Text>
            <Text style={styles.Text}>Car: {carType}</Text>
            <Text style={styles.Text}>Date: {date}</Text>
            <Text style={styles.Text}>Time: {time} น.</Text>
            <Text style={styles.Text}>Seats: {numberOfSeats}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        margin: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 4,
        margin: 15,
        padding: 25,
    },
    Text: {
        fontWeight: 'bold',
        fontSize: 20,
    },

})


export default CustomCardHistory
