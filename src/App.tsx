import { AuthProvider } from "./contexts/AuthContext";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { PetsSection } from "./components/PetsSection";
import { CallToActionSection } from "./components/CallToActionSection";

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <PetsSection />
          <CallToActionSection />
        </main>
        <footer className="bg-secondary/30 py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-2xl">🐕</span>
              <span className="text-xl font-semibold text-primary">Stray2Stay</span>
            </div>
            <p className="text-muted-foreground">
              Connecting communities to help every dog find their forever home.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              © 2025 Stray2Stay. Made with ❤️ for all the good dogs.
            </p>
          </div>
        </footer>
      </div>
    </AuthProvider>
  );
}