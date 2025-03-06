import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Payment = () => {
  return (
    <View style={styles.ViewStyle}>
      <Text style={styles.TextHead}>Scan QR-code📍</Text>
      <View style={styles.container}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    ViewStyle: {
        paddingTop: 92,
        flex: 1,
        backgroundColor: "#1E535F",
        // paddingLeft: "10%",
        alignItems: 'center'
      },
      TextHead : {
        fontWeight: "bold",
        fontSize: 40,
        color: "white",
    },
    container:{
        alignItems: "center",
        width: "80%",
        height: "50%",
        backgroundColor: "#EEEEEE",
        // marginLeft: "10%",
        borderRadius: 18,
        padding :20,
    }
});

export default Payment;
