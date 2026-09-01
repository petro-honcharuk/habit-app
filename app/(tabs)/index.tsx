import { habitsArray } from "@/data/habitData";
import { useAppContext } from "@/hooks/useAppContext";
import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const { appState, setAppState } = useAppContext();
  function goToLogin() {
    setAppState({
      status: "unauthenticated",
    });
  }

  return (
    <View style={styles.main}>
      <FlatList
        data={habitsArray}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
      <Button title="Go to login" onPress={goToLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 30,
  },
});
