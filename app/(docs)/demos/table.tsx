import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/ui/table";

export default function TableDemo() {
  return (
    <Table className="w-full max-w-md">
      <TableHeader>
        <TableRow>
          <TableHead>Flight</TableHead>
          <TableHead>Departs</TableHead>
          <TableHead>Gate</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-mono">TP1234</TableCell>
          <TableCell className="font-mono">08:45</TableCell>
          <TableCell className="font-mono">B7</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-mono">TP5678</TableCell>
          <TableCell className="font-mono">11:20</TableCell>
          <TableCell className="font-mono">A3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-mono">TP9012</TableCell>
          <TableCell className="font-mono">14:05</TableCell>
          <TableCell className="font-mono">C12</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
