import { Header } from "@/widgets/Header/Header";
import { Sidebar } from "@/widgets/Sidebar/Sidebar";
import { RoomGrid } from "@/widgets/RoomGrid/RoomGrid";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="container mx-auto flex flex-1 flex-col gap-8 px-4 pt-24 lg:flex-row">
        <Sidebar />
        <RoomGrid />
      </main>
    </div>
  );
}
