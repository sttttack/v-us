import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

import MyForm from "./MyForm";
import Imap from "./Imap";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            მიიღეთ კონსულტაცია უფასოდ!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            მიიღე უფასო კონსულტაცია დღესვე და გადადგი პირველი ნაბიჯი ამერიკის
            ვიზის მისაღებად.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="w-full"
          >
            <MyForm />
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="flex flex-col justify-between h-full space-y-8 w-full"
          >
            {/* Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                საკონტაქტო ინფორმაცია
              </h3>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    დაგვიკავშირდით
                  </h4>
                  <p className="text-muted-foreground">+995 591 06 77 00</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">ელ-ფოსტა</h4>
                  <p className="text-muted-foreground">info@usvisa.ge</p>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-full h-64 overflow-hidden rounded-md"
            >
              <Imap />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
