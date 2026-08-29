import { AppProvider } from "@/context/AppContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { useAppContext } from "@/hooks/useAppContext";
import { Stack } from "expo-router";
import { Text, View } from "react-native";

function RootNavigator() {
  const { appState } = useAppContext();

  const isOnboarding = appState.status === "onboarding";
  const isUnauthenticated = appState.status === "unauthenticated";
  const isAuthenticated = appState.status === "autenticated";

  if (appState.status === "loading") {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Protected guard={isOnboarding}>
          <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={isUnauthenticated}>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={isAuthenticated}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
}
