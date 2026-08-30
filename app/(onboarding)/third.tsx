import { useTheme } from "@/hooks/useThemeContext";
import { ThemeColors } from "@/types/theme";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SecondOnboarding() {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const router = useRouter();
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.content}>
        <Text style={styles.mainText}>Your habbits are ready!</Text>
        <Text style={styles.descrText}>
          Start completing them and build your streak.
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => router.push("/four")}
        >
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      flex: 1,
      //justifyContent: "center",
      //alignItems: "center",
      width: "96%",
      marginHorizontal: "2%",
      marginTop: 10,
    },
    mainText: {
      fontSize: 25,
      color: colors.textPrimary,
      fontWeight: "bold",
    },
    descrText: {
      fontSize: 16,
      //marginHorizontal: 15,
      marginTop: 10,
      color: colors.textSecondary,
    },
    btnContainer: {
      marginBottom: 5,
      width: "96%",
      marginHorizontal: "2%",
    },
    btnStyle: {
      marginVertical: 5,
      backgroundColor: colors.accent,
      height: 40,

      justifyContent: "center",
      borderRadius: 11,
    },
    btnText: {
      fontSize: 16,
      color: colors.textPrimary,
      alignSelf: "center",
    },
  });
