import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStartingPoint from "./AppStartingPoint";
import AddGoalsApp from "./apps/AddGoals";
import GuessingGame from "./apps/GuessingGame";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export type RootStackParamList = {
  Home: undefined;
  AddYourGoals: undefined;
  GuessingGame: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={AppStartingPoint}></Stack.Screen>
        <Stack.Screen
          name="AddYourGoals"
          component={AddGoalsApp}
        ></Stack.Screen>
        <Stack.Screen
          name="GuessingGame"
          component={GuessingGame}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
