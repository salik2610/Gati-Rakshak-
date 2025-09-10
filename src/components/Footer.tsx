import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    modules: [
      { name: "Suraksha - Safety Module", href: "#suraksha" },
      { name: "Pravah - Optimization", href: "#pravah" },
      { name: "Vichaar - Resource Allocation", href: "#vichaar" },
      { name: "Ujwal - Performance Analytics", href: "#ujwal" }
    ],
    government: [
      { name: "Ministry of Railways", href: "#", external: true },
      { name: "Government of India", href: "#", external: true },
      { name: "Digital India Initiative", href: "#", external: true },
      { name: "Railway Board", href: "#", external: true }
    ],
    resources: [
      { name: "Technical Documentation", href: "#" },
      { name: "Implementation Guide", href: "#" },
      { name: "Training Materials", href: "#" },
      { name: "Support Portal", href: "#" }
    ]
  };

  const contactInfo = [,
    { icon: Phone, label: "Helpline", value: "1800-111-139" },
    { icon: MapPin, label: "Address", value: "Railway Board, New Delhi - 110001" }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">GatiRakshak</h3>
                  <p className="text-secondary-foreground/80 text-sm">AI Railway Management</p>
                </div>
              </div>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Making Indian Railways safer and more efficient through practical AI solutions. 
                Developed by railway engineers and data scientists who understand ground realities 
                of operating the world's fourth-largest railway network.
              </p>
            </div>

            <div>
              <Badge className="bg-accent/20 text-accent border-accent/30 mb-3">
                Government Initiative
              </Badge>
              <p className="text-sm text-secondary-foreground/70">
                An official project by the Ministry of Railways, Government of India
              </p>
            </div>
          </div>

          {/* AI Modules */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">AI Modules</h4>
            <ul className="space-y-3">
              {links.modules.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary-foreground/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Government</h4>
            <ul className="space-y-3">
              {links.government.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-white transition-colors text-sm flex items-center gap-1"
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                  >
                    {link.name}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-white">{info.label}</div>
                      <div className="text-sm text-secondary-foreground/80">{info.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <h5 className="text-sm font-medium text-white mb-2">Resources</h5>
              <ul className="space-y-2">
                {links.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-secondary-foreground/80 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-secondary-foreground/70 text-center md:text-left">
              <p>© {currentYear} GatiRakshak - Ministry of Railways, Government of India</p>
              <p className="mt-1">All rights reserved. Built for the digital transformation of Indian Railways.</p>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-secondary-foreground/70">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">RTI</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;