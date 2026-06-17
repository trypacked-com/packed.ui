import { Logo } from "@/registry/ui/logo";

export default function LogoDemo() {
  return (
    <div className="flex w-full max-w-lg flex-wrap items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-3">
        <Logo variant="auto" size="lg" />
        <span className="font-mono text-muted-foreground text-xs">auto</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Logo variant="brand" size="lg" />
        <span className="font-mono text-muted-foreground text-xs">brand</span>
      </div>
      <div className="flex flex-col items-center gap-3 rounded-lg bg-brand p-5">
        <Logo variant="inverse" size="lg" />
        <span className="font-mono text-on-brand text-xs">inverse</span>
      </div>
    </div>
  );
}
