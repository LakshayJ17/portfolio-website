import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

type FrontMatter = {
    title: string;
    description: string;
    image: string;
    date: string;
}

export const getSingleBlog = async (slug: string) => {
    try {
        const singleBlog = await fs.readFile(
            path.join(process.cwd(), "src/data", `${slug}.mdx`),
            "utf-8"
        );

        if (!singleBlog) {
            return null;
        }

        // Parse frontmatter and content separately
        const { data: frontmatter, content } = matter(singleBlog);
        
        // Convert MDX to HTML
        const processedContent = await remark()
            .use(html)
            .process(content);
        const htmlContent = String(processedContent);

        return { content: htmlContent, frontmatter: frontmatter as FrontMatter };

    } catch (error) {
        console.error("Error reading blog:", error);
        return null
    }
}

export const getBlogs = async () => {
    const files = await fs.readdir(path.join(process.cwd(), 'src/data'));

    const allBlogs = await Promise.all(
        files.map(async file => {
            const slug = file.replace('.mdx', '');
            const frontmatter = await getBlogFrontMatterBySlug(slug);

            return {
                slug,
                ...frontmatter,
            };
        })
    );

    return allBlogs;
};

export const getBlogFrontMatterBySlug = async (slug: string) => {
    try {
        const singleBlog = await fs.readFile(
            path.join(process.cwd(), "src/data", `${slug}.mdx`),
            "utf-8"
        )

        if (!singleBlog) {
            return null;
        }

        // Parse only frontmatter
        const { data: frontmatter } = matter(singleBlog);

        return frontmatter as FrontMatter;
    } catch (error) {
        console.error("Error reading blog frontmatter:", error);
        return null;
    }
}