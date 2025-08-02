import { promises as fs } from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';

export const getSingleBlog = async (slug: string) => {
    try {
        const singleBlog = await fs.readFile(
            path.join(process.cwd(), "src/data", `${slug}.mdx`),
            "utf-8"
        );

        if (!singleBlog) {
            return null;
        }

        const { content, frontmatter } = await compileMDX<{ title: string }>({
            source: singleBlog,
            options: { parseFrontmatter: true },
        });

        return { content, frontmatter };

    } catch (error) {
        console.error("Error reading or compiling blog:", error);
        return null
    }
}