import { cn } from "@/lib/utils";

function Button({
  children,
  className,
  onClick,
  icon,
  iconPosition = "right",
  border = "rounded-lg",
  size = "md",
  textSize,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  border?: string;
  size?: "sm" | "md" | "lg";
  textSize?: string;
}) {
  return (
    <button
      className={cn(
        className,
        `relative inline-flex cursor-pointer ${size === "lg" && "h-12 md:h-14"} ${size === "md" && "h-10 md:h-12"} ${size === "sm" && "h-8 md:h-10"} overflow-hidden ${border} p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`,
      )}
      onClick={onClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={cn(
          `inline-flex h-full w-full cursor-pointer items-center justify-center ${border} bg-[linear-gradient(90deg,rgba(144,0,16,1)_0%,rgba(220,20,60,1)_20%,rgba(172,96,255,1)_100%);] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ${icon && "gap-3 md:gap-2"}`,
          textSize,
        )}
      >
        {iconPosition === "left" && <span className="mr-1">{icon}</span>}
        {children}
        {iconPosition === "right" && <span className="ml-1">{icon}</span>}
      </span>
    </button>
  );
}

export default Button;
