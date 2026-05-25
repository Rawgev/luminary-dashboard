type Accent = "cyan" | "purple" | "blue" | "green" | "amber" | "pink";

export interface RoutePageConfig {
  eyebrow: string;
  title: string;
  description: string;
  iconName: string;
  accent: Accent;
  metrics: Array<{
    label: string;
    value: string;
    detail: string;
  }>;
  features: Array<{
    title: string;
    description: string;
    iconName: string;
    accent: Accent;
  }>;
}

export const routePages = {
  courses: {
    eyebrow: "Course Matrix",
    title: "Courses",
    description:
      "Track active modules, queued lessons, and skill paths from one focused learning command surface.",
    iconName: "book",
    accent: "cyan",
    metrics: [
      { label: "Active", value: "4", detail: "in progress" },
      { label: "Queued", value: "12", detail: "next lessons" },
      { label: "Focus", value: "72%", detail: "avg progress" },
    ],
    features: [
      {
        title: "Machine Learning Track",
        description: "Priority path with model evaluation, feature pipelines, and weekly lab checkpoints.",
        iconName: "brain",
        accent: "purple",
      },
      {
        title: "Database Systems",
        description: "Schema design, indexing, and Supabase-backed project milestones grouped by difficulty.",
        iconName: "database",
        accent: "green",
      },
      {
        title: "Frontend Architecture",
        description: "Component patterns, motion polish, and production App Router workflows.",
        iconName: "code",
        accent: "cyan",
      },
    ],
  },
  progress: {
    eyebrow: "Learning Telemetry",
    title: "Progress",
    description:
      "A compact view of momentum, completion velocity, and where your next study block has the highest leverage.",
    iconName: "chart",
    accent: "green",
    metrics: [
      { label: "Streak", value: "14d", detail: "current run" },
      { label: "Velocity", value: "+8%", detail: "this month" },
      { label: "Mastery", value: "81%", detail: "core topics" },
    ],
    features: [
      {
        title: "Weekly Momentum",
        description: "Your study rhythm is strongest on focused evening sessions and short review loops.",
        iconName: "zap",
        accent: "cyan",
      },
      {
        title: "Skill Coverage",
        description: "Algorithms and data modeling are ahead of pace; statistics needs one review sprint.",
        iconName: "layers",
        accent: "blue",
      },
      {
        title: "Next Best Action",
        description: "Complete the evaluation metrics module before opening another advanced course.",
        iconName: "rocket",
        accent: "green",
      },
    ],
  },
  achievements: {
    eyebrow: "Achievement Vault",
    title: "Achievements",
    description:
      "Celebrate earned credentials, streak milestones, and the signals that prove your learning is compounding.",
    iconName: "award",
    accent: "amber",
    metrics: [
      { label: "Badges", value: "18", detail: "unlocked" },
      { label: "Certs", value: "3", detail: "earned" },
      { label: "Rank", value: "Top 9%", detail: "cohort" },
    ],
    features: [
      {
        title: "Consistency Badge",
        description: "Awarded for maintaining a two-week study chain with no missed focus windows.",
        iconName: "award",
        accent: "amber",
      },
      {
        title: "Project Finisher",
        description: "Unlocked by shipping a complete dashboard workflow with data, motion, and polish.",
        iconName: "terminal",
        accent: "purple",
      },
      {
        title: "Systems Thinker",
        description: "Progress marker for connecting backend data models with frontend product experience.",
        iconName: "cpu",
        accent: "blue",
      },
    ],
  },
  notifications: {
    eyebrow: "Signal Center",
    title: "Notifications",
    description:
      "A calm inbox for lesson reminders, achievement updates, and platform events that deserve attention.",
    iconName: "bell",
    accent: "pink",
    metrics: [
      { label: "Unread", value: "3", detail: "new signals" },
      { label: "Due", value: "2", detail: "today" },
      { label: "Quiet", value: "22h", detail: "focus mode" },
    ],
    features: [
      {
        title: "Lesson Reminder",
        description: "Machine Learning Fundamentals has a short evaluation lab ready to continue.",
        iconName: "book",
        accent: "cyan",
      },
      {
        title: "Streak Protected",
        description: "One focused session today keeps your current learning chain alive.",
        iconName: "zap",
        accent: "amber",
      },
      {
        title: "Certificate Ready",
        description: "Your completed frontend module credential is available in the achievement vault.",
        iconName: "award",
        accent: "purple",
      },
    ],
  },
  settings: {
    eyebrow: "Control Plane",
    title: "Settings",
    description:
      "Tune your dashboard preferences, learning cadence, notification rhythm, and account environment.",
    iconName: "settings",
    accent: "blue",
    metrics: [
      { label: "Profile", value: "92%", detail: "complete" },
      { label: "Sync", value: "On", detail: "Supabase" },
      { label: "Mode", value: "Pro", detail: "workspace" },
    ],
    features: [
      {
        title: "Learning Preferences",
        description: "Adjust study intensity, weekly targets, and the order of recommended course modules.",
        iconName: "layers",
        accent: "green",
      },
      {
        title: "Notification Rhythm",
        description: "Keep reminders useful with quiet hours, digest mode, and priority-only alerts.",
        iconName: "bell",
        accent: "pink",
      },
      {
        title: "Security Surface",
        description: "Review account sessions, project access, and backend connection health.",
        iconName: "shield",
        accent: "blue",
      },
    ],
  },
} satisfies Record<string, RoutePageConfig>;
