import OnboardingCC from "@/components/onboarding/OnboardingContent";
import { useAppContext } from "@/hooks/useAppContext";
import React from "react";

export default function FourOnboarding() {
  const { setAppState } = useAppContext();
  function finishOnboarding() {
    setAppState({
      status: "unauthenticated",
    });
  }
  return (
    <OnboardingCC
      title="From chaos to Clarity!"
      description="Building better habbits and become the caim, focused version of yourself."
      btnTitle="Get Started"
      onPress={finishOnboarding}
    />
  );
}
