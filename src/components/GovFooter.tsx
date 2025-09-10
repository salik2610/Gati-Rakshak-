import { Mail, Phone, MapPin, ExternalLink, FileText, Users, Shield, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const GovFooter = () => {
  const currentYear = new Date().getFullYear();

  const governmentLinks = [
    { name: "Ministry of Railways", href: "https://www.indianrailways.gov.in", external: true },
    { name: "Government of India", href: "https://www.india.gov.in", external: true },
    { name: "Digital India Portal", href: "https://digitalindia.gov.in", external: true }
  ];

  const modules = [
    { name: "Suraksha - Safety Management", href: "https://ujwal-rho.vercel.app/", external: true },
    { name: "Sanchaar - Traffic Optimization", href: "https://ujwal-rho.vercel.app/", external: true },
    { name: "Vichaar - Resource Allocation", href: "https://ujwal-rho.vercel.app/", external: true },
    { name: "Ujwal - Performance Analytics", href: "https://ujwal-rho.vercel.app/", external: true }
  ];


  const legalLinks = [
    { name: "Right to Information (RTI)", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Accessibility Statement", href: "#" },
    { name: "Sitemap", href: "#" }
  ];

  const contactInfo = [
    { 
      icon: Phone, 
      label: "Helpline", 
      value: "139 (Railway Enquiry)",
      desc: "24x7 Support Available"
    },
    { 
      icon: MapPin, 
      label: "Address", 
      value: "Railway Board, Rail Bhavan, New Delhi - 110001",
      desc: "Ministry of Railways Office"
    }
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
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="py-16">
          
          {/* Government Header */}
          <div className="border-b border-secondary-foreground/20 pb-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Brand & Official Seal */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <img
                    src="/logo.png"
                    alt="Gati Rakshak logo"
                    className="w-20 h-20 object-contain rounded-lg border-2 border-primary/20"
                  />
                  <div>
                    <h3 className="text-3xl font-rajdhani font-bold text-white">गति Rakshak</h3>
                    <p className="text-secondary-foreground/80 text-sm font-medium">
                      AI Railway Management System
                    </p>
                    <p className="text-secondary-foreground/60 text-xs mt-1">
                      Government of India Initiative
                    </p>
                  </div>
                </div>

                <p className="text-secondary-foreground/80 leading-relaxed max-w-md">
                  Making Indian Railways safer and more efficient through practical AI solutions. 
                  Developed by railway engineers and data scientists who understand ground realities 
                  of operating the world's fourth-largest railway network.
                </p>
              </div>

              {/* Official Emblem & Authority */}
              <div className="flex justify-center md:justify-end">
                <div className="text-center p-8 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <img
                      src="/India%20logo.svg"
                      alt="Government of India Logo"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <h4 className="text-lg font-rajdhani font-bold text-white mb-1">
                    Government of India
                  </h4>
                  <p className="text-sm text-secondary-foreground/80 mb-2">Ministry of Railways</p>
                  <p className="text-xs text-secondary-foreground/60">
                    Established under Railway Modernization Act
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            
            {/* AI Modules */}
            <div>
              <h4 className="text-lg font-rajdhani font-semibold text-white mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary" />
                AI Modules
              </h4>
              <ul className="space-y-3">
                {modules.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-secondary-foreground/80 hover:text-white transition-colors text-sm flex items-center group"
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                    >
                      <span className="w-1 h-1 bg-accent rounded-full mr-3 group-hover:bg-primary transition-colors" />
                      {link.name}
                      {link.external && <ExternalLink className="w-3 h-3 ml-1 opacity-60" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Government Links */}
            <div>
              <h4 className="text-lg font-rajdhani font-semibold text-white mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-accent" />
                Government Portals
              </h4>
              <ul className="space-y-3">
                {governmentLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-secondary-foreground/80 hover:text-white transition-colors text-sm flex items-center group"
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                    >
                      <span className="w-1 h-1 bg-accent rounded-full mr-3 group-hover:bg-primary transition-colors" />
                      {link.name}
                      {link.external && <ExternalLink className="w-3 h-3 ml-1 opacity-60" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>


            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-rajdhani font-semibold text-white mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                Contact Information
              </h4>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-medium text-white">{info.label}</span>
                      </div>
                      <div className="text-sm text-secondary-foreground/80 ml-6">
                        {info.value}
                      </div>
                      <div className="text-xs text-secondary-foreground/60 ml-6">
                        {info.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-foreground/20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="text-sm text-secondary-foreground/70 text-center lg:text-left">
              <p className="font-medium">© {currentYear} गति Rakshak - Ministry of Railways, Government of India</p>
              <p className="mt-1 text-xs">
                All rights reserved. This is an official website of the Government of India.
              </p>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-foreground/70">
              {legalLinks.map((link, index) => (
                <span key={link.name} className="flex items-center">
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="mx-2 text-secondary-foreground/40">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Government Disclaimer */}
          <div className="mt-6 pt-6 border-t border-secondary-foreground/10">
            <div className="text-xs text-secondary-foreground/60 text-center leading-relaxed">
              <p>
                This website belongs to the Government of India and is maintained by the Ministry of Railways. 
                The content on this website is for information purposes only and should not be construed as legal advice.
              </p>
              <p className="mt-2">
                Best viewed in Firefox, Chrome, Safari browsers with resolution 1024x768 or higher.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GovFooter;