import { Luggage, Plane } from "lucide-react";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/registry/ui/item";

export default function ItemDemo() {
  return (
    <ItemGroup className="w-full max-w-sm">
      <Item size="sm">
        <ItemMedia variant="icon">
          <Plane />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>TP1234 to Lisbon</ItemTitle>
          <ItemDescription>
            Departs <span className="font-mono">08:45</span>, gate{" "}
            <span className="font-mono">B7</span>
          </ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item size="sm">
        <ItemMedia variant="icon">
          <Luggage />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Summer in Portugal</ItemTitle>
          <ItemDescription>Jun 12 – Jun 19 · 2 flights booked</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  );
}
