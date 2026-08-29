import { useAppContext } from "@/hooks/useAppContext";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FirstOnboarding() {
  const router = useRouter();
  const { appState, setAppState } = useAppContext();
  function finishOnboarding() {
    setAppState({
      status: "unauthenticated",
    });
  }
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.content}>
        <Text style={styles.mainText}>Welcome to Lavora!</Text>
        <Text style={styles.descrText}>
          Build your habbits? unlock your potential and level up with badget
          along the way.
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => router.push("/second")}
        >
          <Text style={styles.btnText}>Start the Tour</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle} onPress={finishOnboarding}>
          <Text style={styles.btnText}>Skip and Sing up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
  },
  descrText: {
    fontSize: 16,
    color: "#937d7d",
    marginHorizontal: 15,
    marginTop: 10,
  },
  btnContainer: {
    marginBottom: 5,
  },
  btnStyle: {
    marginHorizontal: "2%",
    marginVertical: 5,
    backgroundColor: "blue",
    height: 40,
    width: "96%",
    justifyContent: "center",
    borderRadius: 11,
  },
  btnText: {
    fontSize: 16,
    color: "white",
    alignSelf: "center",
  },
});
