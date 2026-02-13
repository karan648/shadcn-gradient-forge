"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  Search, 
  Heart, 
  Star,
  Filter,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

interface EcommerceTemplateProps {
  preview?: boolean;
}

export function EcommerceTemplate({ preview }: EcommerceTemplateProps) {
  const products = [
    { 
      id: 1, 
      name: "Premium Wireless Headphones", 
      price: 299, 
      rating: 4.8, 
      reviews: 128,
      image: "bg-muted",
      badge: "Bestseller"
    },
    { 
      id: 2, 
      name: "Smart Watch Pro", 
      price: 399, 
      rating: 4.9, 
      reviews: 256,
      image: "bg-muted",
      badge: "New"
    },
    { 
      id: 3, 
      name: "Minimalist Backpack", 
      price: 89, 
      rating: 4.7, 
      reviews: 89,
      image: "bg-muted"
    },
    { 
      id: 4, 
      name: "Portable Speaker", 
      price: 149, 
      rating: 4.6, 
      reviews: 167,
      image: "bg-muted"
    },
  ];

  const categories = ["All", "Electronics", "Accessories", "Home", "Lifestyle"];

  return (
    <div className="min-h-full bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <ShoppingCart className="h-4 w-4 text-primary" />
            </div>
            <span className="font-semibold text-sm sm:text-base">Shop</span>
          </div>
          
          <div className="flex-1 max-w-md mx-4 hidden sm:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-border/50 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hidden sm:flex">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="gap-2 text-xs">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Cart (2)</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        {/* Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-6 sm:mb-8 bg-gradient-to-r from-primary/20 to-accent/20 h-48 sm:h-64 flex items-center">
          <div className="absolute inset-0 bg-background/40" />
          <div className="relative z-10 px-6 sm:px-10 max-w-lg">
            <Badge variant="glass" className="mb-3 text-xs">Summer Sale</Badge>
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-3">
              Up to 50% off
            </h1>
            <p className="text-sm text-muted-foreground mb-4">
              Discover amazing deals on premium products
            </p>
            <Button size="sm" variant="glow" className="text-xs">
              Shop Now
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-4 sm:mb-6 scrollbar-hide">
          {categories.map((category, i) => (
            <Button
              key={category}
              variant={i === 0 ? "default" : "outline"}
              size="sm"
              className="whitespace-nowrap text-xs"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-semibold">Featured Products</h2>
          <Button variant="outline" size="sm" className="gap-2 text-xs">
            <Filter className="h-3.5 w-3.5" />
            Filter
            <ChevronDown className="h-3.5 w-3.5" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {products.map((product) => (
            <Card key={product.id} className="border-border/50 group cursor-pointer overflow-hidden">
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <div className={cn("absolute inset-0", product.image)} />
                  {product.badge && (
                    <Badge 
                      variant="default" 
                      className="absolute top-2 left-2 text-[10px]"
                    >
                      {product.badge}
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Info */}
                <div className="p-3 sm:p-4">
                  <h3 className="font-medium text-xs sm:text-sm mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{product.rating}</span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base font-bold">
                      ${product.price}
                    </span>
                    <Button size="sm" variant="glow" className="h-8 text-xs">
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-6 sm:mt-8">
          <Button variant="outline" size="sm" className="text-xs">
            Load More Products
          </Button>
        </div>
      </main>
    </div>
  );
}
