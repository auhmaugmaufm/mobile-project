import React, { useState } from 'react'
import { View, StyleSheet, Text, Switch, TouchableOpacity } from 'react-native'

const CustomToggle = ({ title, backgroundColor, color }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <View style={[styles.Button, { backgroundColor }]}>
            
            <View>
                <Text style={[styles.Text, { color }]}>{title}</Text>
            </View>
            <View>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={() => setIsEnabled(!isEnabled)}
                    value={isEnabled}
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
