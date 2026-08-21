import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export const metadata = {
  title: 'Blog | Ali Raza Haider',
  description: 'Writings on software engineering and systems design.',
};

export default function BlogsPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-32 pb-20 px-6 max-w-[800px] mx-auto w-full min-h-screen">
      <h1 className="text-void-text text-4xl font-bold mb-4 tracking-tight">Writing</h1>
      <p className="text-void-muted mb-12">Thoughts, learnings, and deep dives into software engineering.</p>
      
      <div className="flex flex-col gap-6">
        {posts.length === 0 ? (
          <p className="text-void-muted">No posts found.</p>
        ) : (
          posts.map((post) => (
            <Link 
              href={`/blogs/${post.slug}`} 
              key={post.slug} 
              className="group flex flex-col gap-2 p-6 rounded-2xl bg-void-card/40 backdrop-blur-md border border-void-border/50 hover:bg-void-card/60 hover:border-void-border-hover/80 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(120,192,224,0.15)] transition-all duration-300"
            >
              <h2 className="text-void-text text-xl font-semibold group-hover:text-void-accent transition-colors">
                {post.title}
              </h2>
              <div className="text-void-muted text-[13px] font-medium mb-1">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </div>
              <p className="text-void-muted text-[15px] leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
