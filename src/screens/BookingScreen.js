import React from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import CustomInput from '../components/CustomInput'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CustomCard from '../components/CustomCard';
import Board from '../components/Board';


const BookingScreen = ({ navigation }) => {

    const board = [
        {
            start: 'kps',
            end: 'cha',
            time: '12:12 AM',
            type: 'mini-bus',
            status: 'On booking'
        },
        {
            start: 'kps',
            end: 'cha',
            time: '12:12 AM',
            type: 'mini-bus',
            status: 'On booking'
        },
        {
            start: 'kps',
            end: 'cha',
            time: '12:12 AM',
            type: 'mini-bus',
            status: 'thorrrrrr'
        },
        {
            start: 'kps',
            end: 'cha',
            time: '12:12 AM',
            type: 'mini-bus',
            status: 'On booking'
        },
        {
            start: 'kps',
            end: 'cha',
            time: '12:12 AM',
            type: 'mini-bus',
            status: 'On booking'
        },

    ]

    return (
        <View style={styles.ViewStyle}>
            <Board height='28%'>
                <View style={styles.InputContainer}>
                    <View style={styles.DateInput}>
                        <CustomInput width={280} text='Date' />
                        <TouchableOpacity style={{ position: 'absolute', right: 8, top: 17 }}>
                            <MaterialIcons name="calendar-month" size={40} color="white" />
                        </TouchableOpacity>
                    </View>
                    <CustomInput width={280} text='Choose Start' />
                    <CustomInput width={280} text='Choose Destination' />
                </View>
            </Board>
            <View style={{ height: '5%' }}></View>
            <Board height="60%" key='flatlist'>
                <FlatList
                    data={board}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
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
    BoardContainer: {
        width: "80%",
        height: '60%',
        backgroundColor: "white",
        marginLeft: "10%",
        marginRight: "10%",
        borderRadius: 18,
    }
})

export default BookingScreen
