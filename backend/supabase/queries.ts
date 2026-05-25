import { createClient } from "@/backend/supabase/server";
import type { Course } from "@/shared/types";

export async function getCourses(): Promise<Course[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch courses: ${error.message}`);
  }

  // Attach a deterministic color accent per course
  const colorMap: string[] = ["cyan", "purple", "green", "amber", "blue", "pink"];
  return (data ?? []).map((course, i) => ({
    ...course,
    color: colorMap[i % colorMap.length],
  }));
}
