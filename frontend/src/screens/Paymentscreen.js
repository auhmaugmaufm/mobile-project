import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import CustomButton from "../components/CustomButton";

const PaymentScreen = ({navigation}) => {
  

  return (
    <View style={styles.ViewStyle}>
      <Text style={styles.TextHead}> Scan QR-code📍</Text>
      <View style={styles.container}>
        <Image style={styles.Image} source={{ uri: 'https://media.discordapp.net/attachments/1295624731650949123/1344690748934586489/image0.jpg?ex=67d4f219&is=67d3a099&hm=731673485fc9a71c772c72c7e750a2b1b8a782b50d6ee0275d47c8460f6c68de&=&format=webp&width=700&height=703' }} />
        <Text style={{fontSize: 20, color: 'black', marginTop: 20}}>เมธาวี </Text>
      </View>
      <View style = {styles.buttonSize}>
        <CustomButton title='Done' backgroundColor='#25A6C3' color='white' onPress={()=>navigation.navigate("BookingHistory")}/>
         
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
  TextHead: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
  },
  container: {
    alignItems: "center",
    width: "80%",
    height: "50%",
    backgroundColor: "#EEEEEE",
    // marginLeft: "10%",
    borderRadius: 18,
    padding: 20,
    marginTop: 60,
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
    marginTop: 25,
  },
});

export default PaymentScreen;
