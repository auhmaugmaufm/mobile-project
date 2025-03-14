import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { signUp } from "../services/api";

const SignUp = ({ navigation }) => {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phoneNumber, setPhonenubmer] = useState('')
  const [errors, setErrors] = useState({ name: '', password: '', confirmPassword: '', phoneNumber: '' })


  const handdleChange = (field, value) => {
    switch (field) {
      case 'name':
        setName(value)
        setErrors((preErrorss) => ({ ...preErrorss, name: '' }))
        break;
      case 'password':
        setPassword(value)
        setErrors((preErrorss) => ({ ...preErrorss, password: '' }))
        break;
      case 'confirmPassword':
        setConfirmPassword(value)
        setErrors((preErrorss) => ({ ...preErrorss, confirmPassword: '' }))
        break;
      case 'phoneNumber':
        setPhonenubmer(value)
        setErrors((preErrorss) => ({ ...preErrorss, phoneNumber: '' }))
        break;
    }
  }

  const validateField = (field, value) => {
    let error = ''
    if (!value) {
      error = 'This field is required.'
    } else {
      if (field === 'phoneNumber' && value.length !== 10) {
        error = 'Invalid PhoneNumberaum format'
      } else if (field === 'password' && value.length < 8) {
        error = 'Invalid Password format'
      } else if (field === 'confirmPassword' && value !== password) {
        error = 'Password not match.'
      }
    }
    setErrors((preErrors) => ({ ...preErrors, [field]: error }))
    return error
  }

  const checkSubmit = () => {
    const NameError = validateField('name', name)
    const PhoneNumberError = validateField('phoneNumber', phoneNumber)
    const passwordError = validateField('password', password)
    const confirm_passwordError = validateField('confirmPassword', confirmPassword)

    if (!NameError && !PhoneNumberError && !passwordError && !confirm_passwordError) {
      handleSignUp();
    }

  }

  const handleSignUp = async () => {
    try {
      await signUp(name, password, phoneNumber);
      Alert.alert('Registration result: ', 'SUCCESS', [
        {
          text: 'OK',
          onPress: () => {
            setName('')
            setPassword('')
            setConfirmPassword('')
            setErrors({ username: '', password: '', confirmPassword: '', phoneNumber: '' })
            navigation.navigate("Login")
          }
        }
      ])
    } catch (error) {
      Alert.alert('Registration result: ', error.message)
    }
  }


  return (
    <View style={styles.ViewStyle}>
      <View style={styles.TextContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: '10%' }}>
          <Text style={styles.TextHead}>Create account</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <MaterialIcons name="home" size={40} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.TextSub}>Sign up to get started!</Text>
      </View>

      <View style={styles.container}>
        <CustomInput
          width={280}
          text="Name"
          onChangeText={(value) => handdleChange('name', value)}
          onBlur={() => validateField('name', name)}
          style={styles.inputContainer}
        />
        {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
        <CustomInput
          width={280}
          text="Password"
          onChangeText={(value) => handdleChange('password', value)}
          onBlur={() => validateField('password', password)}
          secureTextEntry={true}
        />
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
        <CustomInput
          width={280}
          text="Confirm Password"
          onChangeText={(value) => handdleChange('confirmPassword', value)}
          onBlur={() => validateField('confirmPassword', confirmPassword)}
          secureTextEntry={true}
        />
        {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}
        <CustomInput
          width={280}
          text="Phone Number"
          onChangeText={(value) => handdleChange('phoneNumber', value)}
          onBlur={() => validateField('phoneNumber', phoneNumber)}
        />
        {errors.phoneNumber ? <Text style={styles.errorText}>{errors.phoneNumber}</Text> : null}
        <View style={styles.buttonSize}>
          <CustomButton
            title='Sign Up'
            backgroundColor='#FEC941'
            color='white'
            onPress={checkSubmit} />
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Text style={styles.TextFooter}>Already member ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={[styles.TextFooter, { fontWeight: 'bold', fontStyle: 'italic' }]}>Login</Text>
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
    height: "55%",
    backgroundColor: "#EEEEEE",
    marginLeft: "10%",
    borderRadius: 18,
    padding: 20,
    // marginTop: 5,
  },
  buttonSize: {
    width: 200,
    height: 65,
  },
  TextFooter: {
    color: 'white',
    marginLeft: '10%',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 2,
    // position: 'absolute'
    alignSelf: 'flex-start',
    marginLeft: 5,
  },




});

export default SignUp;
