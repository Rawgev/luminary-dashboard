import { Suspense } from "react";
import { getCourses } from "@/backend/supabase/queries";
import { getStats } from "@/frontend/data/activity";
import { BentoGrid } from "@/frontend/components/dashboard/BentoGrid";
import { DashboardHeader } from "@/frontend/components/dashboard/DashboardHeader";
import { HeroCard } from "@/frontend/components/cards/HeroCard";
import { CourseCard } from "@/frontend/components/cards/CourseCard";
import { ActivityCard } from "@/frontend/components/cards/ActivityCard";
import { StatsCard } from "@/frontend/components/cards/StatsCard";
import { QuickActionsCard } from "@/frontend/components/cards/QuickActionsCard";
import { ErrorCard } from "@/frontend/components/ui/ErrorCard";
import { SkeletonCard } from "@/frontend/components/ui/SkeletonCard";
import { MotionProvider } from "@/frontend/components/providers/motion-provider";
import { Trophy, TrendingUp } from "lucide-react";

// ── Course grid section fetched server-side ──────────────────────────
async function CourseSection() {
  let courses;
  try {
    courses = await getCourses();
  } catch (err) {
    return (
      <ErrorCard message="Could not load courses. Check your Supabase environment variables." />
    );
  }

  if (!courses.length) {
    return (
      <div className="col-span-full py-12 text-center text-sm text-text-muted">
        No courses found. Add some rows to your{" "}
        <code className="font-mono text-accent-cyan">courses</code> table.
      </div>
    );
  }

  return (
    <>
      {courses.map((course, i) => (
        <CourseCard key={course.id} course={course} index={i} />
      ))}
    </>
  );
}

// ── Page (async Server Component) ────────────────────────────────────
export default async function DashboardPage() {
  const stats = getStats();

  return (
    <section className="p-6 md:p-8 max-w-7xl mx-auto">
      <MotionProvider>
        <DashboardHeader />
      </MotionProvider>

      <MotionProvider>
        <BentoGrid>
        {/* Hero — 2 cols */}
        <HeroCard stats={stats} />

        {/* Stats — 1 col each */}
        <StatsCard
          title="Courses Completed"
          value={stats.coursesCompleted}
          subtitle="All time"
          iconName="book"
          trend={12}
          color="purple"
        />
        <StatsCard
          title="Hours Learned"
          value={`${stats.hoursLearned}h`}
          subtitle="This month"
          iconName="zap"
          trend={8}
          color="cyan"
        />

        {/* Section label */}
        <div className="col-span-full mt-2 mb-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <TrendingUp size={13} className="text-accent-cyan" />
              <h2 className="text-sm font-semibold text-text-primary">Your Courses</h2>
            </div>
            <div className="flex-1 h-px bg-bg-border" />
          </div>
        </div>

        {/* Courses — fetched from Supabase server-side */}
        <Suspense
          fallback={Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        >
          <CourseSection />
        </Suspense>

        {/* Section label */}
        <div className="col-span-full mt-2 mb-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Trophy size={13} className="text-accent-purple" />
              <h2 className="text-sm font-semibold text-text-primary">Activity & Actions</h2>
            </div>
            <div className="flex-1 h-px bg-bg-border" />
          </div>
        </div>

        {/* Activity graph — 2 cols */}
        <ActivityCard />

        {/* Quick actions — 1 col */}
        <QuickActionsCard />

        {/* Extra stats card */}
        <StatsCard
          title="Certificates Earned"
          value={stats.certificatesEarned}
          subtitle="Download any time"
          iconName="award"
          trend={50}
          color="amber"
        />
        </BentoGrid>
      </MotionProvider>
    </section>
  );
}
