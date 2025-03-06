import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const SelectScreen = ()=>{

    return(
        <View style={styles.ViewStyle}>
          <Text style={styles.Texthead}>Booking</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    ViewStyle: {
        paddingTop: 92,
        flex: 1,
        backgroundColor: "#1E535F",
        // alignItems: 'center'
      },
    Texthead : {
        fontWeight: "bold",
        fontSize: 40,
        color: "white",

    }
});



export default SelectScreen;