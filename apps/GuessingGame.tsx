import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import StartGameScreen from "../screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "../screens/GameScreen";
import colors from "../constants/colors";
import GameOver from "../screens/GameOver";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const GuessingGame = () => {
  // ATTENTION!! only works in class component?
  // const [fontsLoaded] = useFonts({
  //   "open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
  //   "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  const [userNumber, setuserNumber] = useState<number | null>(null);
  const [guessRounds, setGuessRounds] = useState<number>(0);
  const [gameIsOver, setGameIsOver] = useState(false);

  const pickedNumberHandler = (pickedNumber: number) => {
    setuserNumber(pickedNumber);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  const startNewGameHandler = () => {
    setuserNumber(null);
    setGuessRounds(0);
    setGameIsOver(false);
  };

  let screen = (
    <StartGameScreen
      onPickedNumber={(pickedNumber: number) =>
        pickedNumberHandler(pickedNumber)
      }
    />
  );

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={() => gameOverHandler()}
      />
    );
  }

  if (gameIsOver) {
    screen = (
      <GameOver
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[colors.guessingGame.primary700, colors.guessingGame.accent500]}
      style={styles.appContainer}
    >
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        style={styles.appContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});

export default GuessingGame;
