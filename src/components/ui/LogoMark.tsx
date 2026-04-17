import Image from "next/image";
import { cn } from "@/lib/cn";

export function LogoMark({
  className,
  size = 56,
}: {
  className?: string;
  /** @deprecated wordmark já está embutido no arquivo do logo */
  withWordmark?: boolean;
  size?: number;
}) {
  return (
    <div className={cn("inline-flex items-center", className)}>
      <Image
        src="/logo.jpg"
        alt="Caio Brasil Advocacia"
        width={size}
        height={size}
        priority
        className="rounded-full object-cover shadow-[0_0_0_1px_rgba(212,175,55,0.25)]"
      />
    </div>
  );
}
