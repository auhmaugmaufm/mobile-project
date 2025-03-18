import React,{useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Board from '../components/Board'
import CustomButton from '../components/CustomButton'
import CustomToggle from '../components/CustomToggle'
import ThemeContext from '../context/ThemeContext'


const SettingScreen = ({ navigation }) => {
    const Theme = useContext(ThemeContext)

    return (
        <View style={[styles.ViewStyle,{backgroundColor:Theme.backgroundColor}]}>
            <Text style={[styles.TextHeader,{color:Theme.color}]}>Setting</Text>
            <Board height='50%' backgroundColor={Theme.backgroundcontainer}>
                <View style={{ flex: 1 , alignItems: 'center'}}>
                    <View style={styles.buttonSize}>
                        <CustomToggle title='Dark Mode' backgroundColor='#ccc' color='white' onPress={() => navigation.navigate("#")} />
                    </View>
                    <View style={styles.buttonSize}>
                        <CustomButton title='Edit Phone Number' backgroundColor='#FEC941' color='white' onPress={() => navigation.navigate("Edit")} />
                    </View>
                    <View style={styles.buttonSize}>
                        <CustomButton title='Logout' backgroundColor='red' color='white' onPress={() => navigation.navigate("Home")} />
                    </View>
                </View>
            </Board>
        </View>
    )
}

const styles = StyleSheet.create({
    ViewStyle: {
        paddingTop: 60,
        flex: 1,
        backgroundColor: "#1E535F",
    },
    buttonSize: {
        width: '90%',
        height: '70',
        marginBottom: 20,
    },
    TextHeader: {
        fontWeight: 'bold',
        fontSize: 34,
        color: 'white',
        marginBottom: 20,
        marginLeft: 55
    }
})

export default SettingScreen
