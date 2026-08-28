import * as React from "react";
import { cn } from "@/lib/utils";


const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full resize-y rounded-md border border-black/10 bg-white px-4 py-3",
        "text-base leading-normal text-foreground placeholder:text-gray-muted",
        "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "touch-manipulation",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
