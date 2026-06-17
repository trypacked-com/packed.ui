import { Kbd, KbdGroup } from "@/registry/ui/kbd";

export default function KbdDemo() {
  return (
    <p className="text-sm text-muted-foreground">
      Press{" "}
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>{" "}
      to search flights
    </p>
  );
}
