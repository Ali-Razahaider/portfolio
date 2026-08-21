import { getPostBySlug, getPostSlugs } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-32 pb-20 px-6 max-w-[700px] mx-auto w-full min-h-screen">
      <Link href="/blogs" className="text-void-accent hover:text-void-text text-[13px] font-semibold mb-8 inline-block transition-colors">
        ← Back to Writing
      </Link>
      
      <header className="mb-10">
        <h1 className="text-void-text text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight leading-[1.2] mb-4">
          {post.title}
        </h1>
        <div className="text-void-muted text-[14px] font-medium">
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none prose-headings:text-void-text prose-p:text-void-muted prose-a:text-void-accent hover:prose-a:text-void-border-hover prose-strong:text-void-text prose-pre:bg-void-card/50 prose-pre:border prose-pre:border-void-border/50">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
