import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Award, FileCheck, Headphones } from "lucide-react";

import { FileUser, HandCoins } from "lucide-react";
const features = [
  {
    icon: FileUser,
    title: "სასურველი ვიზის კატეგორია",
    description: "განსაზღვრეთ თქვენთვის სასურველი ვიზის კატეგორია",
  },
  {
    icon: Clock,
    title: "აპლიკაციის შევსება",
    description: "თქვენთან ერთად შევავსებთ DS-160 ფორმას",
  },
  {
    icon: HandCoins,
    title: "სავიზო მოსაკრებლის გადახდა",
    description: "მოსაკრებლის გადახდა ონლაინ მეთოდით ან ბანკში ვიზიტით",
  },
  {
    icon: Award,
    title: "სათანადო დოკუმენტაციის შეგროვება",
    description: "შესაბამისი დოკუმენტაციის მომზადება და შეგროვება",
  },
  {
    icon: Headphones,
    title: "ინტერვიუსთვის მომზადება",
    description: "რჩევები თუ რა უნდა გავითვალისწინოთ ინტერვიუს პროცესის დროს",
  },
  {
    icon: FileCheck,
    title: "ვიზიტის ჩანიშვნა საელჩოში",
    description: "თქვენთვის სასურველ დროს ვიზიტის ჩანიშვნა საელჩოში",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            ჩვენი გუნდი
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            გაგიმარტივებთ კომპლექსურ პროცესს ამერიკის ვიზის მოსაპოვებლად!
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
