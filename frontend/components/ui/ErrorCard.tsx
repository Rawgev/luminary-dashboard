import { AlertTriangle, RefreshCw } from "lucide-react";

interface ErrorCardProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorCard({
  message = "Failed to load courses",
  onRetry,
}: ErrorCardProps) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center gap-4 py-16 px-6 rounded-2xl border border-rose-500/20 bg-rose-500/5">
      <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
        <AlertTriangle size={20} className="text-rose-400" />
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-text-primary mb-1">
          Something went wrong
        </p>
        <p className="text-xs text-text-muted max-w-xs">{message}</p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500/15 transition-colors"
        >
          <RefreshCw size={12} />
          Try again
        </button>
      )}
    </div>
  );
}
