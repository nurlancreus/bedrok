import { Button } from "@/components/ui/button";
import BlogCard from "./_components/blog-card";

export default function Home() {
  return (
    <div className="pb-24 pt-16">
      <div className="container">
        <div className="mb-32">
          <h4 className="text-neutral-40 text-2xl">Featured Post</h4>
        </div>

        <div>
          <header className="mb-6 flex items-center justify-between">
            <h4 className="text-neutral-40 text-2xl">Recent posts</h4>

            <Button variant={"link"}>See All</Button>
          </header>
          <div className="flex items-center gap-6 [&>*]:flex-1">
            {/* <BlogCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
