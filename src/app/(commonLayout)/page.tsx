import BlogCard from "@/modules/homepage/BlogCard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

export default async function Home() {
  // const {data} = await userService.getUserSession()
  // console.log(data?.user);
  const { data } = await blogService.getBlogPost(
    {
      isFeatured: false,
    },
    {
      revalidate: 10,
    },
  );
  // console.log(data?.data?.data);
  return (
    <div className="grid grid-cols-3 px-5 mx-auto gap-6 ">
      {data?.data?.data.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
