import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Board from "../components/Board";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const SelectScreen = ({ navigation, route }) => {
  const { item } = route.params
  const { start, end, time, date, type } = item

  return (
    <View style={styles.ViewStyle}>
      <View style={styles.TextStyle}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("BookingMain")}>
            <MaterialIcons name="arrow-back" size={40} color="white" />
          </TouchableOpacity>
          <Text style={styles.TextHead}>Booking</Text>
        </View>
      </View>
      <Board height={"80%"} backgroundColor='white'>
        <View style={{ padding: 10 }}>
          <View style={styles.TextBox}>
            <Text style={styles.TextTitle}>Start Point 📍</Text>
            <Text style={styles.TextSub}>{start}</Text>
          </View>
          <View style={styles.TextBox}>
            <Text style={styles.TextTitle}>Destination</Text>
            <Text style={styles.TextSub}>{end}</Text>
          </View>
          <View style={styles.TextBox}>
            <Text style={styles.TextTitle}>Date</Text>
            <Text style={styles.TextSub}>{date}</Text>
          </View>
          <View style={styles.TextBox}>
            <Text style={styles.TextTitle}>Time</Text>
            <Text style={styles.TextSub}>{time}</Text>
          </View>
          <View style={styles.TextBox}>
            <Text style={styles.TextTitle}>Car Type</Text>
            <Text style={styles.TextSub}>{type}</Text>
          </View>
          <View>
            
          </View>
          <View style={styles.TextBox}>
            <Text style={styles.TextTitle}>Price</Text>
            <Text style={styles.TextSub}>total ...</Text>
          </View>
        </View>
        <View style={styles.ButtonStyle}>
          <CustomButton backgroundColor='green' title='Done' color='white'onPress={() => navigation.navigate('Payment')} />
        </View>
      </Board>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: "#1E535F",
  },
  TextStyle: {
    marginBottom: 20,
  },
  TextHead: {
    fontWeight: 'bold',
    fontSize: 34,
    color: 'white',
    marginLeft: 15
  },
  ButtonStyle: {
    marginLeft: "10%",
    width: "80%",
    height: 70,
  },
  TextTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
    color: '#8c8c8c'
  },
  TextBox: {
    padding: 10
  },
  TextSub: {
    fontWeight: "bold",
    fontSize: 23,
    marginLeft: "5%"
  }
});

export default SelectScreen;