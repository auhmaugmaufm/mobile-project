import React,{useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Board from "../components/Board";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import ThemeContext from '../context/ThemeContext'

const SelectScreen = () => {
  const Theme = useContext(ThemeContext)
  return (
    <View style={[styles.ViewStyle,{backgroundColor:Theme.backgroundColor}]}>
      <View style={styles.TextStyle}>
        <Text style={[styles.TextHead,{color:Theme.color}]}>Booking</Text>
        <Text style={[styles.TextSub,{color:Theme.color}]}>Let' s booking!</Text>
      </View>

      <Board
        style={{ color: "white" }}
        height={"82%"}
        children={
          <View style={styles.ViewChildren}>
            <Text style={styles.TextTitle}> Start📍 </Text>
            <CustomInput width={"90%"} />
            <Text style={styles.TextTitle}> Dest👣 </Text>
            <CustomInput width={"90%"} />
            <Text style={styles.TextTitle}> Time</Text>
            <CustomInput width={"90%"} />
            <Text style={styles.TextTitle}> Tel </Text>
            <View>
              <CustomInput width={"90%"} />
              <TouchableOpacity
                style={{ position: "absolute", right: 32, top: 19 }}
              >
                <MaterialIcons name="file-copy" size={35} color="white" />
              </TouchableOpacity>
            </View>

            <Text style={styles.TextTitle}> ที่นั่ง </Text>

            <Board style={{ color: "pink" }} height={"20%"} />

            <Text style={styles.TextTitle}> Price บาท</Text>
            <View style={styles.ButtonStyle}>
              <CustomButton
                title="Book"
                backgroundColor={"#008000"}
                color={"white"}
              />
            </View>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    paddingTop: 92,
    flex: 1,
    backgroundColor: "#1E535F",
    // paddingLeft: "10%",
  },
  TextStyle: {
    marginBottom: 20,
    paddingLeft: "10%",
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
  ViewChildren: {
    paddingLeft: "5%",
  },
  ButtonStyle: {
    width: 100,
    height: 70,
    marginLeft: "30%",
  },
  TextTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
  },
});

export default SelectScreen;
