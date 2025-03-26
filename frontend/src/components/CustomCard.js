import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Board from './Board'

const CustomCard = ({ props }) => {
    const { start, end, time, status, type, date } = props
    return (
        <View style={[styles.Container, { backgroundColor: status === 'On Booking' ? 'white' : '#DCDCDC' }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.Text}>{start}📍</Text>
                <Text style={styles.TextSub}>{time} น.</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.Text}>{end}</Text>
                <Text style={styles.TextSub}>{date}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.Text}>{type}</Text>
                <View style={[styles.StatusContainer, { backgroundColor: status === 'On Booking' ? 'green' : 'red' }]}>
                    <Text style={styles.StatusStyle}>{status}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
       // backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        margin: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
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
        color: 'white'
    },
    StatusContainer: {
        padding: 5,
        borderRadius: 15,
        width: 100,
        height: 30,
        alignItems: 'center'
    },
    TextSub: {
        fontSize: 18,
        fontWeight: '500'
    }
})

export default CustomCard
