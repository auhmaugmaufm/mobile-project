import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { EventRegister } from 'react-native-event-listeners'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from "./src/screens/HomeScreen";
import SignUp from "./src/screens/SignUp";
import BookingHistoryScreen from "./src/screens/BookingHistoryScreen";
import BookingScreen from "./src/screens/BookingScreen";
import EditScreen from "./src/screens/EditScreen";
import Login from './src/screens/Login';
import SettingScreen from './src/screens/SettingScreen';
import SelectScreen from './src/screens/SelectScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import EditPasswordScreen from './src/screens/EditPasswordScreen';

import Theme from './src/context/Them';
import ThemeContext from './src/context/ThemeContext';
import themeContext from './src/context/ThemeContext';

// สร้าง Stack Navigator และ Tab Navigator
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const SettingStack = createNativeStackNavigator();
const BookingStack = createNativeStackNavigator();


const StackBookingScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <BookingStack.Navigator screenOptions={{ headerShown: false }}>
                <BookingStack.Screen name="BookingMain" component={BookingScreen} />
                <BookingStack.Screen name="Select" component={SelectScreen} />
            </BookingStack.Navigator>
        </View>
    )
}

const Tabs = () => {
    const Theme = useContext(themeContext);
    return (
        <Tab.Navigator

            initialRouteName="Booking"
            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: Theme.backgroundNavbar },
                tabBarActiveTintColor: Theme.colorActiveIcon,
                tabBarInactiveTintColor: Theme.colorInactiveIcon,
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Booking') {
                        iconName = 'bus-outline';
                    } else if (route.name === 'Setting') {
                        iconName = 'settings-outline';
                    } else {
                        iconName = 'ticket-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}
        >
            <Tab.Screen
                name="Booking"
                component={StackBookingScreen}
                options={{ title: 'Booking', headerShown: false }}
            />
            <Tab.Screen
                name="BookingHistory"
                component={BookingHistoryScreen}
                options={{ title: 'Booking History', headerShown: false }}
            />
            <Tab.Screen
                name="Setting"
                component={SettingScreen}
                options={{ title: 'Setting', headerShown: false }}
            />
        </Tab.Navigator>
    );
};

const App = () => {
    const [darkMode, setDarkMode] = useState(false);


    useEffect(() => {
        const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
            setDarkMode(data)
            console.log(data)
        })
        return () => {
            EventRegister.removeAllListeners(listener)
        }
    }, [])

    return (
        <ThemeContext.Provider value={darkMode == true ? Theme.dark : Theme.light}>
            <NavigationContainer Theme={darkMode == true ? DarkTheme : DefaultTheme}>
                <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, }}>
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="Navbar" component={Tabs} options={{ headerShown: false }} />
                    <Stack.Screen name="Payment" component={PaymentScreen} />
                    <Stack.Screen name="Edit" component={EditScreen} />
                    <Stack.Screen name="Edit-password" component={EditPasswordScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeContext.Provider>
    );
};


export default App