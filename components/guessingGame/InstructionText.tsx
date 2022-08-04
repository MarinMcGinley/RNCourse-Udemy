import React, { useState } from "react";
import {
  Pressable,
  TextInput,
  View,
  StyleSheet,
  Alert,
  Text,
} from "react-native";
import colors from "../../constants/colors";

const InstructionText = ({ children, style }: any) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    // fontFamily: "open-sans",
    color: colors.guessingGame.accent500,
    fontSize: 24,
  },
});

export default InstructionText;
