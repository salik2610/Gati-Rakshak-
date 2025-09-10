import { ArrowRight, Shield, Zap, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/modern-train-hero.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Shield, label: "Safety", value: "99.8%", desc: "Accident Prevention" },
    { icon: TrendingUp, label: "Efficiency", value: "35%", desc: "Improved Punctuality" },
    { icon: Zap, label: "Speed", value: "Real-time", desc: "Decision Making" },
    { icon: BarChart3, label: "Analytics", value: "24/7", desc: "Monitoring" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern Indian Railways Train"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="fade-in">
          {/* Government Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-white/90 text-sm font-medium">Government of India Initiative</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">गति Rakshak</span>
            <span className="block text-3xl md:text-4xl font-normal opacity-90 mt-2">
              AI-Powered Rail Management System
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            India's first comprehensive AI solution for railway operations. Four integrated modules working together 
            to prevent accidents, optimize train schedules, allocate resources efficiently, and provide real-time insights 
            for better decision making across our 68,000 km network.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-secondary hover:bg-white/90 font-semibold px-8 py-6 text-lg hover-glow"
            >
              Explore Modules <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
            >
              View Demo
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className={`bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center hover-glow slide-up`} style={{animationDelay: `${index * 0.1}s`}}>
                  <Icon className="w-8 h-8 text-white mx-auto mb-3 float" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/80 font-medium mb-1">{stat.label}</div>
                  <div className="text-sm text-white/60">{stat.desc}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L50 110C100 100 200 80 300 70C400 60 500 60 600 70C700 80 800 100 900 100C1000 100 1100 80 1150 70L1200 60V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;