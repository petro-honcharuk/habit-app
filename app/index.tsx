import { habitsArray } from "@/data/habitData";
import { useAppContext } from "@/hooks/useAppContext";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { appState, setAppState } = useAppContext();

  return (
    <View style={styles.main}>
      <FlatList
        data={habitsArray}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
