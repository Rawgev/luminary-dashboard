export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
  color?: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  badge?: number;
}

export interface ActivityDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface StreakData {
  current: number;
  longest: number;
  thisWeek: number;
}

export interface StatsData {
  coursesCompleted: number;
  hoursLearned: number;
  certificatesEarned: number;
  currentStreak: number;
}

export interface BentoCardSize {
  cols: 1 | 2 | 3 | 4;
  rows: 1 | 2;
}

export type ColorAccent =
  | "cyan"
  | "purple"
  | "blue"
  | "green"
  | "amber"
  | "pink";

export interface AnimationConfig {
  initial: object;
  animate: object;
  transition: object;
}
