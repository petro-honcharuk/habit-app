import OnboardingCC from "@/components/onboarding/OnboardingContent";
import { useRouter } from "expo-router";
import React from "react";

export default function SecondOnboarding() {
  const router = useRouter();
  return (
    <OnboardingCC
      title="Welcome to Lavora!"
      description="Start building better habbits by adding your first one."
      btnTitle="Next"
      onPress={() => router.push("/(onboarding)/third")}
    />
  );
}
