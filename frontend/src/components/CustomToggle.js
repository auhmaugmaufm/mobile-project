import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Switch } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CustomToggle = ({ title, backgroundColor, color }) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const setDarkMode= async (value) => {
        await AsyncStorage.setItem('darkMode', value.toString())
    }

    const handleToggle = () => {
        const newValue = !isEnabled;
        setIsEnabled(newValue)
        EventRegister.emit('ChangeTheme', newValue)
        setDarkMode(newValue)
    }

    useEffect(() => {
        const loadData = async () => {
            const storedDarkMode = await AsyncStorage.getItem('darkMode');
            if (storedDarkMode === 'true') {
                setIsEnabled(true);
            } else {
                setIsEnabled(false);
            }
        };
        loadData();
    }, []) 

    return (
        <View style={[styles.Button, { backgroundColor }]}>
            <View>
                <Text style={[styles.Text, { color }]}>{title}</Text>
            </View>
            <View>
                <Switch
                    value={isEnabled}
                    onValueChange={handleToggle}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Text: {
        color: 'white',
        fontSize: 33,
        fontWeight: 'bold'
    },
    Button: {
        padding: 10,
        justifyContent: 'center',
        borderRadius: 25,
        height: '100%',
        marginTop: 25,
        width: '100%',
        flexDirection: 'row'
    }
})

export default CustomToggle
