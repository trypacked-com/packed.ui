import { Spinner } from "@/registry/ui/spinner";

export default function SpinnerDemo() {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Spinner />
      Checking gate <span className="font-mono">B7</span>…
    </div>
  );
}
