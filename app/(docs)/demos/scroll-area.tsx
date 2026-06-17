import { ScrollArea } from "@/registry/ui/scroll-area";

const flights = [
  { code: "TP1234", time: "08:45", gate: "B7" },
  { code: "TP5678", time: "11:20", gate: "A3" },
  { code: "TP9012", time: "14:05", gate: "C12" },
  { code: "TP3456", time: "16:30", gate: "D4" },
  { code: "TP7890", time: "19:15", gate: "B2" },
  { code: "TP2468", time: "21:50", gate: "A9" },
];

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-32 w-full max-w-xs rounded-md border border-subtle">
      <div className="space-y-3 p-4">
        {flights.map((flight) => (
          <div
            key={flight.code}
            className="flex items-center justify-between text-sm"
          >
            <span className="font-mono">{flight.code}</span>
            <span className="font-mono text-muted-text">{flight.time}</span>
            <span className="font-mono text-muted-text">{flight.gate}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
