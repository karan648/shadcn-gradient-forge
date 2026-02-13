"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Inbox, 
  Send, 
  Archive, 
  Trash2,
  Star,
  MoreVertical,
  Search,
  Plus,
  ChevronLeft,
  Paperclip,
  Reply,
  Forward
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MailTemplateProps {
  preview?: boolean;
}

export function MailTemplate({ preview }: MailTemplateProps) {
  const folders = [
    { name: "Inbox", count: 128, icon: Inbox, active: true },
    { name: "Sent", count: 0, icon: Send, active: false },
    { name: "Drafts", count: 3, icon: Send, active: false },
    { name: "Archive", count: 0, icon: Archive, active: false },
    { name: "Trash", count: 0, icon: Trash2, active: false },
  ];

  const emails = [
    { 
      id: 1, 
      from: "Sarah Chen", 
      subject: "Q4 Marketing Strategy - Review Needed", 
      preview: "Hi team, I've put together the initial draft for our Q4 marketing strategy. Please review...",
      time: "10:30 AM",
      starred: true,
      unread: true
    },
    { 
      id: 2, 
      from: "Alex Rivera", 
      subject: "Design System Update", 
      preview: "The new component library is now ready for testing. I've attached the documentation...",
      time: "9:15 AM",
      starred: false,
      unread: true
    },
    { 
      id: 3, 
      from: "Emily Watson", 
      subject: "Meeting Notes: Product Review", 
      preview: "Here are the notes from today's product review meeting. Key decisions include...",
      time: "Yesterday",
      starred: false,
      unread: false
    },
    { 
      id: 4, 
      from: "Michael Park", 
      subject: "Weekly Analytics Report", 
      preview: "Attached is the weekly analytics report. We've seen a 15% increase in user engagement...",
      time: "Yesterday",
      starred: true,
      unread: false
    },
  ];

  return (
    <div className="min-h-full bg-background flex">
      {/* Sidebar */}
      <aside className="w-14 sm:w-60 border-r border-border/50 bg-muted/30 flex-shrink-0 flex flex-col">
        <div className="h-14 border-b border-border/50 flex items-center justify-center sm:justify-start sm:px-4">
          <Button variant="glow" size="sm" className="w-10 sm:w-auto px-0 sm:px-4 gap-0 sm:gap-2">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline text-xs">Compose</span>
          </Button>
        </div>
        
        <nav className="flex-1 p-2 space-y-1">
          {folders.map((folder) => (
            <Button
              key={folder.name}
              variant={folder.active ? "secondary" : "ghost"}
              size="sm"
              className={cn(
                "w-full justify-center sm:justify-start gap-0 sm:gap-3 h-9 px-2 sm:px-3",
                folder.active && "bg-secondary"
              )}
            >
              <folder.icon className="h-4 w-4" />
              <span className="hidden sm:inline flex-1 text-left text-xs">{folder.name}</span>
              {folder.count > 0 && (
                <span className="hidden sm:inline text-xs text-muted-foreground">
                  {folder.count}
                </span>
              )}
            </Button>
          ))}
        </nav>
      </aside>

      {/* Email List */}
      <div className="w-full sm:w-80 border-r border-border/50 flex-shrink-0 flex flex-col">
        <div className="h-14 border-b border-border/50 flex items-center px-4 gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text"
              placeholder="Search mail..."
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-border/50 bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {emails.map((email) => (
            <div
              key={email.id}
              className={cn(
                "p-3 sm:p-4 border-b border-border/50 cursor-pointer transition-colors hover:bg-muted/30",
                email.unread && "bg-primary/5"
              )}
            >
              <div className="flex items-start gap-3">
                <div className="hidden sm:flex items-center gap-2 pt-0.5">
                  <Checkbox className="h-4 w-4" />
                  <Star 
                    className={cn(
                      "h-4 w-4 cursor-pointer",
                      email.starred ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                    )} 
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className={cn(
                      "text-xs sm:text-sm truncate",
                      email.unread ? "font-semibold" : "font-medium"
                    )}>
                      {email.from}
                    </span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                      {email.time}
                    </span>
                  </div>
                  <div className={cn(
                    "text-xs truncate mt-0.5",
                    email.unread ? "font-medium" : "text-muted-foreground"
                  )}>
                    {email.subject}
                  </div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground truncate mt-0.5">
                    {email.preview}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Email Content */}
      <main className="flex-1 min-w-0 hidden lg:flex flex-col">
        <div className="h-14 border-b border-border/50 flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="gap-2 text-xs">
                <Reply className="h-4 w-4" /> Reply
              </Button>
              <Button variant="ghost" size="sm" className="gap-2 text-xs">
                <Forward className="h-4 w-4" /> Forward
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Archive className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Trash2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
          <div className="max-w-3xl">
            <h1 className="text-lg sm:text-xl font-semibold mb-4">
              Q4 Marketing Strategy - Review Needed
            </h1>
            
            <div className="flex items-start gap-3 mb-6 pb-6 border-b border-border/50">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium">
                SC
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-sm">Sarah Chen</span>
                    <span className="text-xs text-muted-foreground ml-2">&lt;sarah@company.com&gt;</span>
                  </div>
                  <span className="text-xs text-muted-foreground">10:30 AM</span>
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  To: Marketing Team
                </div>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>Hi team,</p>
              <p>
                I've put together the initial draft for our Q4 marketing strategy. 
                This includes our target audience analysis, channel recommendations, 
                and budget allocation.
              </p>
              <p>
                Key highlights include:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Focus on content marketing and SEO</li>
                <li>Increased budget for paid social</li>
                <li>New webinar series starting October</li>
              </ul>
              <p>
                Please review the attached document and let me know your thoughts. 
                I'd like to finalize this by Friday.
              </p>
              <p>Best,<br />Sarah</p>
            </div>

            <div className="mt-6 pt-6 border-t border-border/50">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Paperclip className="h-4 w-4" />
                <span>2 attachments</span>
              </div>
              <div className="flex gap-3 mt-3">
                <Card className="p-3 flex items-center gap-3 cursor-pointer hover:bg-muted/30 transition-colors">
                  <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-medium">PDF</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Q4_Strategy.pdf</p>
                    <p className="text-[10px] text-muted-foreground">2.4 MB</p>
                  </div>
                </Card>
                <Card className="p-3 flex items-center gap-3 cursor-pointer hover:bg-muted/30 transition-colors">
                  <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-medium">XLS</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Budget_2024.xlsx</p>
                    <p className="text-[10px] text-muted-foreground">1.1 MB</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
