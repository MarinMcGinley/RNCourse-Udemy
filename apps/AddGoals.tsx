import React, { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "../components/GoalInput";
import GoalItem from "../components/GoalItem";

export interface Goal {
  text: string;
  key: string;
  id: string;
}
export const AddGoalsApp = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const removeGoalHandler = () => {
    setModalIsVisible(false);
  };

  const receiveInput = (input: string) => {
    const test = Math.random().toString();
    setGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: input, key: test, id: test },
    ]);
  };

  const deleteGoalHandler = (id: string) => {
    console.log(id);
    setGoals((currentGoals) => {
      return currentGoals.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#a06fec"
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            isVisible={modalIsVisible}
            returnInput={(text: string) => {
              receiveInput(text);
            }}
            cancelModal={() => removeGoalHandler()}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={goals}
            keyExtractor={(item, index) => {
              return item.key;
            }}
            renderItem={(item) => {
              return (
                <GoalItem
                  key={item.item.key}
                  id={item.item.id}
                  text={item.item.text}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a",
  },

  goalsContainer: { flex: 4, marginHorizontal: 10 },
});

export default AddGoalsApp;
