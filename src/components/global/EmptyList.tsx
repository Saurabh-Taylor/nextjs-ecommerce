import { cn } from "@/lib/utils";

function EmptyList({
  heading = "No items found.",
  className,
}: {
  heading?: string;
  className?: string;
}) {
  return <h2 className={cn("text-3xl", className)}> {heading}</h2>;
}

export default EmptyList;
