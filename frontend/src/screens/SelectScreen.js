import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Board from "../components/Board";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import DropdownComponent from "../components/Dropdown";
import { seatBooking } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ALERT_TYPE, Dialog, AlertNotificationRoot } from 'react-native-alert-notification';
import ThemeContext from '../context/ThemeContext';



const SelectScreen = ({ navigation, route }) => {

  const Theme = useContext(ThemeContext)

  const { item } = route.params
  const { start, end, time, date, type, Cost, id } = item

  const [summary, setSummary] = useState(0)
  const [numberOfSeat, setNumberOfSeat] = useState(0)

  const calSummary = () => {
    setSummary(numberOfSeat * Cost)
  }

  const handleDone = () => {
    if (summary === 0) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Failed',
        textBody: 'LETS SELECT THAT SEAT IF YOU WANNA SIT :)',
        button: 'OK'
      });
    }
    else {
      navigation.navigate('Payment', { id, numberOfSeat })
    }

  }

  useEffect(() => {
    calSummary()
  }, [numberOfSeat])

  const num = [
    '1', '2', '3', '4'
  ]

  return (
    <View style={[styles.ViewStyle, { backgroundColor: Theme.backgroundColor }]}>
      <View style={styles.TextStyle}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={40} color={Theme.color} />
          </TouchableOpacity>
          <Text style={[styles.TextHead, { color: Theme.color }]}>Booking</Text>
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
            <Text style={styles.TextSub}>{time} น.</Text>
          </View>
          <View style={styles.TextBox}>
            <Text style={styles.TextTitle}>Car Type</Text>
            <Text style={styles.TextSub}>{type}</Text>
          </View>
          <View>
            <DropdownComponent name='Select Seat' rawData={num} onSelect={setNumberOfSeat} />
          </View>
          <View style={styles.TextBox}>
            <Text style={styles.TextTitle}>Summary</Text>
            <Text style={styles.TextSub}>{summary} ฿</Text>
          </View>
        </View>
        <View style={styles.ButtonStyle}>
          <CustomButton backgroundColor='green' title='Submit' color='white' onPress={handleDone} />
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