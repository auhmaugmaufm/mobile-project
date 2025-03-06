import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import SignUp from "./src/screens/SignUp";
import Login from "./src/screens/Login";
<<<<<<< Updated upstream
import BookingHistoryScreen from "./src/screens/BookingHistoryScreen";
import BookingScreen from "./src/screens/BookingScreen";
import EditScreen from "./src/screens/EditScreen";
=======
import SelectScreen from "./src/screens/SelectScreen";
>>>>>>> Stashed changes

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
<<<<<<< Updated upstream
            <Stack.Navigator initialRouteName="Booking">
=======
            <Stack.Navigator initialRouteName="Select">
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    name="Booking"
                    component={BookingScreen}
                    options={{ headerMode: 'none' }}
                />
                <Stack.Screen
                    name="BookingHistory"
                    component={BookingHistoryScreen}
                    options={{ headerMode: 'none' }}
                />
                <Stack.Screen
                    name="Edit"
                    component={EditScreen}
                    options={{ headerMode: 'none' }}
=======
                    name="Select"
                    component={SelectScreen}
                    // options={{ headerMode: 'none' }}
>>>>>>> Stashed changes
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;