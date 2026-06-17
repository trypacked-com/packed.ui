import { Badge } from "@/registry/ui/badge";

export default function BadgeDemo() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="pk-eyebrow">Flight status</span>
        <div className="flex flex-wrap gap-2">
          <Badge variant="ontime">On time</Badge>
          <Badge variant="boarding" pulse>
            Boarding
          </Badge>
          <Badge variant="delayed">Delayed 40m</Badge>
          <Badge variant="cancelled">Cancelled</Badge>
          <Badge variant="landed">Landed</Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="pk-eyebrow">Labels</span>
        <div className="flex flex-wrap gap-2">
          <Badge>3 updates</Badge>
          <Badge variant="brand">Packed</Badge>
          <Badge variant="tag">Beach</Badge>
          <Badge variant="tagBrand">Priority</Badge>
        </div>
      </div>
    </div>
  );
}
