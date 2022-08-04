import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Goal } from "../apps/AddGoals";

interface GoalItemProps extends Goal {
  onDeleteItem: (id: string) => void;
}

const GoalItem = (props: GoalItemProps) => {
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={() => props.onDeleteItem(props.id)}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalTextItem}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 3,
    backgroundColor: "#5e0acc",
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
  },
  goalTextItem: {
    color: "#FFF",
  },
});

export default GoalItem;
