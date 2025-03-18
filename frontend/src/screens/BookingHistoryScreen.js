import React, { useState, useCallback, useContext } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import ThemeContext from '../context/ThemeContext';
import Board from '../components/Board';
import CustomCard from '../components/CustomCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadHistory } from '../services/api';
import CustomCardHistory from '../components/CustomCardHistory';


const BookingHistoryScreen = ({ navigation }) => {
    const Theme = useContext(ThemeContext);
    const [data, setData] = useState([])

    const loadingData = async () => {
        const id = await AsyncStorage.getItem('userId')
        const res = await loadHistory(id);
        setData(res)
    }

    console.log(data);

    useFocusEffect(
        useCallback(() => {
            loadingData()
        }, [])
    )

    return (
        <View style={styles.ViewStyle}>
            <Text style={styles.TextHeader}>Booking History</Text>
            <Board height={"80%"} backgroundColor="white">
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <CustomCardHistory props={item} />
                        )
                    }}
                />
            </Board>
        </View>
    )
}

const styles = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        backgroundColor: '#1E535F',
        paddingTop: 60,
    },
    TextHeader: {
        fontWeight: 'bold',
        fontSize: 34,
        color: 'white',
        marginLeft: 55,
        marginBottom: 20,
    }
})

export default BookingHistoryScreen;