import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";

export default function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Lisbon escape</CardTitle>
        <CardDescription>5 days · 2 travellers</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Departure <span className="font-mono">TP1234</span> at{" "}
          <span className="font-mono">08:45</span>, gate{" "}
          <span className="font-mono">B7</span>.
        </p>
      </CardContent>
    </Card>
  );
}
