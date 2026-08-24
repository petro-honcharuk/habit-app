import { AppProvider } from "@/context/AppContext";
import { useAppContext } from "@/hooks/useAppContext";
import { Stack } from "expo-router";
import { Text, View } from "react-native";

function RootNavigator() {
  const { appState } = useAppContext();

  if (appState.status === "loading") {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (appState.status === "autenticated") {
    return (
      <View>
        <Text>Autenticated...</Text>
      </View>
    );
  }
  if (appState.status === "onboarding") {
    return (
      <View>
        <Text>Onboarding</Text>
      </View>
    );
  }
  return <Stack />;
}

export default function RootLayout() {
  return (
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
}
