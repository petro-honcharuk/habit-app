import { useAppContext } from "@/hooks/useAppContext";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Login() {
  const { setAppState } = useAppContext();
  function goToOnboarding() {
    setAppState({
      status: "onboarding",
    });
  }
  function goToAutentification() {
    setAppState({ status: "autenticated" });
  }
  return (
    <View style={styles.main}>
      <Text>Hello login</Text>
      <Button title="Go to onboarding" onPress={goToOnboarding} />
      <Button title="Go to tabs" onPress={goToAutentification} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
