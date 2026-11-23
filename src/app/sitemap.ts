import type { MetadataRoute } from "next";
import { featuredProjects } from "@/constants/projects";
import { site } from "@/constants/site";
import { parseDate } from "@/lib/utils";
import { getBlogs } from "@/utils/mdx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs();

  return [
    ...["", "/about", "/projects", "/blog", "/contact"].map((path) => ({ url: `${site.url}${path}` })),
    ...featuredProjects.map((project) => ({ url: `${site.url}/projects/${project.slug}` })),
    ...blogs.map((blog) => {
      const date = parseDate(blog.date);
      return {
        url: `${site.url}/blog/${blog.slug}`,
        lastModified: Number.isNaN(date.getTime()) ? undefined : date,
      };
    }),
  ];
}
