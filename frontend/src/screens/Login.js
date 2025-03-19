import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CustomInput from "../components/CustomInput";
import CustomButtonLong from "../components/CustomButton";
import { logIn } from "../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ALERT_TYPE, Dialog, AlertNotificationRoot } from 'react-native-alert-notification';
import ThemeContext from '../context/ThemeContext';
import Board from "../components/Board";

const Login = ({ navigation }) => {

  const Theme = useContext(ThemeContext)
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await logIn(phoneNumber, password);
      const { token, userId, userName } = response;
      await AsyncStorage.setItem('userId', JSON.stringify(userId));

      if (token) {
        // แสดง Dialog เมื่อล็อกอินสำเร็จ
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Login Success',
          textBody: `${userName}, You have logged in successfully!`,
          button: 'OK',
          onPressButton: () => {
            // เมื่อผู้ใช้กด OK จะนำทางไปยังหน้า Navbar
            navigation.navigate('Navbar', { screen: 'Booking', name: userName });
          },
        });
      }
    } catch (error) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Login Failed',
        textBody: error.message,
        button: 'OK'
      });
    }
  }

  return (
    <View style={[styles.ViewStyle, { backgroundColor: Theme.backgroundColor }]}>
      <View style={styles.TextContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: '10%' }}>
          <Text style={[styles.TextHead, { color: Theme.color }]}>Log in</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <MaterialIcons name="home" size={40} color={Theme.color} />
          </TouchableOpacity>
        </View>

        <Text style={[styles.TextSub, { color: Theme.color }]}>Enter your credential to continue</Text>
      </View>

      <Board height={280} backgroundColor={Theme.backgroundcontainer}>
        <View style={styles.container}>
          <CustomInput width={280} text="Phone Number" onChangeText={setPhoneNumber} value={phoneNumber} />
          <CustomInput width={280} text="Password" secureTextEntry={true} onChangeText={setPassword} value={password} />
          <View style={styles.buttonSize}>
            <CustomButtonLong title='Log in' backgroundColor='#FEC941' color='white' onPress={handleLogin} />
          </View>
        </View>
      </Board>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Text style={[styles.TextFooter, { color: Theme.color }]}>Don't have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={[styles.TextFooter, { fontWeight: 'bold', fontStyle: 'italic' }, { color: Theme.color }]}>Sign Up Now</Text>
        </TouchableOpacity>
      </View>

      <AlertNotificationRoot />
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    paddingTop: 92,
    flex: 1,
    // backgroundColor: "#1E535F",
  },
  TextHead: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
  },
  TextSub: {
    fontWeight: "300",
    fontSize: 19,
    color: "white",
  },
  TextContainer: {
    paddingLeft: "10%",
    marginBottom: 25,
  },
  container: {
    alignItems: "center",
    width: "80%",
    height: "35%",
    marginLeft: "10%",
    borderRadius: 18,
    padding: 20,
  },
  buttonSize: {
    width: 190,
    height: 63,
  },
  TextFooter: {
    color: 'white',
    marginLeft: '10%',
  },
});

export default Login;