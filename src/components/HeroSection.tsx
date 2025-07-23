import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/visa-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional visa application services"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              თქვენი სანდო სავიზო მომსახურება
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            თქვენი გზა
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}
              ამერიკის ვიზის მოსაპოვებლად
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            გაიარეთ კონსულტაცია დღესვე! მიიღეთ ინფორმაცია, თუ როგორ მოიპოვოთ
            ამერიკის ვიზა და ამ ყველაფერში ჩვენ დაგეხმარებით.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="default" size="lg" className="text-lg">
              პროცესის დაწყება
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="default" size="lg" className="text-lg">
              <a
                href="https://calendly.com/info-usvisa-ge/visa-consultation"
                target="_blank"
              >
                კონსულტაციის მიღება
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-primary mr-2" />
              სწრაფი მომსახურება
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-primary mr-2" />
              თქენზე მორგებული სერვისი
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-primary mr-2" />
              სასურველ დროს ვიტიზიტის ჩანიჩვნა
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
