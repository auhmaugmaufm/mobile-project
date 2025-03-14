import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity , Alert} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const SignUp = ({ navigation }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmpassword] = useState('')
  const [phoneNumber, setPhonenubmer] = useState('')
  const [errors, setErrors] = useState({ username: '', password: '', confirmPassword: '', phoneNumber: '' })


  const handdleChange = (field, value) => {
    switch (field) {
      case 'username':
        setUsername(value)
        setErrors((preErrorss) => ({ ...preErrorss, username: '' }))
        break;
      case 'password':
        setPassword(value)
        setErrors((preErrorss) => ({ ...preErrorss, password: '' }))
        break;
      case 'confirmPassword':
        setConfirmpassword(value)
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
        error = 'Invalid PhoneNubmer format'
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
    const usernameError = validateField('username', username)
    const PhoneNumberError = validateField('phoneNumber', phoneNumber)
    const passwordError = validateField('password', password)
    const confirm_passwordError = validateField('confirmPassword', confirmPassword)

    if (!usernameError && !PhoneNumberError && !passwordError && !confirm_passwordError) {
      Alert.alert('Registration result: ', 'SUCCESS', [
        {
          text: 'OK',
          onPress: () => {
            setUsername('')
            setPassword('')
            setConfirmpassword('')
            setErrors({ username: '', password: '', confirmPassword: '', phoneNumber: '' })
            navigation.navigate("Login")
          }
        }
      ])
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
          text="Username"
          onChangeText={(value) => handdleChange('username', value)}
          onBlur={() => validateField('username', username)}
          style={styles.inputContainer}
        />
        {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}
        <CustomInput
          width={280}
          text="Password"
          onChangeText={(value) => handdleChange('password', value)}
          onBlur={() => validateField('password', password)}
          secure={true}
        />
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
        <CustomInput
          width={280}
          text="Confirm Password"
          onChangeText={(value) => handdleChange('confirmPassword', value)}
          onBlur={() => validateField('confirmPassword', confirmPassword)}
          secure={true}
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
    marginTop:2,
    // position: 'absolute'
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
  



});

export default SignUp;
