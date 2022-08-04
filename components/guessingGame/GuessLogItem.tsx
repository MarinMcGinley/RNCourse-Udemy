import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

type Props = {
  roundNumber: number;
  guess: number;
};

const GuessLogItem = (props: Props) => (
  <View style={styles.listItem}>
    <Text>#{props.roundNumber}</Text>
    <Text>Opponent's Guess: {props.guess}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    borderColor: colors.guessingGame.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: colors.guessingGame.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default GuessLogItem;
