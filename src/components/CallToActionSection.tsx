import { Heart, PlusCircle, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function CallToActionSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Make a Difference Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking to adopt, help a lost pet find home, or support our mission, every action counts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Adopt a Pet</h3>
              <p className="text-muted-foreground mb-6">
                Give a stray dog the loving home they deserve. Browse our available pets and start the adoption process.
              </p>
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                Start Adopting
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Search className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Lost a Pet?</h3>
              <p className="text-muted-foreground mb-6">
                Report your missing pet or search our database to help reunite lost animals with their families.
              </p>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                Search Now
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <PlusCircle className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Post a Pet</h3>
              <p className="text-muted-foreground mb-6">
                Help a stray find a home by posting their information, or report a found pet to help owners locate them.
              </p>
              <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50">
                Post Pet
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join Our Community
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Connect with shelters, volunteers, and fellow animal lovers. Together, we can create a world where every dog has a safe, loving home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Sign Up Today
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}