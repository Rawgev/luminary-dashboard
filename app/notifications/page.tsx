import { RoutePageShell } from "@/components/dashboard/RoutePageShell";
import { MotionProvider } from "@/components/providers/motion-provider";
import { routePages } from "@/lib/route-pages";

export default function NotificationsPage() {
  return (
    <MotionProvider>
      <RoutePageShell {...routePages.notifications} />
    </MotionProvider>
  );
}
