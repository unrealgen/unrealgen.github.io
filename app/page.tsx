import Hero from "@/components/hero";
import Features from "@/components/features";
import SignupSection from "@/components/signup-section";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Hero />
      <Features />
      {/* <SignupSection /> */}
      <Footer />
    </main>
  );
}
