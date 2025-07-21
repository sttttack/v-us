import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Clock,
  Users,
  Award,
  FileCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "სასურველი ვიზის კატეგორია",
    description:
      "Our proven track record speaks for itself with thousands of approved applications.",
  },
  {
    icon: Clock,
    title: "აპლიკაციის შევსება",
    description:
      "Streamlined process that saves you time while ensuring accuracy and compliance.",
  },
  {
    icon: Users,
    title: "სავიზო მოსაკრებლის გადახდა",
    description:
      "Immigration attorneys and specialists with decades of combined experience.",
  },
  {
    icon: Award,
    title: "სათანადო დოკუმენტაციის შეგროვება",
    description:
      "Over 10,000 satisfied clients who achieved their American dream with our help.",
  },
  {
    icon: Headphones,
    title: "ინტერვიუსთვის მომზადება",
    description:
      "Dedicated support team available to answer your questions throughout the process.",
  },
  {
    icon: FileCheck,
    title: "ვიზიტის ჩანიშვნა საელჩოში",
    description:
      "We handle all paperwork, forms, and supporting documents for your application.",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            რატომ ჩვენ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ჩვენ გაგიმარტივებთ კომპლექსურ პროცესს ამერიკის ვიზის მოსაპოვებლად!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={feature.title}
                className="text-center border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
