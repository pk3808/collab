import { RoomCard } from "@/entities/Room/ui/RoomCard";
import { Button } from "@/shared/ui/Button";
import { Plus } from "lucide-react";

const dummyRooms = [
  {
    id: 1,
    creatorName: "TechMaster",
    niche: "Tech",
    offering: "Code Review (React)",
    seeking: "GitHub Star & Follow",
    participants: 1,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=TechMaster",
  },
  {
    id: 2,
    creatorName: "AnimeWeeb",
    niche: "Anime",
    offering: "Thumbnail Design",
    seeking: "YouTube Sub + Watch 2m",
    participants: 0,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=AnimeWeeb",
  },
  {
    id: 3,
    creatorName: "FitLife",
    niche: "Fitness",
    offering: "Form Check Video",
    seeking: "Instagram Reel Share",
    participants: 1,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=FitLife",
  },
  {
    id: 4,
    creatorName: "DesignPro",
    niche: "Design",
    offering: "Figma Feedback",
    seeking: "Dribbble Like",
    participants: 1,
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=DesignPro",
  },
];

export const RoomGrid = () => {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4 glass-morphism">
        <h2 className="text-xl font-bold text-white">Active Lobbies</h2>
        <div className="flex gap-4">
          <select className="rounded-xl bg-black/40 border border-white/10 px-4 py-2 text-sm text-white focus:outline-none focus:border-accent-cyan/50">
            <option>All Niches</option>
            <option>Tech</option>
            <option>Anime</option>
            <option>Fitness</option>
          </select>
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            Create Room
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
        {dummyRooms.map((room) => (
          <RoomCard key={room.id} {...room} />
        ))}
      </div>
    </div>
  );
};
