import { Card } from "@/shared/ui/Card";
import { ExternalLink, Star } from "lucide-react";

export const FeaturedContent = () => {
  return (
    <div className="flex h-full flex-col gap-6 p-6">
      {/* Collaborator Profile Snippet */}
      <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4 border border-white/5">
        <div className="flex items-center gap-4">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=TechMaster" 
            alt="Collaborator" 
            className="h-12 w-12 rounded-full border border-white/10"
          />
          <div>
            <h3 className="font-bold text-white">TechMaster</h3>
            <div className="flex items-center gap-1 text-xs text-yellow-400">
              <Star className="h-3 w-3 fill-current" />
              <span>4.9 (120 Collabs)</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xs text-zinc-500">Karma Score</span>
          <span className="font-bold text-accent-cyan">2,450</span>
        </div>
      </div>

      {/* Embed Area */}
      <Card className="flex-1 overflow-hidden p-0 border border-white/10 bg-black/50">
        <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-3">
          <span className="text-sm font-semibold text-zinc-300">Target Content</span>
          <a href="#" className="flex items-center gap-1 text-xs text-accent-purple hover:text-purple-400 transition-colors">
            Open in new tab
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        <div className="flex h-[calc(100%-45px)] items-center justify-center bg-zinc-900">
          {/* Placeholder for an actual embed (iframe) */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="h-24 w-24 rounded-2xl bg-zinc-800 flex items-center justify-center">
              <span className="text-4xl">🐙</span>
            </div>
            <div>
              <h4 className="font-bold text-white">techmaster/react-component</h4>
              <p className="text-sm text-zinc-500">GitHub Repository Preview</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
