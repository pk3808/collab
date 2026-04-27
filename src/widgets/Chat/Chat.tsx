import { Flag, Info, Send } from "lucide-react";

export const Chat = () => {
  return (
    <div className="flex h-full flex-col border-r border-white/5 bg-black/40 glass-morphism">
      <div className="flex items-center justify-between border-b border-white/5 p-4">
        <h3 className="font-bold text-white">Live Chat</h3>
        <button className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300 transition-colors">
          <Flag className="h-3 w-3" />
          Report User
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex flex-col gap-1 items-start">
          <span className="text-xs text-zinc-500 ml-2">TechMaster</span>
          <div className="rounded-2xl rounded-tl-sm bg-white/10 p-3 text-sm text-white max-w-[80%]">
            Hey! I need a review on my latest React component.
          </div>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <span className="text-xs text-zinc-500 mr-2">You</span>
          <div className="rounded-2xl rounded-tr-sm bg-accent-purple/80 p-3 text-sm text-white max-w-[80%]">
            Sure thing, send the GitHub link! I need a follow on mine.
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start">
          <span className="text-xs text-zinc-500 ml-2">TechMaster</span>
          <div className="rounded-2xl rounded-tl-sm bg-white/10 p-3 text-sm text-white max-w-[80%]">
            https://github.com/techmaster/react-component
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-white/5 bg-black/50">
        <div className="flex items-center gap-2 mb-2 text-xs text-zinc-500">
          <Info className="h-3 w-3 text-accent-cyan" />
          Only whitelisted links (GitHub, YouTube, Twitter) are allowed.
        </div>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Type your message..." 
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-zinc-600 focus:border-accent-purple focus:outline-none"
          />
          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-purple text-white hover:bg-purple-600 transition-colors">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
