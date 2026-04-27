import { Header } from "@/widgets/Header/Header";
import { Hero } from "@/widgets/Hero/Hero";
import { Features } from "@/widgets/Features/Features";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <Features />
      <footer className="container mx-auto px-4 py-12 text-center text-zinc-600">
        © 2024 CreatorHub. Built for the community.
      </footer>
    </div>
  );
}
