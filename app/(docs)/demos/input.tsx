import { Input } from "@/registry/ui/input";

export function InputDemo() {
  return (
    <div className="grid max-w-xs gap-2">
      <label className="font-medium text-sm text-strong" htmlFor="demo-email">
        Email
      </label>
      <Input id="demo-email" placeholder="you@example.com" />
    </div>
  );
}
