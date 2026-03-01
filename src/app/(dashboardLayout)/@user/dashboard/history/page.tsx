import PaginationControl from "@/components/ui/PaginationControl";
import HistoryTable from "@/modules/user/HistoryTable";
import { blogService } from "@/services/blog.service";
import React from "react";

export default async function HistoryPage() {
  const { data } = await blogService.getBlogPost();
  //   console.log(data.data.data);
  const blogsData = data.data.data;
  return (
    <div className="p-5">
      <h1 className="font-medium text-2xl mb-7">History Page</h1>
      <HistoryTable blogs={blogsData} />
      <PaginationControl />
    </div>
  );
}
