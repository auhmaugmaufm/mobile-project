import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const SignUp = ({navigation}) => {
  return (
    <View style={styles.ViewStyle}>
      <View style={styles.TextContainer}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingRight:'10%'}}>
        <Text style={styles.TextHead}>Create account</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
            <MaterialIcons name="home" size={40} color="white"/>
        </TouchableOpacity>
        </View>
        <Text style={styles.TextSub}>Sign up to get started!</Text>
      </View>

      <View style={styles.container}>
          <CustomInput width= {280} text="Username" />
          <CustomInput width={280} text="Password" />
          <CustomInput width={280} text="Confirm Password" />
          <CustomInput width={280} text="Phone Number"/>
          <View style={styles.buttonSize}>
            <CustomButton title='Sign Up' backgroundColor='#FEC941' color='white' />
          </View>
      </View>
      <View style={{flexDirection:'row',marginTop:10}}>
        <Text style={styles.already}>Already member ? </Text>
        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
          <Text style={styles.already}>Login</Text>
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
    height: "50%",
    backgroundColor: "#EEEEEE",
    marginLeft: "10%",
    borderRadius: 18,
    padding :20,
    // marginTop: 5,
  },
  buttonSize:{
    width:200,
    height: 65,
  },
  already:{
    color:'white',
    marginLeft: '10%'
  },

  
  
});

export default SignUp;
