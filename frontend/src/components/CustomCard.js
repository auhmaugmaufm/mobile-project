import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Board from './Board'

const CustomCard = ({ props }) => {
    const { start, end, time, status, type } = props
    const backgroundColor = status === 'On Booking' ? 'green' : 'red';
    return (
        <View style={styles.Container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.Text}>{start}📍</Text>
                <Text style={styles.Text}>{time}</Text>
            </View>
            <View>
                <Text style={styles.Text}>{end}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.Text}>{type}</Text>
                <View style={[styles.StatusContainer, { backgroundColor }]}>
                    <Text style={styles.StatusStyle}>{status}</Text>
                </View>
            </View>
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
        padding: 25
    },
    Text: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    StatusStyle: {
        fontWeight: 'bold',
        fontSize: 15,
       // justifyContent: 'center',
        //alignItems: 'center'
    },
    StatusContainer: {
        padding: 5,
        borderRadius: 15,
        width: 100,
        height: 30,
        alignItems: 'center'
    }
})

export default CustomCard
