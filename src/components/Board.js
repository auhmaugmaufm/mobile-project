import React from 'react'
import { View, StyleSheet } from 'react-native'

const Board = ({ height, children }) => {
    return (
        <View style={[styles.Container, { height }]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "white",
        marginLeft: "10%",
        marginRight: "10%",
        borderRadius: 18,
    },
})

export default Board
