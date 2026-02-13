"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  TrendingUp,
  LayoutDashboard,
  Settings,
  Bell,
  Search,
  Download,
  MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardTemplateProps {
  preview?: boolean;
}

export function DashboardTemplate({ preview }: DashboardTemplateProps) {
  const stats = [
    { 
      title: "Total Revenue", 
      value: "$45,231.89", 
      change: "+20.1%", 
      icon: DollarSign,
      trend: "up"
    },
    { 
      title: "Active Users", 
      value: "2,345", 
      change: "+15.2%", 
      icon: Users,
      trend: "up"
    },
    { 
      title: "Sales", 
      value: "+12,234", 
      change: "+8.4%", 
      icon: BarChart3,
      trend: "up"
    },
    { 
      title: "Active Now", 
      value: "573", 
      change: "+201", 
      icon: TrendingUp,
      trend: "up"
    },
  ];

  const recentSales = [
    { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00" },
    { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00" },
    { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00" },
    { name: "William Kim", email: "will@email.com", amount: "+$99.00" },
    { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00" },
  ];

  return (
    <div className="min-h-full bg-background flex">
      {/* Sidebar */}
      <aside className="w-14 sm:w-64 border-r border-border/50 bg-muted/30 flex-shrink-0 hidden sm:flex flex-col">
        <div className="h-14 border-b border-border/50 flex items-center px-4">
          <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <LayoutDashboard className="h-4 w-4 text-primary" />
          </div>
          <span className="ml-3 font-semibold hidden lg:inline">Dashboard</span>
        </div>
        
        <nav className="flex-1 p-3 space-y-1">
          {["Overview", "Analytics", "Customers", "Products", "Settings"].map((item, i) => (
            <Button 
              key={item}
              variant={i === 0 ? "secondary" : "ghost"} 
              className="w-full justify-start gap-3 text-xs sm:text-sm h-9"
              size="sm"
            >
              <LayoutDashboard className="h-4 w-4" />
              <span className="hidden sm:inline">{item}</span>
            </Button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Header */}
        <header className="h-14 border-b border-border/50 bg-background/80 backdrop-blur-xl flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md flex-1 hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search..."
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-border/50 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="gap-2 text-xs">
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Export</span>
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">Dashboard</h1>
              <p className="text-sm text-muted-foreground">Welcome back! Here's what's happening.</p>
            </div>
            <Button variant="glow" size="sm" className="w-fit text-xs">
              Download Report
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat, i) => (
              <Card key={i} className="border-border/50 bg-background/60">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg sm:text-2xl font-bold">{stat.value}</div>
                  <p className="text-[10px] sm:text-xs text-emerald-500">
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-7 gap-4 sm:gap-6">
            {/* Chart Area */}
            <Card className="lg:col-span-4 border-border/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm sm:text-base">Overview</CardTitle>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                {/* Chart Placeholder */}
                <div className="h-[200px] sm:h-[300px] flex items-end gap-2">
                  {[40, 30, 50, 45, 60, 55, 70, 65, 80, 75, 85, 90].map((h, i) => (
                    <div 
                      key={i}
                      className="flex-1 bg-primary/20 rounded-t-sm relative group"
                      style={{ height: `${h}%` }}
                    >
                      <div 
                        className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-sm transition-all duration-300 group-hover:bg-primary/80"
                        style={{ height: `${h * 0.7}%` }}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Sales */}
            <Card className="lg:col-span-3 border-border/50">
              <CardHeader>
                <CardTitle className="text-sm sm:text-base">Recent Sales</CardTitle>
                <p className="text-xs text-muted-foreground">You made 265 sales this month.</p>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {recentSales.map((sale, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                      {sale.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-medium truncate">{sale.name}</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{sale.email}</p>
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-emerald-500">{sale.amount}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Orders Table */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-sm sm:text-base">Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-2 px-2 text-xs font-medium text-muted-foreground">Order</th>
                      <th className="text-left py-2 px-2 text-xs font-medium text-muted-foreground hidden sm:table-cell">Status</th>
                      <th className="text-left py-2 px-2 text-xs font-medium text-muted-foreground hidden md:table-cell">Date</th>
                      <th className="text-right py-2 px-2 text-xs font-medium text-muted-foreground">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "#3210", status: "Completed", date: "2024-01-15", amount: "$42.50" },
                      { id: "#3209", status: "Pending", date: "2024-01-14", amount: "$125.00" },
                      { id: "#3208", status: "Processing", date: "2024-01-14", amount: "$75.25" },
                      { id: "#3207", status: "Completed", date: "2024-01-13", amount: "$32.00" },
                    ].map((order, i) => (
                      <tr key={i} className="border-b border-border/50 last:border-0">
                        <td className="py-3 px-2 text-xs sm:text-sm">{order.id}</td>
                        <td className="py-3 px-2 hidden sm:table-cell">
                          <Badge 
                            variant={order.status === "Completed" ? "default" : order.status === "Pending" ? "glass" : "outline"}
                            className="text-[10px]"
                          >
                            {order.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-2 text-xs text-muted-foreground hidden md:table-cell">{order.date}</td>
                        <td className="py-3 px-2 text-xs sm:text-sm text-right font-medium">{order.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
