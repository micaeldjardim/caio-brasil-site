import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
  size = "site",
}: {
  className?: string;
  children: React.ReactNode;
  size?: "site" | "prose";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-8",
        size === "site" ? "max-w-[75rem]" : "max-w-[42rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}
