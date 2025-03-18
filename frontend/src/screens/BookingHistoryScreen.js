import React,{useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import  ThemeContext  from '../context/ThemeContext';


const BookingHistoryScreen = ({navigation}) => {
    const Theme = useContext(ThemeContext);

    return (
        <View style={[styles.ViewStyle,{backgroundColor:Theme.backgroundColor}]}>
            <Text style={[styles.TextHeader,{color:Theme.color}]}>Booking History</Text>
            <FlatList
                    // data={filteredGoods}
                    // keyExtractor={(item) => item.id.toString()}
                    // renderItem={({ item }) => {
                    //     return (
                    //         <TouchableOpacity onPress={() => openModal("edit", item)}>
                    //             <ItemCard name={item.title} cost={parseFloat(item.cost)} img={item.img} status={item.status} />
                    //         </TouchableOpacity>
                    //     )
                    // }}
                />
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
        marginLeft: 55
    }
})

export default BookingHistoryScreen;