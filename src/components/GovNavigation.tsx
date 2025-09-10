import { useState, useEffect } from "react";
import { Menu, X, Shield, TrendingUp, Zap, BarChart3, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const GovNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Suraksha", href: "#suraksha", icon: Shield, desc: "Safety Module" },
    { name: "Sanchaar", href: "#sanchaar", icon: TrendingUp, desc: "Optimization" },
    { name: "Vichaar", href: "#vichaar", icon: Zap, desc: "Resource Allocation" },
    { name: "Ujwal", href: "#ujwal", icon: BarChart3, desc: "Analytics" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Government Header Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="font-medium">Ministry of Railways</span>
            <span className="text-secondary-foreground/70">|</span>
            <span className="text-secondary-foreground/90">Government of India</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-border" 
          : "bg-white border-b border-border/50"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Government Logo & Branding */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="Gati Rakshak logo"
                  className="w-16 h-16 object-contain rounded-lg border-2 border-primary/20 shadow-lg"
                />
                <div className="border-l-2 border-border pl-4">
                  <h1 className="text-2xl font-rajdhani font-bold text-secondary gov-gradient-text">
                  गति Rakshak
                  </h1>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                    AI Railway Management System
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Button
                variant="ghost"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-all"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Button>

              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-all group"
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div>{item.name}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  </Button>
                );
              })}

              {/* Removed More dropdown */}
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-border bg-white/95 backdrop-blur-lg">
              <div className="px-4 py-6 space-y-3">
                <Button
                  variant="ghost"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                  className="w-full justify-start text-left"
                >
                  <Home className="w-4 h-4 mr-3" />
                  <span>Home</span>
                </Button>
                
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.name}
                      variant="ghost"
                      onClick={() => scrollToSection(item.href)}
                      className="w-full justify-start text-left py-3"
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.desc}</div>
                      </div>
                    </Button>
                  );
                })}
                
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default GovNavigation;