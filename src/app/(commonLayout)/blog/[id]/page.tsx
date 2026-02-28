import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";
export async function generateStaticParams() {
  const { data } = await blogService.getBlogPost();

  const posts = data.data.data;
  return posts.slice(0, 3).map((post: BlogPost) => ({
    id: post.id,
  }));
}
export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data } = await blogService.getPostById(id);
  //   console.log(blog);
  const blog = data.data;
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

      <p className="text-gray-500 text-sm mb-2">Views: {blog.views}</p>

      <p className="text-gray-500 text-sm mb-6">
        Published At: {new Date(blog.createdAt).toLocaleDateString()}
      </p>

      <div className="text-lg leading-relaxed">{blog.content}</div>
    </div>
  );
}
