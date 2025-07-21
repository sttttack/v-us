import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  GraduationCap,
  Heart,
  Users,
  Plane,
  Building,
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "სამუშაო ვიზები",
    description:
      "H-1B, L-1, O-1, and other employment-based visas for professionals.",
    types: ["H-1B", "L-1", "O-1", "TN"],
  },
  {
    icon: GraduationCap,
    title: "სტუდენტური ვიზები",
    description: "F-1 and M-1 visas for academic and vocational studies.",
    types: ["F-1", "M-1", "J-1"],
  },
  {
    icon: Heart,
    title: "საოჯახო ვიზები",
    description: "K-1 fiancé, spousal, and family reunification visas.",
    types: ["K-1", "CR-1", "IR-1"],
  },
  {
    icon: Users,
    title: "ტურისტული ვიზები",
    description: "B-1/B-2 visitor visas for business and pleasure travel.",
    types: ["B-1", "B-2", "ESTA"],
  },
  {
    icon: Plane,
    title: "ტრანზიტული ვიზები",
    description: "C-1 and other transit visas for connecting flights.",
    types: ["C-1", "C-1/D"],
  },
  {
    icon: Building,
    title: "საინვესტიციო ვიზები",
    description: "E-1, E-2, and EB-5 visas for investors and entrepreneurs.",
    types: ["E-1", "E-2", "EB-5"],
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            სრული სავიზო მომსახურება
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            შეარჩიეთ თქვენთვის სასურველი სავიზო კატეგორია
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.title}
                className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.types.map((type) => (
                      <Badge key={type} variant="secondary" className="text-xs">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
