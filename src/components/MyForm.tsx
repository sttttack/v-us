import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xjkognrz");

  if (state.succeeded) {
    return (
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            გმადლობთ, თქვენი შეტყობინება მიღებულია!
          </h3>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-8">
        <h3 className="text-2xl font-semibold text-foreground mb-6">
          მიიღეთ კონსულტაცია
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Input
              id="name"
              type="text"
              name="name"
              required
              placeholder="თქვენი სახელი"
            />
            <Input
              id="phone"
              type="tel"
              name="phone"
              required
              placeholder="ტელეფონის ნომერი"
            />
            <Input
              id="email"
              type="email"
              name="email"
              required
              placeholder="ელ-ფოსტა"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="რით შეგვიძლია დაგეხმაროთ?"
              className="min-h-32"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <Button
            type="submit"
            disabled={state.submitting}
            className="w-full"
            size="lg"
          >
            გაგზავნა
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default ContactForm;
