import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

type Props = {
  title: string;
};

const Title = (props: Props) => {
  return <Text style={styles.title}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    // fontFamily: "open-sans-bold",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.guessingGame.accent500,
    padding: 12,
    borderWidth: 2,
    borderColor: "#ddb52f",
    maxWidth: "100%",
  },
});

export default Title;
