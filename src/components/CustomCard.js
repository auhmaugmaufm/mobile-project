import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CustomCard = ({ props }) => {
    const { start, end, time, status, type } = props

    return (
        <View style={styles.Container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{start}</Text>
                <Text>{time}</Text>
            </View>
            <View>
                <Text>{end}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{type}</Text>
                <Text>{status}</Text>
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
    },
})

export default CustomCard
