export type AppState =
  | { status: "loading" }
  | { status: "onboarding" }
  | { status: "unautenticated" }
  | { status: "autenticated" };
