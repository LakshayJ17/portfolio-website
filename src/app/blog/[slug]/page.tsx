import { Container } from "@/components/container";
import { Scales } from "@/components/scales";
import { getBlogFrontMatterBySlug, getSingleBlog } from "@/utils/mdx";
import Image from "next/image";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const frontmatter = await getBlogFrontMatterBySlug(slug);
  if (!frontmatter) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: frontmatter.title + " - Lakshay Jain",
    description: frontmatter.description,
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;

  return (
    <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
      <Scales />
      
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          {frontmatter.title}
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
          {frontmatter.description}
        </p>
      </div>

      {/* Featured Image */}
      <div className="mb-12">
        <Image
          width={800}
          height={400}
          src={frontmatter.image}
          alt={frontmatter.title}
          className="mx-auto h-64 w-full max-w-4xl rounded-2xl border border-gray-200 object-cover shadow-lg md:h-80 lg:h-96"
          priority
        />
      </div>

      {/* Article Meta */}
      <div className="mb-12 flex flex-col items-center justify-between border-b border-gray-200 pb-8 md:flex-row">
        <div className="mb-4 flex items-center space-x-3 md:mb-0">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-sm font-semibold text-white">LJ</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Lakshay Jain</p>
            <p className="text-sm text-gray-600">Full Stack Developer</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <time dateTime={frontmatter.date}>
            {new Date(frontmatter.date || "").toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">5 min read</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto max-w-4xl">
        <div 
          className="mx-auto max-w-none text-gray-800 leading-relaxed [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-gray-900 [&>h1]:mt-8 [&>h1]:mb-4 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-gray-900 [&>h2]:mt-6 [&>h2]:mb-3 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-gray-900 [&>h3]:mt-5 [&>h3]:mb-2 [&>p]:mb-4 [&>p]:text-gray-700 [&>ul]:mb-4 [&>ul]:ml-6 [&>ul]:list-disc [&>ol]:mb-4 [&>ol]:ml-6 [&>ol]:list-decimal [&>li]:mb-2 [&>blockquote]:border-l-4 [&>blockquote]:border-gray-300 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>code]:bg-gray-100 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-gray-800 [&>code]:font-mono [&>code]:text-sm [&>pre]:bg-gray-900 [&>pre]:text-gray-100 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:mb-4 [&>a]:text-blue-600 [&>a]:no-underline [&>a:hover]:underline"
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      </article>

      {/* Footer */}
      <div className="mt-16 border-t border-gray-200 pt-8 text-center">
        <p className="text-gray-600">
          Thanks for reading! Feel free to reach out if you have any questions.
        </p>
      </div>
    </Container>
  );
}
