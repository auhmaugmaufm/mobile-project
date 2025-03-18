import React, { useState } from 'react'
import { View, StyleSheet, Text, Switch, TouchableOpacity } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'
import ThemeContext from '../context/ThemeContext'


const CustomToggle = ({ title, backgroundColor, color,value  }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <View style={[styles.Button, { backgroundColor }]}>
            
            <View>
                <Text style={[styles.Text, { color }]}>{title}</Text>
            </View>
            <View>
                <Switch
                    value={isEnabled}
                    onValueChange={(value) => {
                        setIsEnabled(value)
                        EventRegister.emit('ChangeTheme', value)}}

                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Text: {
        //textAlign: 'center',
        color: 'white',
        fontSize: 33,
        fontWeight: 'bold'
    },
    Button: {
        padding: 10,
        //alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        height: '100%',
        marginTop: 25,
        width: '100%',
        flexDirection: 'row'
    }
})

export default CustomToggle
