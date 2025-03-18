import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import CustomInput from '../components/CustomInput'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CustomCard from '../components/CustomCard';
import Board from '../components/Board';
import { loadData } from '../services/api';


const BookingScreen = ({ navigation }) => {

    const [data, setData] = useState([])

    const loadingData = async () => {
        const res = await loadData();
        setData(res)
    }

    useFocusEffect(
        useCallback(() => {
            loadingData()
        }, [])
    )

    return (
        <View style={styles.ViewStyle}>
            <Text style={styles.TextHeader}>Let's Booking</Text>
            <Board height='28%' key='input'>
                <View style={styles.InputContainer}>
                    <View style={styles.DateInput}>
                        <CustomInput width={280} text='Date' key='date' />
                        <TouchableOpacity style={{ position: 'absolute', right: 8, top: 17 }}>
                            <MaterialIcons name="calendar-month" size={40} color="white" />
                        </TouchableOpacity>
                    </View>
                    <CustomInput width={280} text='Choose Start' key='start' />
                    <CustomInput width={280} text='Choose Destination' key='end' />
                </View>
            </Board>
            <View style={{ height: '5%' }}></View>
            <Board height="55%" key='flatlist'>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Select', {item})} >
                                <CustomCard props={item} />
                            </TouchableOpacity>
                        )
                    }}
                />
            </Board>
        </View>
    )
}

const styles = StyleSheet.create({
    ViewStyle: {
        paddingTop: 60,
        flex: 1,
        backgroundColor: '#1E535F',
    },
    InputContainer: {
        marginTop: 25,
        alignItems: "center",
    },
    DateInput: {
        flexDirection: 'row',
    },
    TextHeader: {
        fontWeight: 'bold',
        fontSize: 34,
        color: 'white',
        marginLeft: 55,
        marginBottom: 20,
    }
})
export default BookingScreen
