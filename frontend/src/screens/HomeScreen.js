import React,{useContext} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import CustomButton from '../components/CustomButton'
import  ThemeContext  from '../context/ThemeContext';
const HomeScreen = ({navigation}) => {
    const Theme = useContext(ThemeContext)
    return (
        <View style={[styles.ViewStyle,{backgroundColor:Theme.backgroundColor}]}>
            <View style={styles.TextContainer}>
                <Text style={[styles.TextTitle,{color:Theme.color}]}>RODTUU JABDEK 🚨</Text>
            </View>
            <View style={styles.Container}>
                <Image style={styles.Image} source={{ uri: 'https://images.vexels.com/media/users/3/128645/isolated/preview/d96ab2658b0f1366bfc2d7074b49730b-retro-glossy-van.png' }} />
            </View>

            <View style={styles.TextContainer}>
                <Text style={[styles.TextHead,{color:Theme.color}]}>Let's{'\n'}get started</Text>
                <Text style={[styles.TextSub,{color:Theme.color}]}>Everything start from here!</Text>
            </View>
            <View style={styles.ButtonContainer}>
                <View style={styles.buttonSize}>
                  <CustomButton title='Log In' backgroundColor='#FEC941' color='black' onPress={()=> navigation.navigate("Login")}/>  
                </View>
                <View style={styles.buttonSize}>
                   <CustomButton title='Sign Up' backgroundColor='#D4E6D3' color='black' onPress={()=> navigation.navigate("SignUp")} /> 
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ViewStyle: {
        paddingTop: 60,
        flex: 1,
        backgroundColor: '#1E535F'
    },
    Container: {
        width: '90%',
        height: '45%',
        marginLeft: 20,
    },
    TextHead: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white'
    },
    TextSub: {
        fontWeight: '300',
        fontSize: 19,
        color: 'white'
    },
    TextContainer: {
        gap: 10,
        paddingLeft: '10%',
        marginTop: 10,
        marginBottom: 20
    },
    Image: {
        height: 420,
        width: 560,
        alignItems: 'center',
    },
    ButtonContainer: {
        flex: 1,
        alignItems: 'center',
    },
    TextTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white'
    },
    buttonSize:{
        width: '80%',
        height: '30%',
        marginBottom: 10,
    }

})

export default HomeScreen
