import React, { useState } from "react";
import {
  Pressable,
  TextInput,
  View,
  StyleSheet,
  Alert,
  Text,
} from "react-native";
import Card from "../components/guessingGame/Card";
import InstructionText from "../components/guessingGame/InstructionText";
import PrimaryGameButton from "../components/guessingGame/PrimaryGameButton";
import Title from "../components/guessingGame/Title";
import colors from "../constants/colors";

type Props = {
  onPickedNumber: Function;
};

const StartGameScreen = (props: Props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [
          {
            text: "Okey",
            style: "destructive",
            onPress: () => {
              setEnteredNumber("");
            },
          },
        ]
      );
      return;
    }

    props.onPickedNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title title="Guess my number" />
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={(number: string) => {
            setEnteredNumber(number);
          }}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryGameButton buttonText="Reset" onPress={() => {}} />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryGameButton
              buttonText="Confirm"
              onPress={() => {
                confirmInputHandler();
              }}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    textAlign: "center",
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: colors.guessingGame.accent500,
    borderBottomWidth: 2,
    color: colors.guessingGame.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
});

export default StartGameScreen;
