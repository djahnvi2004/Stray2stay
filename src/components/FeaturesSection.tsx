import { Heart, Search, MapPin, Shield, Users, Gift } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function FeaturesSection() {
  const features = [
    {
      icon: Heart,
      title: "Adopt a Stray",
      description: "Browse adoptable dogs with detailed health information and connect directly with shelters and rescuers.",
      color: "text-red-500"
    },
    {
      icon: Search,
      title: "Lost & Found",
      description: "Report missing pets or search for lost animals in your area. Help reunite families with their beloved companions.",
      color: "text-blue-500"
    },
    {
      icon: MapPin,
      title: "Local Network",
      description: "Connect with shelters, rescue organizations, and caring individuals in your community.",
      color: "text-green-500"
    },
    {
      icon: Shield,
      title: "Health Records",
      description: "Access comprehensive health information, vaccination records, and medical care details for each pet.",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "Success Stories",
      description: "Share and celebrate successful adoptions and reunions that inspire others to help.",
      color: "text-orange-500"
    },
    {
      icon: Gift,
      title: "Support Care",
      description: "Make optional donations to help cover medical expenses and care for animals in need.",
      color: "text-pink-500"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How Stray2Stay Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform brings together everyone who cares about animal welfare, creating a compassionate community dedicated to helping every dog find safety and love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary rounded-full p-3 mr-4">
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}