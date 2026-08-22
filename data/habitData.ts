import { Habit } from "@/types/habit";

export const habitsArray: Habit[] = [
  {
    id: "1",
    name: "Read books",
    createdAt: new Date().toISOString(),
    completedDates: ["20-08-2026"],
    description: "some description for habit id 1",
  },
  {
    id: "2",
    name: "Learn Type Script",
    createdAt: new Date().toISOString(),
    completedDates: ["20-08-2026"],
    description: "some description for habit id 2",
  },
  {
    id: "3",
    name: "Exercise",
    createdAt: new Date().toISOString(),
    completedDates: ["20-08-2026"],
    description: "some description for habit id 3",
  },
];
