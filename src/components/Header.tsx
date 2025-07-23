import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="/">
            <img src={logo} alt="Logo" className="h-14 w-auto" />
          </a>
        </div>
        <Button>
          <a
            href="https://calendly.com/info-usvisa-ge/visa-consultation"
            target="_blank"
          >
            კონსულტაციის მიღება
          </a>
        </Button>
      </div>
    </header>
  );
};
