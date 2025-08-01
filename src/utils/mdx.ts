import { promises as fs } from 'fs';
import path from 'path';

export const getSingleBlog = async (slug: string) => {
    const singleBlog = await fs.readFile(
        path.join(process.cwd(), "src/data", "tailwindcss-basics.mdx"),
        "utf-8"
    )
    return singleBlog
}