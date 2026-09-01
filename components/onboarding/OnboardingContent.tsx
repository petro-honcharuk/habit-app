import { useTheme } from "@/hooks/useThemeContext";
import { ThemeColors } from "@/types/theme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  title: string;
  description: string;
  image?: string;
  btnTitle: string;
  onPress: () => void;
};

export default function OnboardingCC({
  title,
  description,
  btnTitle,
  onPress,
}: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.content}>
        <Text style={styles.mainText}>{title}</Text>
        <Text style={styles.descrText}>{description}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
          <Text style={styles.btnText}>{btnTitle}</Text>
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
      alignItems: "center",
    },
    content: {
      flex: 1,
      width: "100%",
      paddingHorizontal: "2%",
      marginTop: 10,
    },
    mainText: {
      fontSize: 25,
      color: colors.textPrimary,
      fontWeight: "bold",
    },
    descrText: {
      fontSize: 16,
      marginTop: 10,
      color: colors.textSecondary,
    },
    btnContainer: {
      marginBottom: 5,
      width: "100%",
      paddingHorizontal: "2%",
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
