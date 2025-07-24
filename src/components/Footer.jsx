import { Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left: Text */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} US Visa საქართველო
        </p>

        {/* Right: Social media icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com/usvisa.ge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-blue-500"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://instagram.com/usvisa.ge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-pink-500"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
