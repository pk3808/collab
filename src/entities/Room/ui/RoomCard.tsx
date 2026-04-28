import { Card } from "@/shared/ui/Card";
import { Button } from "@/shared/ui/Button";
import { ArrowRightLeft, Users } from "lucide-react";
import Image from "next/image";

interface RoomCardProps {
  creatorName: string;
  niche: string;
  offering: string;
  seeking: string;
  participants: number;
  avatarUrl: string;
}

export const RoomCard = ({
  creatorName,
  niche,
  offering,
  seeking,
  participants,
  avatarUrl,
}: RoomCardProps) => {
  return (
    <Card className="flex flex-col gap-4 p-6 hover:border-accent-purple/50 dark:hover:border-accent-purple/50 border border-transparent transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full border border-black/10 dark:border-white/10">
            <img src={avatarUrl} alt={creatorName} className="h-full w-full object-cover" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">{creatorName}</h4>
            <span className="text-xs font-medium text-cyan-600 dark:text-accent-cyan uppercase tracking-wider">{niche}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-black/5 dark:bg-white/5 px-2 py-1 text-xs text-zinc-600 dark:text-zinc-400">
          <Users className="h-3 w-3" />
          {participants}/2
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-xl bg-black/5 dark:bg-black/40 p-3 mt-2">
        <div className="flex items-start justify-between">
          <span className="text-xs text-zinc-500">Offering</span>
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 text-right">{offering}</span>
        </div>
        <div className="h-px w-full bg-black/10 dark:bg-white/5" />
        <div className="flex items-start justify-between">
          <span className="text-xs text-zinc-500">Seeking</span>
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 text-right">{seeking}</span>
        </div>
      </div>

      <Button className="mt-2 w-full gap-2 border-black/20 text-black hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10" variant="outline">
        <ArrowRightLeft className="h-4 w-4" />
        Join Room
      </Button>
    </Card>
  );
};
