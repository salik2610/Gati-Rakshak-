import { ArrowRight, Shield, Zap, TrendingUp, BarChart3, CheckCircle, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/modern-train-hero.jpg";

const GovHeroSection = () => {
  const achievements = [
    { icon: Shield, label: "Safety First", value: "99.8%", desc: "Accident Prevention Rate", color: "text-red-600" },
    { icon: TrendingUp, label: "Efficiency", value: "35%", desc: "Improved Punctuality", color: "text-blue-600" },
    { icon: Zap, label: "Real-time", value: "5-7 Sec", desc: "Decision Speed", color: "text-green-600" },
    { icon: BarChart3, label: "Analytics", value: "24/7", desc: "Network Monitoring", color: "text-purple-600" },
  ];


  return (
    <section className="relative bg-gradient-to-br from-muted/30 to-background min-h-screen flex items-center">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='37' cy='37' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-0 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Column */}
          <div className="space-y-8 gov-fade-in">
            
            {/* Government Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 font-medium">
                <Award className="w-4 h-4 mr-2" />
                Government of India Initiative
              </Badge>
              <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2 font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                Ministry of Railways
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-rajdhani font-bold text-secondary leading-tight">
                <span className="block">गति Rakshak</span>
                <span className="block text-3xl lg:text-4xl font-medium text-muted-foreground mt-2">
                  AI-Powered Rail Management System
                </span>
              </h1>
              
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-xl text-muted-foreground leading-relaxed">
                India's first comprehensive AI solution for railway operations, developed by the Government of India 
                to enhance safety, punctuality, and efficiency across our 68,000 km rail network.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Four integrated modules working 24/7 to prevent accidents, optimize schedules, 
                allocate resources efficiently, and provide real-time insights for better decision making.
              </p>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => {
                  const el = document.querySelector('#modules');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg shadow-lg gov-hover-lift"
              >
                <Users className="w-5 h-5 mr-2" />
                Explore Modules 
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Image & Stats Column */}
          <div className="space-y-8 gov-slide-up">
            
            {/* Hero Image Card */}
            <Card className="overflow-hidden border-2 border-border shadow-xl bg-gradient-to-br from-card to-card/50">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Modern Indian Railways Infrastructure"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-white/90 text-secondary mb-3">
                    <Shield className="w-4 h-4 mr-2" />
                    AI-Powered Safety Systems
                  </Badge>
                  <h3 className="text-white font-semibold text-lg">
                    Advanced Rail Management Technology
                  </h3>
                  <p className="text-white/80 text-sm">
                    Protecting 1.3 billion passengers across India's railway network
                  </p>
                </div>
              </div>
            </Card>

            {/* Performance Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card 
                    key={stat.label} 
                    className="gov-hover-lift border-border bg-gradient-to-br from-card to-muted/50"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <CardContent className="p-6 text-center space-y-3">
                      <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div className="space-y-1">
                        <div className="text-2xl font-rajdhani font-bold text-secondary">
                          {stat.value}
                        </div>
                        <div className="font-medium text-sm text-foreground">{stat.label}</div>
                        <div className="text-xs text-muted-foreground">{stat.desc}</div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovHeroSection;