"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Calendar, 
  Clock, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Search,
  Tag
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogTemplateProps {
  preview?: boolean;
}

export function BlogTemplate({ preview }: BlogTemplateProps) {
  const featuredPost = {
    title: "Building Beautiful UIs with Gradient Forge",
    excerpt: "Learn how to create stunning gradient themes and apply them to your shadcn/ui components for a cohesive design system.",
    author: "Sarah Chen",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "Design",
    image: "bg-gradient-to-br from-primary/30 to-accent/30"
  };

  const posts = [
    {
      id: 1,
      title: "The Future of CSS Variables in Modern Web Design",
      excerpt: "Explore how CSS custom properties are revolutionizing the way we build and maintain design systems.",
      author: "Alex Rivera",
      date: "Jan 12, 2024",
      readTime: "5 min",
      category: "Development",
      image: "bg-muted"
    },
    {
      id: 2,
      title: "Creating Accessible Color Palettes",
      excerpt: "A comprehensive guide to building color systems that work for everyone, including WCAG compliance tips.",
      author: "Emily Watson",
      date: "Jan 10, 2024",
      readTime: "6 min",
      category: "Accessibility",
      image: "bg-muted"
    },
    {
      id: 3,
      title: "Mastering Dark Mode Design",
      excerpt: "Best practices for implementing dark mode that looks great and reduces eye strain for your users.",
      author: "Michael Park",
      date: "Jan 8, 2024",
      readTime: "4 min",
      category: "UI Design",
      image: "bg-muted"
    },
    {
      id: 4,
      title: "React Server Components: A Deep Dive",
      excerpt: "Understanding the architecture and benefits of React Server Components in Next.js applications.",
      author: "Lisa Johnson",
      date: "Jan 5, 2024",
      readTime: "10 min",
      category: "Engineering",
      image: "bg-muted"
    }
  ];

  const tags = ["Design", "Development", "UI/UX", "Accessibility", "React", "CSS", "TypeScript"];

  return (
    <div className="min-h-full bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto h-14 flex items-center justify-between px-4">
          <h1 className="font-semibold text-lg">The Gradient Blog</h1>
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search..."
                className="pl-9 pr-4 py-2 rounded-full border border-border/50 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-48"
              />
            </div>
            <Button variant="outline" size="sm" className="text-xs">
              Subscribe
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Featured Article */}
        <article className="mb-12 sm:mb-16">
          <div className={cn("h-48 sm:h-80 rounded-2xl mb-6 overflow-hidden", featuredPost.image)}>
            <div className="h-full w-full bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
              <Badge variant="glass" className="text-xs">{featuredPost.category}</Badge>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight">
            {featuredPost.title}
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-4">
            {featuredPost.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-primary/20 text-xs">
                  {featuredPost.author.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{featuredPost.author}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="gap-1 text-xs hidden sm:flex">
              Read More <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 sm:mb-12">
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Tag className="h-4 w-4" /> Popular:
          </span>
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary/10 text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Recent Articles */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Recent Articles</h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="border-border/50 cursor-pointer hover:shadow-lg transition-shadow group">
                <CardContent className="p-4 sm:p-5">
                  <div className={cn("h-32 sm:h-40 rounded-lg mb-4", post.image)} />
                  <Badge variant="glass" className="mb-2 text-[10px]">
                    {post.category}
                  </Badge>
                  <h4 className="font-semibold text-sm sm:text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-12">
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="default" size="sm" className="h-8 w-8 p-0 text-xs">1</Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-xs">2</Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-xs">3</Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  );
}
