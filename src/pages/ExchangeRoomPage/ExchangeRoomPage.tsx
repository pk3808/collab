import { Header } from "@/widgets/Header/Header";
import { Chat } from "@/widgets/Chat/Chat";
import { FeaturedContent } from "@/widgets/FeaturedContent/FeaturedContent";
import { Timer } from "@/entities/Room/ui/Timer/Timer";

export default function ExchangeRoomPage() {
  return (
    <div className="flex h-screen flex-col bg-background overflow-hidden">
      <Header />
      
      <main className="flex flex-1 pt-16 overflow-hidden">
        {/* Left Side: Chat (35%) */}
        <div className="w-[35%] h-full">
          <Chat />
        </div>

        {/* Right Side: Featured Content (65%) */}
        <div className="flex-1 h-full bg-zinc-950">
          <FeaturedContent />
        </div>
      </main>

      {/* Persistent Footer Timer */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <Timer initialSeconds={60} />
      </div>
    </div>
  );
}
