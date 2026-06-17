import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Calendar } from "@/registry/ui/calendar";

const meta: Meta<typeof Calendar> = {
  title: "UI/Calendar",
  component: Calendar,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function CalendarStory() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        defaultMonth={date}
      />
    );
  },
};
