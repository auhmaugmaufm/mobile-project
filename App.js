import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import HomeScreen from "./src/screens/HomeScreen";
import SignUp from "./src/screens/SignUp";
import BookingHistoryScreen from "./src/screens/BookingHistoryScreen";
import BookingScreen from "./src/screens/BookingScreen";
import EditScreen from "./src/screens/EditScreen";
import Login from './src/screens/Login';
import PaymentScreen from './src/screens/Paymentscreen';
import SelectScreen from './src/screens/SelectScreen';



// สร้าง Stack Navigator และ Tab Navigator
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// สร้าง Stack สำหรับหน้าหลัก (Home) และ SignUp
const Tabs = () => {
    return (
        <Tab.Navigator
            // Renamed to MainHome
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name="Booking"
                component={BookingScreen}
                options={{ title: 'Booking', headerShown: false }}
            />
            <Tab.Screen
                name="BookingHistory"
                component={BookingHistoryScreen}
                options={{ title: 'Booking History', headerShown: false }}
            />
            <Tab.Screen
                name="Setting"
                component={EditScreen}
                options={{ title: 'Setting', headerShown: false }}
            />
            {/* Add other tabs here */}
        </Tab.Navigator>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Navbar" component={Tabs} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Payment" component={PaymentScreen} options={{ headerShown: false }} />
                <Stack.Screen name="BookingHistory" component={BookingHistoryScreen} options={{ headerShown: false }} />
                {/* <Stack.Screen name="Select" component={SelectScreen} options={{ headerShown: false }} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default App