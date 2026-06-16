import type { Preview } from "@storybook/react";

import "../app/globals.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "cream",
      values: [
        { name: "cream", value: "#FBF7F2" },
        { name: "card", value: "#FFFFFF" },
        { name: "dark", value: "#1A1714" },
      ],
    },
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-10 font-sans text-foreground">
        <Story />
      </div>
    ),
  ],
};

export default preview;
