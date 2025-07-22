import { ReactNode } from "react";
import { Card } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import PaginationDataTabel from "./pagination-data-table";

export default function DataTable({
  header,
  data,
  isLoading,
  totalPages,
  currentPage,
  currentLimit,

  onChangePage,
  onChangeLimit,
}: {
  header: string[];
  data: (string | ReactNode)[][];
  isLoading: boolean;
  totalPages: number;
  currentPage: number;
  currentLimit: number;
  onChangePage: (page: number) => void;
  onChangeLimit: (limit: number) => void;
}) {
  return (
    <div className="w-full flex flex-col gap-4">
      <Card className="p-0">
        <Table className="w-full rounded-lg overflow-hidden">
          <TableHeader className="bg-muted sticky top-0 z-10">
            <TableRow>
              {header.map((col) => (
                <TableHead key={`th-${col}`} className="px-6 py-3">
                  {col}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((row, rowIndex) => (
              <TableRow key={`tr-${rowIndex}`}>
                {row.map((col, colIndex) => (
                  <TableCell
                    className="px-6 py-3"
                    key={`tc-${rowIndex}-${colIndex}`}
                  >
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            {data?.length === 0 && !isLoading && (
              <TableRow>
                <TableCell colSpan={header.length} className="h-24 text-center">
                  Tidak ada data
                </TableCell>
              </TableRow>
            )}
            {isLoading && (
              <TableRow>
                <TableCell colSpan={header.length} className="h-24 text-center">
                  Loading
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
      <div className="flex items-center justify-between">
        <div></div>
        {totalPages > 1 && (
          <div className="flex justify-end">
            <PaginationDataTabel
              currentPage={currentPage}
              onChangePage={onChangePage}
              totalPages={totalPages}
            />
          </div>
        )}
      </div>
    </div>
  );
}
