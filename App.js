import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import SignUp from "./src/screens/SignUp";
import Login from "./src/screens/Login";
import BookingHistoryScreen from "./src/screens/BookingHistoryScreen";
import BookingScreen from "./src/screens/BookingScreen";

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Booking">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerMode: 'none' }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ headerMode: 'none' }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerMode: 'none' }}
                />
                <Stack.Screen
                    name="Booking"
                    component={BookingScreen}
                    options={{ headerMode: 'none' }}
                />
                <Stack.Screen
                    name="BookingHistory"
                    component={BookingHistoryScreen}
                    options={{ headerMode: 'none' }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;