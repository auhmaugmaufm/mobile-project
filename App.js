import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from "./src/screens/HomeScreen";
import SignUp from "./src/screens/SignUp";
import BookingHistoryScreen from "./src/screens/BookingHistoryScreen";
import BookingScreen from "./src/screens/BookingScreen";
import EditScreen from "./src/screens/EditScreen";

// สร้าง Stack Navigator และ Tab Navigator
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// สร้าง Stack สำหรับหน้าหลัก (Home) และ SignUp
const HomeTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="MainHome" // Renamed to MainHome
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name="MainHome" // Unique name
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="BookingHistory"
                component={BookingHistoryScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Booking"
                component={BookingScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Edit"
                component={EditScreen}
                options={{ headerShown: false }}
            />
            {/* Add other tabs here */}
        </Tab.Navigator>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default App