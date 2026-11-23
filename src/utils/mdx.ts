import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { parseDate } from "@/lib/utils";

type FrontMatter = {
  title: string;
  description: string;
  image: string;
  date: string;
};

const BLOG_DIR = path.join(process.cwd(), "src/data");
const WORDS_PER_MINUTE = 220;

const readBlogFile = async (slug: string) => {
  try {
    return await fs.readFile(path.join(BLOG_DIR, `${slug}.mdx`), "utf-8");
  } catch {
    return null;
  }
};

export const getSingleBlog = async (slug: string) => {
  const file = await readBlogFile(slug);
  if (!file) return null;

  const { data, content } = matter(file);
  const processed = await remark().use(html).process(content);
  const words = content.trim().split(/\s+/).length;

  return {
    content: String(processed),
    frontmatter: data as FrontMatter,
    readingTime: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
  };
};

export const getBlogFrontMatterBySlug = async (slug: string) => {
  const file = await readBlogFile(slug);
  if (!file) return null;
  return matter(file).data as FrontMatter;
};

export const getBlogs = async () => {
  const files = (await fs.readdir(BLOG_DIR)).filter((file) => file.endsWith(".mdx"));

  const blogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const frontmatter = await getBlogFrontMatterBySlug(slug);
      return { slug, ...frontmatter };
    }),
  );

  return blogs.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
};
