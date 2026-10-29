import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/site-data";

export function Blog() {
  if (BLOG_POSTS.length === 0) return null;
  const [featured, ...rest] = BLOG_POSTS;
  return (
    <section id="blog" className="cw-section bg-coral-soft/30 relative">
      <div className="cw-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <p className="cw-eyebrow mb-5">Field notes</p>
            <h2 className="cw-display text-4xl md:text-5xl lg:text-6xl">
              Latest from the <span className="text-coral">blog.</span>
            </h2>
          </div>
          <p className="text-base text-slate max-w-md leading-relaxed">
            Tips, process notes and thoughts on graphic design, branding and the
            business of beautiful work.
          </p>
        </div>

        {/* Compact 3-column grid — smaller images, less vertical space */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {/* Featured post — same card style as the rest, just spans 1 col */}
          <article className="group rounded-2xl overflow-hidden border border-border bg-card cw-card-hover">
            <Link href={`#blog-${featured.slug}`} className="block" aria-label={`Read: ${featured.title}`}>
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={featured.image} alt={featured.title} className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} loading="lazy" />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate mb-2">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} />
                    {formatDate(featured.date)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={12} />
                    {featured.readingTime}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-navy leading-tight">
                  {featured.title}
                </h3>
                <p className="mt-2 text-sm text-slate leading-relaxed line-clamp-2">{featured.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-coral">
                  Read article
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </Link>
          </article>

          {/* Remaining posts — same compact card style */}
          {rest.map((post) => (
            <article key={post.slug} className="group rounded-2xl overflow-hidden border border-border bg-card cw-card-hover">
              <Link href={`#blog-${post.slug}`} className="block" aria-label={`Read: ${post.title}`}>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={post.image} alt={post.title} className="object-cover transition-transform duration-500 group-hover:scale-105" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} loading="lazy" />
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate mb-2">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={12} />
                      {formatDate(post.date)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} />
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy leading-tight">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-coral">
                    Read article
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function formatDate(iso: string) {
  // Use UTC methods to guarantee identical output on server and client.
  // toLocaleDateString with a timezone option is non-deterministic across
  // environments (server TZ ≠ client TZ), which causes React hydration errors.
  const d = new Date(iso);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}
