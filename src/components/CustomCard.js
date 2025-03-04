import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CustomCard = ({ props }) => {
    const { start, end, time, status, type } = props

    return (
        <View style={styles.Container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{start}</Text>
                <Text>{time}</Text>
                <Text>{end}</Text>
                <Text>{type}</Text>
                <Text>{status}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        //alignItems: 'center',
        width: '90%',
        height: '60%',
        marginTop: 15,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "white",
        marginLeft: '5%',
        borderRadius: 10,
    },
})

export default CustomCard
