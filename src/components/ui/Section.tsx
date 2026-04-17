import { cn } from "@/lib/cn";

export function Section({
  className,
  children,
  id,
  as: Tag = "section",
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
  as?: "section" | "header" | "article" | "div";
}) {
  return (
    <Tag id={id} className={cn("py-20 md:py-28", className)}>
      {children}
    </Tag>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-gold-500">
      {children}
    </span>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-serif text-4xl md:text-5xl text-cream-50 mt-4 leading-tight",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function GoldRule({ className }: { className?: string }) {
  return <div className={cn("gold-rule my-6", className)} aria-hidden />;
}
