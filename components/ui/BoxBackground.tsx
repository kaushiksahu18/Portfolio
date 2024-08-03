import React from "react";
import { cn } from "@/lib/utils";

export function BoxBackground({ className }: { className: string }) {
  return (
    <div
      className={cn(
        className,
        "absolute left-0 top-0 flex h-full w-full items-center justify-center bg-white bg-grid-black/[0.1] dark:bg-red-950 dark:bg-grid-white/[0.1]",
      )}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0.1%,black)] dark:bg-black"></div>
    </div>
  );
}