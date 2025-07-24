import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Plane } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Plane,
    title: "ტურისტული ვიზები",
    description: "ტურისტული და საქმიანი მიზნით მოგზაურობისთვის",
    types: ["B-1", "B-2", "ESTA"],
  },
  {
    icon: GraduationCap,
    title: "სტუდენტური ვიზები",
    description: "სტუდენტური ვიზა",
    types: ["F-1", "M-1", "J-1"],
  },
  {
    icon: Briefcase,
    title: "სამუშაო ვიზები",
    description: "სპეციალისტებისთვის",
    types: ["H-1B", "L-1", "O-1", "TN"],
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            სრული სავიზო მომსახურება
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            შეარჩიეთ თქვენთვის სასურველი სავიზო კატეგორია
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.2 + index * 0.3,
                }}
                className="h-full"
              >
                <Card className="h-full flex flex-col items-center justify-between text-center p-6 border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="mt-auto">
                    <div className="flex flex-wrap justify-center gap-2">
                      {service.types.map((type) => (
                        <Badge
                          key={type}
                          variant="secondary"
                          className="text-xs"
                        >
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
