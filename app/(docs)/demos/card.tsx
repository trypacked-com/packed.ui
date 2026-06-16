import { Button } from "@/registry/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";

export function CardDemo() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Your trip to Lisbon</CardTitle>
        <CardDescription>
          We'll watch the flights from here and keep you in the loop.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          Departure <span className="font-mono">TP1234</span> at{" "}
          <span className="font-mono">08:45</span>, gate{" "}
          <span className="font-mono">B7</span>.
        </p>
      </CardContent>
      <CardFooter className="border-border-subtle border-t">
        <Button size="sm">View itinerary</Button>
      </CardFooter>
    </Card>
  );
}
