import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
} from "react-native";
import PrimaryGameButton from "../components/guessingGame/PrimaryGameButton";
import Title from "../components/guessingGame/Title";
import colors from "../constants/colors";

type Props = {
  roundsNumber: number;
  userNumber: number | null;
  onStartNewGame: Function;
};

const GameOver = (props: Props) => {
  return (
    <View style={styles.screenContainer}>
      <Title title="GAME OVER!"></Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.hightlight}>{props.roundsNumber}</Text> rounds to
        guess the number{" "}
        <Text style={styles.hightlight}>{props.userNumber}</Text>.
      </Text>
      <PrimaryGameButton
        buttonText="Start over"
        onPress={() => {
          props.onStartNewGame();
        }}
      ></PrimaryGameButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: colors.guessingGame.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    // fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  hightlight: {
    // fontFamily: "open-sans-bold",
    color: colors.guessingGame.primary500,
  },
});

export default GameOver;
