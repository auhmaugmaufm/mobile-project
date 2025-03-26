import React from 'react'
import { View, StyleSheet } from 'react-native'

const Board = ({ height, children, backgroundColor}) => {
    return (
        <View style={[styles.Container, { height },{backgroundColor}]}>
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
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 4,
    },
})

export default Board
