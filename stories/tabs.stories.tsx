import type { Meta, StoryObj } from "@storybook/react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs";

const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="flights" className="w-96">
      <TabsList>
        <TabsTrigger value="flights">Flights</TabsTrigger>
        <TabsTrigger value="stays">Stays</TabsTrigger>
      </TabsList>
      <TabsContent value="flights" className="text-sm text-muted-text">
        <span className="font-mono">TP1234</span> to Lisbon departs at{" "}
        <span className="font-mono">08:45</span> from gate{" "}
        <span className="font-mono">B7</span>.
      </TabsContent>
      <TabsContent value="stays" className="text-sm text-muted-text">
        Hotel check-in at <span className="font-mono">15:00</span> — we'll
        remind you before you land.
      </TabsContent>
    </Tabs>
  ),
};
