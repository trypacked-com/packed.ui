import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";

export default function InputDemo() {
  return (
    <div className="grid w-full max-w-xs gap-4">
      <div className="grid gap-2">
        <Label htmlFor="destination">Destination</Label>
        <Input id="destination" placeholder="Where to?" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="flight-code">Flight code</Label>
        <Input
          id="flight-code"
          className="font-mono"
          placeholder="TP1234"
          defaultValue="TP1234"
        />
      </div>
    </div>
  );
}
