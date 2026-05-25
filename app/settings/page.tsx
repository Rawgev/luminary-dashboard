import { RoutePageShell } from "@/frontend/components/dashboard/RoutePageShell";
import { MotionProvider } from "@/frontend/components/providers/motion-provider";
import { routePages } from "@/frontend/data/route-pages";

export default function SettingsPage() {
  return (
    <MotionProvider>
      <RoutePageShell {...routePages.settings} />
    </MotionProvider>
  );
}
