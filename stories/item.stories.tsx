import type { Meta, StoryObj } from "@storybook/react";
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

const meta: Meta<typeof Item> = {
  title: "UI/Item",
  component: Item,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ItemGroup className="w-80">
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
  ),
};

export const Outline: Story = {
  render: () => (
    <Item variant="outline" className="w-80">
      <ItemMedia variant="icon">
        <Plane />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>TP5678 to Porto</ItemTitle>
        <ItemDescription>
          Departs <span className="font-mono">11:20</span>, gate{" "}
          <span className="font-mono">A3</span>
        </ItemDescription>
      </ItemContent>
    </Item>
  ),
};
