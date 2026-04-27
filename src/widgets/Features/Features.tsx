import { Card } from "@/shared/ui/Card";
import { Users, Zap, Shield, Trophy } from "lucide-react";

export const Features = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-2">
        <Card className="md:col-span-7 md:row-span-1">
          <Zap className="mb-4 h-12 w-12 text-cyan-400" />
          <h3 className="text-2xl font-bold">Instant Synergy</h3>
          <p className="mt-2 text-zinc-400">
            Join a room, wait 60 seconds, and get instant feedback or growth actions from creators who actually care.
          </p>
        </Card>

        <Card className="md:col-span-5 md:row-span-1 bg-gradient-to-br from-purple-900/20 to-transparent border-purple-500/20">
          <Shield className="mb-4 h-12 w-12 text-purple-400" />
          <h3 className="text-2xl font-bold">Verified Exchanges</h3>
          <p className="mt-2 text-zinc-400">
            Our Karma system ensures everyone plays fair. Low karma? You're out.
          </p>
        </Card>

        <Card className="md:col-span-4 md:row-span-1">
          <Users className="mb-4 h-12 w-12 text-cyan-400" />
          <h3 className="text-2xl font-bold">Niche Communities</h3>
          <p className="mt-2 text-zinc-400">
            Tech, Anime, Fitness - find creators in your specific circle.
          </p>
        </Card>

        <Card className="md:col-span-8 md:row-span-1 flex flex-row items-center gap-8">
          <div className="flex-1">
            <Trophy className="mb-4 h-12 w-12 text-yellow-400" />
            <h3 className="text-2xl font-bold">Grow Your Karma</h3>
            <p className="mt-2 text-zinc-400">
              The more you give, the more you get. Climb the leaderboard and unlock premium networking rooms.
            </p>
          </div>
          <div className="hidden h-32 w-48 rounded-3xl bg-zinc-800/50 sm:block" />
        </Card>
      </div>
    </section>
  );
};
