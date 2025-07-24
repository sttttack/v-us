import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/visa-hero.jpg";
import { motion } from "framer-motion";

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
        <div className="max-w-3xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              თქვენი სანდო სავიზო მომსახურება
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3 }}
          >
            თქვენი გზა
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}
              ამერიკის ვიზის მოსაპოვებლად
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6 }}
          >
            გაიარეთ კონსულტაცია დღესვე! მიიღეთ ინფორმაცია, თუ როგორ მოიპოვოთ
            ამერიკის ვიზა და ამ ყველაფერში ჩვენ დაგეხმარებით.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.9 }}
          >
            <Button variant="default" size="lg" className="text-lg">
              პროცესის დაწყება
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="default" size="lg" className="text-lg">
              <a
                href="https://calendly.com/info-usvisa-ge/visa-consultation"
                target="_blank"
                rel="noopener noreferrer"
              >
                კონსულტაციის მიღება
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center gap-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
          >
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
              სასურველ დროს ვიზიტის ჩანიშვნა
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
