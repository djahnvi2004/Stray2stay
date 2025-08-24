import { Heart, MapPin, Calendar, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PetsSection() {
  const pets = [
    {
      id: 1,
      name: "Buddy",
      breed: "Golden Retriever Mix",
      age: "3 years",
      location: "Downtown Animal Shelter",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      vaccinated: true,
      neutered: true,
      description: "Friendly and energetic, loves playing fetch and cuddles."
    },
    {
      id: 2,
      name: "Luna",
      breed: "Border Collie",
      age: "2 years",
      location: "Happy Tails Rescue",
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      vaccinated: true,
      neutered: true,
      description: "Intelligent and loyal, perfect for an active family."
    },
    {
      id: 3,
      name: "Charlie",
      breed: "Labrador Mix",
      age: "5 years",
      location: "City Animal Care",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      vaccinated: true,
      neutered: false,
      description: "Gentle giant who loves children and other dogs."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Dogs Looking for Homes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These wonderful companions are waiting for their forever families. Each one has been cared for and is ready to bring joy to a loving home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pets.map((pet) => (
            <Card key={pet.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{pet.name}</h3>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
                
                <p className="text-muted-foreground mb-2">{pet.breed}</p>
                
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  {pet.age}
                  <MapPin className="h-4 w-4 ml-4 mr-1" />
                  {pet.location}
                </div>

                <div className="flex gap-2 mb-4">
                  {pet.vaccinated && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <Shield className="h-3 w-3 mr-1" />
                      Vaccinated
                    </Badge>
                  )}
                  {pet.neutered && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Neutered
                    </Badge>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {pet.description}
                </p>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Available Pets
          </Button>
        </div>
      </div>
    </section>
  );
}