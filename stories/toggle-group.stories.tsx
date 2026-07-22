import type { Meta, StoryObj } from "@storybook/react";

import { ToggleGroup, ToggleGroupItem } from "@/registry/ui/toggle-group";

const meta: Meta<typeof ToggleGroup> = {
  title: "UI/Toggle Group",
  component: ToggleGroup,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ToggleGroup defaultValue={["departures"]} variant="outline">
      <ToggleGroupItem value="departures">Departures</ToggleGroupItem>
      <ToggleGroupItem value="arrivals">Arrivals</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Multiple: Story = {
  render: () => (
    <ToggleGroup multiple variant="outline" defaultValue={["flights"]}>
      <ToggleGroupItem value="flights">Flights</ToggleGroupItem>
      <ToggleGroupItem value="hotels">Hotels</ToggleGroupItem>
      <ToggleGroupItem value="cars">Cars</ToggleGroupItem>
    </ToggleGroup>
  ),
};
