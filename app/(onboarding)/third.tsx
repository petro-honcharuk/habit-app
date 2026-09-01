import OnboardingCC from "@/components/onboarding/OnboardingContent";

import { useRouter } from "expo-router";
import React from "react";

export default function ThirdOnboarding() {
  const router = useRouter();
  return (
    <OnboardingCC
      title="Your habbits are ready!"
      description="Start completting them and build your streak."
      btnTitle="Next"
      onPress={() => router.push("/(onboarding)/four")}
    />
  );
}
