import { Plane } from "lucide-react";

import { Button } from "@/registry/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/ui/empty";

export default function EmptyDemo() {
  return (
    <Empty className="max-w-sm border border-border-subtle">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Plane />
        </EmptyMedia>
        <EmptyTitle>No flights yet</EmptyTitle>
        <EmptyDescription>
          Add a flight and we'll watch gates, delays, and changes for you.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Add flight</Button>
      </EmptyContent>
    </Empty>
  );
}
