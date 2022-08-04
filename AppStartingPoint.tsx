import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const AppStartingPoint = ({ navigation }: Props) => {
  const addYourGoals = () => {
    navigation.navigate("AddYourGoals");
  };

  const guessANumber = () => {
    navigation.navigate("GuessingGame");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.buttonContainer}>
        <Button
          title="Add your goals"
          color={styles.buttonColor.color}
          onPress={addYourGoals}
        />
      </View>
      <Button
        title="Guess a number"
        color={styles.buttonColor.color}
        onPress={guessANumber}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    margin: 20,
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonContainer: {
    marginVertical: 20,
  },
  buttonColor: { color: "#f54260" },
});

export default AppStartingPoint;
