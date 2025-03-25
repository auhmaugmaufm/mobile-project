import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import CustomButton from "../components/CustomButton";
import ThemeContext from "../context/ThemeContext";
import Board from "../components/Board";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { editStatus, loadSeat, seatBooking } from "../services/api";


const PaymentScreen = ({ navigation, route }) => {
  const Theme = useContext(ThemeContext);
  const { id, numberOfSeat } = route.params
  const [data, setData] = useState({})

  const handleBooking = async () => {
    try {
      let totalSeats = ((data.totalSeat ?? 0) + parseInt(numberOfSeat))
      if (data.seat == totalSeats) {
        await editStatus(id)
      }
      const userId = await AsyncStorage.getItem('userId')
      await seatBooking(id, userId, numberOfSeat)
      navigation.navigate("Navbar", { screen: 'BookingHistory' })
    } catch (error) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Login Failed',
        textBody: error.message,
        button: 'OK'
      });
    }
  }


  useEffect(() => {
    const loadSeatData = async () => {
      const res = await loadSeat(id)
      setData(res)
    }
    loadSeatData()
  }, [])
  //console.log(data);


  return (
    <View style={[styles.ViewStyle, { backgroundColor: Theme.backgroundColor }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 90 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={40} color={Theme.color} />
        </TouchableOpacity>
        <Text style={[styles.TextHeader, { color: Theme.color }]}>Select Seat</Text>
      </View>
      <View style={styles.container}>
        <Board height={350} backgroundColor='white'>
          <View style={styles.container}>
            <Image style={styles.Image} source={require('../images/payment.jpg')} />
          </View>
          <Text style={[styles.TextTitle, { color: Theme.color, marginBottom: 10 }]}> Scan QR-code</Text>
        </Board>
        <View style={styles.buttonSize}>
          <CustomButton title='Done' backgroundColor='#25A6C3' color='white' onPress={handleBooking} />

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: "#1E535F",
  },
  TextTitle: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 30,
    color: "white",
    textAlign: 'center'
  },
  container: {
    alignItems: "center",
    padding: 20
  },
  buttonSize: {
    width: 130,
    height: 65,
    marginTop: 90,
  },
  Image: {
    height: 300,
    width: 300,
    alignItems: 'center',
    marginTop: 5
  },
  TextHeader: {
    fontWeight: 'bold',
    fontSize: 34,
    color: 'white',
    marginLeft: 15
  },
});

export default PaymentScreen;
