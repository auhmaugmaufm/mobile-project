import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CustomCard = ({ props }) => {
    const { start, end, time, status, type } = props

    return (
        <View style={styles.Container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.Text}>{start}</Text>
                <Text style={styles.Text}>{time}</Text>
            </View>
            <View>
                <Text style={styles.Text}>{end}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.Text}>{type}</Text>
                <Text style={styles.Text}>{status}</Text>
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
        fontWeight:'bold',
        fontSize: 20,
    }
})

export default CustomCard
