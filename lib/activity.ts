import type { ActivityDay, StreakData, StatsData } from "@/types";

function deterministicLevel(index: number): ActivityDay["level"] {
  const pattern = [0, 2, 1, 3, 0, 4, 2, 1, 0, 3, 2, 4, 1, 0, 2];
  return pattern[index % pattern.length] as ActivityDay["level"];
}

export function generateActivityData(weeks = 16): ActivityDay[] {
  const days: ActivityDay[] = [];
  const totalDays = weeks * 7;

  for (let i = 0; i < totalDays; i++) {
    const count = deterministicLevel(i);
    const week = String(Math.floor(i / 7) + 1).padStart(2, "0");
    const day = String((i % 7) + 1).padStart(2, "0");

    days.push({
      date: `week-${week}-day-${day}`,
      count: count * 2,
      level: count,
    });
  }

  return days;
}

export function getStreakData(): StreakData {
  return {
    current: 14,
    longest: 31,
    thisWeek: 6,
  };
}

export function getStats(): StatsData {
  return {
    coursesCompleted: 8,
    hoursLearned: 247,
    certificatesEarned: 3,
    currentStreak: 14,
  };
}
