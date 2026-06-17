import { expect, test } from "@playwright/test";

type StorybookIndex = {
  entries: Record<
    string,
    {
      id: string;
      type: "story" | "docs";
      title: string;
      name: string;
    }
  >;
};

test("all stories match baselines", async ({ page, request }) => {
  const response = await request.get("/index.json");
  const index = (await response.json()) as StorybookIndex;

  const storyIds = Object.values(index.entries)
    .filter((entry) => entry.type === "story")
    .map((entry) => entry.id);

  for (const storyId of storyIds) {
    await page.goto(`/iframe.html?id=${storyId}`, {
      waitUntil: "domcontentloaded",
    });
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot(`${storyId}.png`, {
      fullPage: true,
    });
  }
});
