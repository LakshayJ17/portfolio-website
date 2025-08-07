import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";
import React from "react";
import { SectionHeading } from "./section-heading";
import { MotionDiv } from "./motion-div";

const LandingBlogs = async () => {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };
  return (
    <div>
      <SectionHeading className="pb-4" delay={0.4}>
        I love writing things down
      </SectionHeading>
      <div className="flex flex-col gap-4">
        {allBlogs.map((blog, idx) => (
          <MotionDiv
            key={blog.title}
            initial={{ opacity: 0, y : 10, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: 1,
              delay: idx * 0.05,
            }}
          >
            <Link href={`/blog/${blog.slug}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-primary text-base font-bold tracking-tight">
                  {blog.title}
                </h2>
                <p className="text-secondary text-sm md:text-sm">
                  {new Date(blog.date || "").toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>

              <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
                {truncate(blog.description || "", 150)}
              </p>
            </Link>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};

export default LandingBlogs;
