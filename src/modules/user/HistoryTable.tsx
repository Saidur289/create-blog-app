import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BlogData, BlogPost } from "@/types";

export default function HistoryTable({ blogs }: { blogs: BlogPost[] }) {
  //   console.log("from history table", blogs);
  return (
    <Table className="border-t rounded-md">
      <TableCaption>A list of your recent blogs.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-25">Title</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead>Views</TableHead>
          <TableHead className="text-right">Comment</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogs.length === 0 ? (
          <TableRow>
            <TableCell>No Blog Found</TableCell>
          </TableRow>
        ) : (
          blogs.map((blog) => (
            <TableRow>
              <TableCell>
                <div className="w-96">
                  <p className="font-medium text-xl">{blog.title}</p>
                  <p className="text-sm  line-clamp-1">
                    {blog.content.substring(0, 20)}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                {blog.tags && blog.tags.length > 0 ? (
                  <div className="flex flex-wrap gap-1">
                    {blog.tags?.map((tag) => (
                      <Badge variant="outline">{tag}</Badge>
                    ))}
                  </div>
                ) : (
                  <Badge variant="outline">No tag</Badge>
                )}
              </TableCell>
              <TableCell>{blog.views > 0 ? blog.views : 0}</TableCell>
              <TableCell className="text-right">
                {blog._count?.comments ?? 0}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
