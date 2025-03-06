import React from 'react'
import { View } from 'react-native'
import Seat from './Seat'

const Van = () => {
    return (
        <View style={{ width: '60%' }}> 
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                <Seat />
                <Seat />
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'flex-end' }}>
                <Seat />
                <Seat />
                <Seat />
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                <Seat />
                <View style={{ flexDirection: "row", justifyContent: 'flex-end' }}>
                    <Seat />
                    <Seat />
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                <Seat />
                <View style={{ flexDirection: "row", justifyContent: 'flex-end' }}>
                    <Seat />
                    <Seat />
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                <Seat />
                <View style={{ flexDirection: "row", justifyContent: 'flex-end' }}>
                    <Seat />
                    <Seat />
                </View>
            </View>
        </View>
    )
}

export default Van
