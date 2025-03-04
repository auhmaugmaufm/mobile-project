import React from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import CustomInput from '../components/CustomInput'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CustomCard from '../components/CustomCard';


const BookingScreen = () => {

    const board = [
        {
            start: 'kps',
            end: 'cha',
            time: '12:12',
            type: 'mini-bus',
            status: 'thorrrrrr'
        },
        {
            start: 'kps',
            end: 'cha',
            time: '12:12',
            type: 'mini-bus',
            status: 'thorrrrrr'
        },
        {
            start: 'kps',
            end: 'cha',
            time: '12:12',
            type: 'mini-bus',
            status: 'thorrrrrr'
        },
        {
            start: 'kps',
            end: 'cha',
            time: '12:12',
            type: 'mini-bus',
            status: 'thorrrrrr'
        },
        {
            start: 'kps',
            end: 'cha',
            time: '12:12',
            type: 'mini-bus',
            status: 'thorrrrrr'
        },
        {
            start: 'kps',
            end: 'cha',
            time: '12:12',
            type: 'mini-bus',
            status: 'thorrrrrr'
        },
        {
            start: 'kps',
            end: 'cha',
            time: '12:12',
            type: 'mini-bus',
            status: 'thorrrrrr'
        },
        {
            start: 'kps',
            end: 'cha',
            time: '12:12',
            type: 'mini-bus',
            status: 'thorrrrrr'
        },
        {
            start: 'kps',
            end: 'cha',
            time: '12:12',
            type: 'mini-bus',
            status: 'thorrrrrr'
        },
        {
            start: 'kps',
            end: 'cha',
            time: '12:12',
            type: 'mini-bus',
            status: 'thorrrrrr'
        },
    ]

    return (
            <View style={styles.ViewStyle}>
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
                <View style={styles.BoardContainer}>
                    <FlatList
                        data={board}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity>
                                    <CustomCard props={item} />
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

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
        alignItems: "center",
        width: "80%",
        height: "28%",
        backgroundColor: "white",
        marginLeft: "10%",
        marginRight: "10%",
        borderRadius: 18,
        padding: 20,
        marginBottom: 20
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
