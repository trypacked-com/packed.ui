import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/registry/ui/button";
import { ButtonGroup } from "@/registry/ui/button-group";

const meta: Meta<typeof ButtonGroup> = {
  title: "UI/ButtonGroup",
  component: ButtonGroup,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="sm">
        Day 1
      </Button>
      <Button variant="outline" size="sm">
        Day 2
      </Button>
      <Button variant="outline" size="sm">
        Day 3
      </Button>
    </ButtonGroup>
  ),
};
