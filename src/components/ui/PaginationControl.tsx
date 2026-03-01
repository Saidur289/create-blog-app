import React from "react";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationControl() {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div>
        <p>Showing start to end of totalCounts</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button size="icon" variant="outline">
          <ChevronLeft className="w-4 h-4"></ChevronLeft>
        </Button>
        <Button size="icon" variant="outline">
          <ChevronLeft className="w-4 h-4"></ChevronLeft>
        </Button>
        <div className="flex items-center">
          <p>1 page 2 of totalPages</p>
        </div>
        <Button variant={"outline"} size={"icon"}>
          <ChevronRight className="w-4 h-4"></ChevronRight>
        </Button>
        <Button variant={"outline"} size={"icon"}>
          <ChevronRight className="w-4 h-4"></ChevronRight>
        </Button>
      </div>
    </div>
  );
}
