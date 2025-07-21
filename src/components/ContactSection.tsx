import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import MyForm from "./MyForm";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            მიიღეთ კონსულტაცია უფასოდ!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            მიიღე უფასო კონსულტაცია დღესვე და გადადგი პირველი ნაბიჯი ამერიკის
            ვიზის მისაღებად.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <MyForm />
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                საკონტაქტო ინფორმაცია
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      საკონტაქტო ნომერი
                    </h4>
                    <p className="text-muted-foreground">+995 591 06 77 00</p>
                    <p className="text-sm text-muted-foreground">
                      ორშაბათი - პარასკევი, 10:00 - 18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">ელ-ფოსტა</h4>
                    <p className="text-muted-foreground">info@usvisa.ge</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      ჩვენი ოფისი
                    </h4>
                    <p className="text-muted-foreground">
                      ჭავჭავაძის 21ა, თბილისი, საქართველო
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
