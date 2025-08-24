import { Heart, Search, PlusCircle } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Every Stray Deserves a 
              <span className="text-primary"> Forever Home</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Connect with your community to help stray dogs find loving families and reunite lost pets with their owners. Together, we can make every tail wag with joy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Heart className="mr-2 h-5 w-5" />
                Adopt a Pet
              </Button>
              <Button size="lg" variant="outline">
                <Search className="mr-2 h-5 w-5" />
                Find Lost Pet
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-accent to-secondary shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Happy rescued dog"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <Heart className="h-6 w-6 text-primary fill-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">1,247 Dogs</p>
                  <p className="text-xs text-muted-foreground">Found homes this year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}