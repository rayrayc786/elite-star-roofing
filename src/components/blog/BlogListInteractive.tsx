"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, Clock, Calendar, X, Sparkles, ShieldCheck } from "lucide-react";
import type { BlogPost } from "@/lib/data";

interface BlogListInteractiveProps {
  initialPosts: BlogPost[];
}

export default function BlogListInteractive({ initialPosts }: BlogListInteractiveProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(initialPosts.map((p) => p.category)));
    return ["All", ...cats];
  }, [initialPosts]);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        (post.primaryKeyword && post.primaryKeyword.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  const featuredPost = filteredPosts[0];
  const sidePosts = filteredPosts.slice(1, 3);
  const remainingPosts = filteredPosts.slice(3);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <div>
      {/* Search & Filter Toolbar */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-border/70 mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-lg">
            <Search className="w-4 h-4 text-text-muted absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, costs, cleaning tips..."
              className="w-full pl-11 pr-10 py-3 bg-warm-white/70 border border-border rounded-xl text-sm text-primary placeholder:text-text-muted/60 focus:bg-white focus:border-accent focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-primary p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Results Counter */}
          <div className="text-xs text-text-muted flex items-center justify-between sm:justify-end gap-3 px-1">
            <span className="font-semibold text-primary">
              {filteredPosts.length} {filteredPosts.length === 1 ? "Article" : "Articles"} Available
            </span>
            {(selectedCategory !== "All" || searchQuery) && (
              <button
                onClick={resetFilters}
                className="text-accent hover:underline text-xs font-semibold cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-border/50 scrollbar-none">
          {categories.map((category) => {
            const count =
              category === "All"
                ? initialPosts.length
                : initialPosts.filter((p) => p.category === category).length;
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-accent text-white shadow-md shadow-accent/20 scale-[1.02]"
                    : "bg-warm-white/80 text-text-muted hover:text-primary hover:bg-warm-white"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-black/5 text-text-muted"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* No Results Fallback */}
      {filteredPosts.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-border max-w-lg mx-auto my-12">
          <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-primary mb-2 font-glint italic">
            No Matching Guides Found
          </h3>
          <p className="text-sm text-text-muted mb-6">
            We couldn&apos;t find any articles matching &quot;{searchQuery}&quot;. Try exploring other categories or clearing your search.
          </p>
          <button
            onClick={resetFilters}
            className="px-6 py-2.5 bg-accent text-white font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-md"
          >
            Show All Articles
          </button>
        </div>
      ) : (
        <>
          {/* Main Showcase Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
            {/* Primary Featured Post */}
            {featuredPost && (
              <div className="lg:col-span-8 group">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="block h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/60 hover:border-accent/40"
                >
                  <div className="relative aspect-[16/9] bg-primary/5 overflow-hidden">
                    <div className="absolute top-5 left-5 z-10 flex gap-2">
                      <span className="px-3.5 py-1.5 bg-accent text-white text-[11px] font-bold uppercase tracking-wider rounded-lg shadow-md font-subheading flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" /> {featuredPost.category}
                      </span>
                      {featuredPost.slug === "how-much-does-roof-painting-cost-in-perth" && (
                        <span className="px-3 py-1.5 bg-primary/90 text-white text-[11px] font-bold uppercase tracking-wider rounded-lg shadow-md">
                          Latest Guide
                        </span>
                      )}
                    </div>
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 800px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-8 sm:p-10">
                    <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted mb-4 uppercase tracking-wider">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        {new Date(featuredPost.date).toLocaleDateString("en-AU", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-accent"></span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 group-hover:text-accent transition-colors font-glint italic leading-snug">
                      {featuredPost.title}
                    </h2>

                    <p className="text-text-muted mb-6 text-base leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent/15 text-accent font-bold text-xs flex items-center justify-center">
                          {featuredPost.author.charAt(0)}
                        </div>
                        <span className="text-xs font-semibold text-primary">
                          {featuredPost.author}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent group-hover:translate-x-1 transition-transform">
                        Read Full Guide <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Side Column (Posts 2 & 3) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {sidePosts.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className="group flex-1 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/60 hover:border-accent/40 flex flex-col"
                >
                  <div className="relative aspect-[16/9] bg-primary/5 overflow-hidden">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-primary/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
                        {post.category}
                      </span>
                    </div>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[11px] text-text-muted mb-2 uppercase tracking-wider">
                      <span>
                        {new Date(post.date).toLocaleDateString("en-AU", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-accent"></span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2 font-glint italic">
                      {post.title}
                    </h3>

                    <p className="text-xs text-text-muted line-clamp-2 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-3 border-t border-border/40 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-accent group-hover:text-accent-hover transition-colors inline-flex items-center gap-1.5">
                        Read Article <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}

              {/* Side CTA Card if fewer side posts */}
              {sidePosts.length < 2 && (
                <div className="bg-primary text-white rounded-2xl p-6 flex flex-col justify-between border border-primary-light">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
                      Free Inspection
                    </span>
                    <h4 className="text-xl font-bold mb-2 font-glint italic">
                      Need a Perth Roofing Assessment?
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed mb-6">
                      Our licensed specialists provide written quotes for painting, cleaning, and repairs across WA.
                    </p>
                  </div>
                  <Link
                    href="/request-quote"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-accent-hover transition-colors shadow"
                  >
                    Request Free Quote <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Remaining Articles Grid */}
          {remainingPosts.length > 0 && (
            <div className="border-t border-border/60 pt-16 mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary font-glint italic uppercase">
                  More Practical Roofing Guides
                </h2>
                <span className="text-xs text-text-muted font-medium">
                  Page 1 of 1
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {remainingPosts.map((post) => (
                  <Link
                    href={`/blog/${post.slug}`}
                    key={post.slug}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/60 hover:border-accent/40 flex flex-col h-full"
                  >
                    <div className="relative aspect-[16/10] bg-primary/5 overflow-hidden">
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-primary/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-md font-subheading">
                          {post.category}
                        </span>
                      </div>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2.5 text-[10px] text-text-muted mb-3 uppercase tracking-wider">
                        <span>
                          {new Date(post.date).toLocaleDateString("en-AU", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-accent"></span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors font-glint italic line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-sm text-text-muted line-clamp-3 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                        <span className="text-xs text-text-muted font-medium">
                          {post.author}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-accent group-hover:text-accent-hover transition-colors">
                          Read <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Banner */}
          <div className="rounded-3xl bg-primary text-white p-8 sm:p-12 relative overflow-hidden border border-primary-light">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/40 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-4">
                <ShieldCheck className="w-3.5 h-3.5" /> Perth & WA Roofing Experts
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold font-glint italic uppercase mb-4 text-white">
                Have Questions About Your Roof?
              </h3>
              <p className="text-white/80 text-base leading-relaxed mb-8">
                From paint restoration and moss cleaning to leak repairs and ridge re-pointing, we provide honest advice and obligation-free quotes across Western Australia.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="/request-quote"
                  className="px-8 py-3.5 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-accent/25"
                >
                  Book Free Roof Inspection
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 border border-white/20"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
