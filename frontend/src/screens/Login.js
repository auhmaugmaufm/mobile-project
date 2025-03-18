import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CustomInput from "../components/CustomInput";
import CustomButtonLong from "../components/CustomButton";
import { logIn } from "../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await logIn(phoneNumber, password)
      const { token, userId } = response.data
      await AsyncStorage.setItem('userId', JSON.stringify(userId));
  
      if (token) {
        Alert.alert('LogIn result: ', 'SUCCESS', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Navbar', { screen: 'Booking' })
            }
          }
        ])
      }

    } catch (error) {
      Alert.alert('LogIn result: ', error.message);
    }
  }

  return (
    <View style={styles.ViewStyle}>
      <View style={styles.TextContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: '10%' }}>
          <Text style={styles.TextHead}>Log in</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <MaterialIcons name="home" size={40} color="white" />
          </TouchableOpacity>

        </View>

        <Text style={styles.TextSub}>Enter your credential to continue</Text>
      </View>

      <View style={styles.container}>
        <CustomInput width={280} text="Phone Number" onChangeText={setPhoneNumber} value={phoneNumber} />
        <CustomInput width={280} text="Password" secureTextEntry={true} onChangeText={setPassword} value={password} />
        <View style={styles.buttonSize}>
          <CustomButtonLong title='Log in' backgroundColor='#FEC941' color='white' onPress={handleLogin} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Text style={styles.TextFooter}>Don't have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={[styles.TextFooter, { fontWeight: 'bold', fontStyle: 'italic' }]}>Sign Up Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    paddingTop: 92,
    flex: 1,
    backgroundColor: "#1E535F",
    // alignItems: 'center'
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
    backgroundColor: "#EEEEEE",
    marginLeft: "10%",
    borderRadius: 18,
    padding: 20,
    // marginTop: 5,
  },
  buttonSize: {
    width: 190,
    height: 63,
  },
  TextFooter: {
    color: 'white',
    marginLeft: '10%'
  },



});

export default Login;
