import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Card from "../components/guessingGame/Card";
import InstructionText from "../components/guessingGame/InstructionText";
import NumberContainer from "../components/guessingGame/NumberContainer";
import PrimaryGameButton from "../components/guessingGame/PrimaryGameButton";
import Title from "../components/guessingGame/Title";

import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/guessingGame/GuessLogItem";

const generateRandomBetween: number | any = (
  min: number,
  max: number,
  exclude: number
) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

type Props = {
  userNumber: number;
  onGameOver: Function;
};

const GameScreen = (props: Props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [minGuess, setMin] = useState(1);
  const [maxGuess, setMax] = useState(100);
  const [guessRounds, setGuessRounds] = useState<number[]>([]);

  useEffect(() => {
    if (currentGuess === props.userNumber) {
      console.log("game over");
      props.onGameOver(guessRounds.length);
    }
  }, [currentGuess, props.userNumber, props.onGameOver]);

  useEffect(() => {
    const newRndNumber = generateRandomBetween(
      minGuess,
      maxGuess,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);

    console.log(minGuess, maxGuess);
  }, [minGuess, maxGuess]);

  useEffect(() => {
    setMin(1);
    setMax(100);
  }, []);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < props.userNumber) ||
      (direction === "higher" && currentGuess > props.userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong..."),
        [{ text: "Sorry!", style: "cancel" }];
      return;
    }

    console.log("currentGuess: " + currentGuess);
    if (direction === "lower") {
      setMax(currentGuess - 1);
    } else {
      setMin(currentGuess + 1);
    }
  };

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.container}>
      <Title title="Opponent's Guess"></Title>
      <NumberContainer givenNumber={currentGuess} />
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryGameButton
              buttonText={<Ionicons name="md-add" size={24} color="white" />}
              onPress={() => nextGuessHandler("higher")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryGameButton
              buttonText={<Ionicons name="md-remove" size={24} color="white" />}
              onPress={() => nextGuessHandler("lower")}
            />
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(item) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - item.index}
              guess={item.item}
            />
          )}
          keyExtractor={(item) => String(item)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 18,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
export default GameScreen;
