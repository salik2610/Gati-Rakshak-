import { Shield, TrendingUp, Zap, BarChart3, Eye, Brain, Route, Signal, CheckCircle, ArrowRight, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/modern-train-hero.jpg";
import ujwalBg from "@/assets/Ujjwal-bg.jpg";
import controlRoomImage from "@/assets/railway-control-room.jpg";
import tracksImage from "@/assets/railway-tracks.jpg";
import stationImage from "@/assets/train-station.jpg";

const GovModulesSection = () => {
  // Add external links for each module
  const modules = [
    {
      id: "suraksha",
      title: "Suraksha",
      subtitle: "Advanced Safety Management",
      icon: Shield,
      color: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100",
      image: tracksImage,
      description: "Real-time collision prevention and track monitoring system that uses AI to prevent accidents before they occur.",
      keyFeatures: [
        "5KM radius collision detection",
        "Computer vision track analysis", 
        "Automatic emergency braking",
        "Real-time alert systems"
      ],
      stats: { value: "99.8%", label: "Safety Rate" },
      benefits: "Prevents train collisions through continuous monitoring of train positions and track conditions using advanced AI algorithms.",
      link: "https://suraksha-three.vercel.app/"
    },
    {
      id: "sanchaar", 
      title: "Sanchaar",
      subtitle: "Traffic Flow Optimization",
      icon: TrendingUp,
      color: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100", 
      image: controlRoomImage,
      description: "Intelligent scheduling system that optimizes train flow and reduces delays through predictive traffic management.",
      keyFeatures: [
        "Dynamic train scheduling",
        "Priority-based routing", 
        "Network impact analysis"
      ],
      stats: { value: "35%", label: "Efficiency Gain" },
      benefits: "Improves punctuality and reduces delays by intelligently managing train schedules and resolving traffic conflicts.",
      link: "https://sanchaar-hb83.vercel.app/"
    },
    {
      id: "vichaar",
      title: "Vichaar", 
      subtitle: "Resource Allocation Engine",
      icon: Zap,
      color: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      image: stationImage,
      description: "Smart platform and resource management system that optimizes station operations and signal coordination.",
      keyFeatures: [
        "Predictive platform allocation",
        "Green wave signal timing",
        "Resource optimization",
        "Congestion management"
      ],
      stats: { value: "40%", label: "Resource Efficiency" },
      benefits: "Maximizes platform utilization and reduces waiting times through predictive allocation and intelligent signal coordination.",
      link: "https://vichaar-six.vercel.app/"
    },
    {
      id: "ujwal",
      title: "Ujwal",
      subtitle: "Analytics & Insights Dashboard", 
      icon: BarChart3,
      color: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      image: ujwalBg,
      description: "Comprehensive analytics platform providing real-time insights and performance monitoring for data-driven decisions.",
      keyFeatures: [
        "Real-time KPI dashboard",
        "Performance analytics",
        "Decision audit trails",
        "Predictive reporting"
      ],
      stats: { value: "24/7", label: "Monitoring" },
      benefits: "Provides comprehensive insights into network performance with real-time analytics and predictive trend analysis.",
      link: "https://ujwal-rho.vercel.app/"
    }
  ];

  return (
    <section id="modules" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20 gov-fade-in">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-3 text-base font-semibold mb-8">
            <Shield className="w-5 h-5 mr-2" />
            AI-Powered Railway Modules
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-rajdhani font-bold text-secondary mb-6">
            Four Intelligent Systems
          </h2>
          
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8" />
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Each module is designed to address specific operational challenges in railway management, 
            working together to create a comprehensive intelligent transportation system.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {modules.map((module, index) => {
            const Icon = module.icon;
            
            return (
              <Card 
                key={module.id}
                id={module.id}
                className="group relative overflow-hidden border-2 border-border gov-hover-lift bg-gradient-to-br from-card to-muted/30"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <img 
                    src={module.image} 
                    alt={module.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${module.bgGradient} opacity-50 group-hover:opacity-30 transition-opacity duration-500`} />
                
                <CardContent className="relative z-10 p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${module.color} text-white shadow-lg`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-rajdhani font-bold text-secondary">
                          {module.title}
                        </h3>
                        <p className="text-muted-foreground font-medium">
                          {module.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    {/* Stats Badge */}
                    <div className="text-right">
                      <div className="text-2xl font-rajdhani font-bold text-secondary">
                        {module.stats.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {module.stats.label}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {module.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-secondary mb-4 font-rajdhani">
                      Key Capabilities
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {module.keyFeatures.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${module.color}`} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground italic">
                      "{module.benefits}"
                    </p>
                  </div>

                  {/* Action Button */}
                  <a
                    href={module.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-input bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-300 rounded-md font-medium group"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Explore {module.title} System
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Integration Overview */}
        <div className="gov-slide-up">
          <Card className="bg-gradient-to-r from-secondary/5 to-primary/5 border-2 border-primary/20 shadow-xl">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-4">
                  {modules.map((module, index) => {
                    const Icon = module.icon;
                    return (
                      <div key={module.id} className="flex items-center">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${module.color} text-white`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        {index < modules.length - 1 && (
                          <ArrowRight className="w-5 h-5 mx-3 text-muted-foreground" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-rajdhani font-bold text-secondary mb-6">
                Integrated Intelligence Network
              </h3>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
                All four modules work together seamlessly, sharing real-time data and insights to create 
                a unified intelligent railway management ecosystem that responds instantly to changing conditions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Real-time Integration
                </Badge>
                <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Unified Dashboard
                </Badge>
                <Badge className="bg-secondary/10 text-secondary border-secondary/20 px-4 py-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Cross-module Analytics
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GovModulesSection;