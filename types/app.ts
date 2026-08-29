export type AppState =
  | { status: "loading" }
  | { status: "onboarding" }
  | { status: "unauthenticated" }
  | { status: "autenticated" };
