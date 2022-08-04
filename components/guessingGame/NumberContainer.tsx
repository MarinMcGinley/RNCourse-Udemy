import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

type Props = {
  givenNumber: number;
};

const NumberContainer = ({ givenNumber }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{givenNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.guessingGame.accent500,
    padding: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: colors.guessingGame.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default NumberContainer;
