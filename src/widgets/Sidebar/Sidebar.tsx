import { KarmaScore } from "@/entities/User/ui/KarmaScore";
import { Card } from "@/shared/ui/Card";

const recentCollabs = [
  { id: 1, name: "Alex.dev", action: "Code Review", time: "2h ago" },
  { id: 2, name: "SarahCreates", action: "Video Edit", time: "5h ago" },
  { id: 3, name: "TechNinja", action: "SEO Audit", time: "1d ago" },
];

export const Sidebar = () => {
  return (
    <aside className="flex w-full flex-col gap-6 lg:w-80 flex-shrink-0">
      <KarmaScore score={1250} rank="Gold Tier" />
      
      <Card className="p-6">
        <h3 className="mb-4 text-lg font-bold text-foreground">Recent Collabs</h3>
        <div className="flex flex-col gap-4">
          {recentCollabs.map((collab) => (
            <div key={collab.id} className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3 last:border-0 last:pb-0">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-raised border border-stone-200 dark:border-stone-800 text-xs font-bold text-stone-600 dark:text-stone-400">
                  {collab.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{collab.name}</span>
                  <span className="text-xs text-zinc-500">{collab.action}</span>
                </div>
              </div>
              <span className="text-xs text-zinc-400 dark:text-zinc-600">{collab.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </aside>
  );
};
