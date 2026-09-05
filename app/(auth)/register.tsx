import { useTheme } from "@/hooks/useThemeContext";
import { RegisterForm, registerSchema } from "@/schemas/(auth)/registerShema";
import { ThemeColors } from "@/types/theme";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Register() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const { handleSubmit, control, formState } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (data: RegisterForm) => {
    console.log(data);
  };
  return (
    <KeyboardAvoidingView
      style={styles.main}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Імя:</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.inputStyles}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType="default"
            />
          )}
        />
        {formState.errors.name && (
          <Text style={styles.errorsText}>{formState.errors.name.message}</Text>
        )}

        <Text style={styles.title}>Пароль:</Text>
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.inputStyles}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType="default"
              secureTextEntry={true}
            />
          )}
        />
        {formState.errors.password && (
          <Text style={styles.errorsText}>
            {formState.errors.password.message}
          </Text>
        )}
        <Text style={styles.title}>Підтвердіть пароль:</Text>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.inputStyles}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              keyboardType="default"
              secureTextEntry={true}
            />
          )}
        />
        {formState.errors.confirmPassword && (
          <Text style={styles.errorsText}>
            {formState.errors.confirmPassword.message}
          </Text>
        )}
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.btnText}>Регістрація</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    main: {
      flex: 1,
    },
    content: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: "center",
      padding: "2%",
    },
    title: {
      marginLeft: 5,
      fontSize: 18,
      color: colors.textPrimary,
    },
    inputStyles: {
      width: "100%",
      height: 40,
      borderWidth: 1,
      borderRadius: 8,
      marginVertical: 10,
      borderColor: colors.border,
      backgroundColor: colors.surface,
    },
    errorsText: {
      fontSize: 12,
      color: colors.error,
    },
    btnStyle: {
      width: "100%",
      height: 40,
      borderWidth: 1,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 10,
      backgroundColor: colors.accent,
      borderColor: colors.border,
    },
    btnText: {
      fontSize: 18,
      color: colors.textPrimary,
    },
  });
