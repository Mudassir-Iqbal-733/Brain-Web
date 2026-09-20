"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

function Progress({ className, value, ...props }) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-1 w-full overflow-hidden bg-transparent",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="h-full w-full flex-1 bg-gradient-to-r from-cyan-300 via-cyan-400 to-[#0d9488] shadow-[0_0_6px_rgba(34,211,238,0.95),0_0_14px_rgba(13,148,136,0.85),0_0_24px_rgba(34,211,238,0.5)] transition-transform duration-150 ease-out"
        style={{
          transform: `translateX(-${100 - (value || 0)}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };