import React, { useEffect, useState, useCallback,useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import CustomInput from '../components/CustomInput'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CustomCard from '../components/CustomCard';
import Board from '../components/Board';
import { loadData } from '../services/api';
import DropdownComponent from '../components/Dropdown';
import CustomButton from '../components/CustomButton';
import themeContext from '../context/ThemeContext';


const BookingScreen = ({ navigation }) => {

    const Theme = useContext(themeContext)

    const [data, setData] = useState([])
    const [start, setStart] = useState([])
    const [date, setDate] = useState([])
    const [end, setEnd] = useState([])

    const [selectedDate, setSelectedDate] = useState()
    const [selectedStart, setSelectedStart] = useState()
    const [selectedEnd, setSelectedEnd] = useState()

    const filteredData = data.filter(item =>
        (!selectedDate || item.date === selectedDate) &&
        (!selectedStart || item.start === selectedStart) &&
        (!selectedEnd || item.end === selectedEnd)
    );

    const loadingData = async () => {
        const res = await loadData();
        setData(res)
    }

    const load = () => {
        // console.log('loading data');
        const uniqueStarts = [...new Set(data.map(item => item.start))];
        const uniqueEnds = [...new Set(data.map(item => item.end))];
        const uniqueDates = [...new Set(data.map(item => item.date))];
        setStart(uniqueStarts)
        setEnd(uniqueEnds)
        setDate(uniqueDates)
    }

    useFocusEffect(
        useCallback(() => {
            loadingData()
        }, [])
    )

    useEffect(() => {
        load()
    }, [data])

    return (
        <View style={[styles.ViewStyle,{ backgroundColor: Theme.backgroundColor}]}>
            <Text style={[styles.TextHeader,{color:Theme.color}]}>Let's Booking</Text>
            <Board height='30%' key='input' backgroundColor='white' >
                <View style={{ padding: 10 }}>
                    <DropdownComponent name='Choose Date' rawData={date} onSelect={setSelectedDate} key='date' />
                    <DropdownComponent name='Choose Start' rawData={start} onSelect={setSelectedStart} key='start' />
                    <DropdownComponent name='Choose Destination' rawData={end} onSelect={setSelectedEnd} key='end' />
                </View>
            </Board>
            <View style={{ height: '5%' }}></View>
            <Board height="55%" key='flatlist' backgroundColor='white'>
                <FlatList
                    data={filteredData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                {
                                    item.status == 'Closed' ?
                                        <CustomCard props={item} />
                                        :
                                        <TouchableOpacity onPress={() => navigation.navigate('Select', { item })} >
                                            <CustomCard props={item} />
                                        </TouchableOpacity>
                                }
                            </View>
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
        // backgroundColor: '#1E535F',
    },
    InputContainer: {
        width: "100%",
        height: "100%",
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
    },
    ButtonStyle: {
        marginLeft: "35%",
        width: "30%",
        height: 70,
    },
})
export default BookingScreen