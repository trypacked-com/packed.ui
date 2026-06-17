import { Badge } from "@/registry/ui/badge";

export default function BadgeDemo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Badge>3 updates</Badge>
        <Badge variant="brand">Packed</Badge>
        <Badge variant="tag">Beach</Badge>
        <Badge variant="tagBrand">Priority</Badge>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Badge variant="ontime">On time</Badge>
        <Badge variant="delayed">Delayed 40m</Badge>
      </div>
    </div>
  );
}
