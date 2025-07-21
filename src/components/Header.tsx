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

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            სერვისები
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            ჩვენს შესახებ
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            კონტაქტი
          </a>
        </nav>

        <Button className="md:flex">კონსულტაცია</Button>
      </div>
    </header>
  );
};
