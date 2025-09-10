import { Shield, TrendingUp, Zap, BarChart3, Eye, Brain, Route, Signal } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import controlRoomImage from "@/assets/railway-control-room.jpg";
import ujwalBg from "@/assets/ujwal-bg.jpg";
import tracksImage from "@/assets/railway-tracks.jpg";
import stationImage from "@/assets/train-station.jpg";

const ModulesSection = () => {
  const modules = [
    {
      id: "suraksha",
      title: "Suraksha",
      subtitle: "The Safety Module",
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-50",
      image: tracksImage,
      description: "This is our most critical module. Suraksha continuously monitors every train's position using GPS and track sensors within a 5-kilometer radius. When two trains approach each other on the same track, the system immediately sends visual and audio alerts to both drivers and the control room. In emergency situations, it can automatically apply brakes. The computer vision system analyzes footage from train-mounted cameras to spot track defects, fallen trees, or any obstacles, instantly alerting maintenance teams with exact GPS coordinates.",
      features: [
        {
          icon: Eye,
          title: "Collision Prevention Technology",
          desc: "Real-time tracking of all trains within 5km radius. Automatic emergency braking when collision risk detected. Works even during heavy fog, night time, or signal failures."
        },
        {
          icon: Brain,
          title: "Smart Track Monitoring", 
          desc: "Cameras on locomotives scan tracks continuously. AI identifies broken rails, loose fishplates, boulder falls, or vegetation overgrowth. Maintenance teams get instant alerts with exact kilometer post locations."
        }
      ],
      stats: [
        { label: "Monitoring Radius", value: "5 KM" },
        { label: "Response Time", value: "< 1 Sec" },
        { label: "Accuracy Rate", value: "99.8%" }
      ]
    },
    {
      id: "pravah",
      title: "Sanchaar", 
      subtitle: "The Optimization Module",
      icon: TrendingUp,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      image: controlRoomImage,
      description: "Sanchaar handles the complex task of managing train traffic across India's busy railway network. When multiple trains need to use the same track section, the system automatically prioritizes based on train importance - Rajdhani and Shatabdi get priority over goods trains. The 'What-If' simulation feature is particularly useful - controllers can test different scenarios like 'What happens if I hold this goods train for 10 minutes?' and see the ripple effect across the entire zone before making the actual decision.",
      features: [
        {
          icon: Route,
          title: "Intelligent Train Priority System",
          desc: "Automatically resolves conflicts between Express, Passenger, and Freight trains. Considers train importance, passenger load, and perishable cargo. Reduces overall network delays by up to 40%."
        },
        {
          icon: Brain,
          title: "Real-Time Impact Simulation",
          desc: "Controllers can test 'what-if' scenarios on a virtual network map. See how delaying one train affects 20 others downstream. Make informed decisions based on predicted outcomes before implementation."
        }
      ],
      stats: [
        { label: "Efficiency Gain", value: "35%" },
        { label: "Delay Reduction", value: "40%" },
        { label: "Network Coverage", value: "100%" }
      ]
    },
    {
      id: "vichaar",
      title: "Vichaar",
      subtitle: "The Smart Resource Allocator", 
      icon: Zap,
      color: "text-green-600",
      bgColor: "bg-green-50",
      image: stationImage,
      description: "Vichaar solves the age-old problem of trains waiting outside stations for platform allocation. Using historical data and current occupancy, it predicts exactly when each platform will be free and assigns incoming trains accordingly. The 'Green Wave' feature is our innovation - signals are timed perfectly so trains get continuous green signals from outer to platform, saving fuel and time. No more jerky stop-and-go movements in station approaches.",
      features: [
        {
          icon: Signal,
          title: "Smart Platform Management",
          desc: "Predicts platform vacancy 15-20 minutes in advance. Assigns platforms based on train type, cleaning requirements, and passenger flow patterns. Eliminates congestion outside major stations."
        },
        {
          icon: Route,
          title: "Green Wave Signal Coordination",
          desc: "Synchronizes all signals from outer signal to platform. Trains maintain steady speed without stopping. Saves 15-20% fuel consumption and reduces passenger discomfort from frequent braking."
        }
      ],
      stats: [
        { label: "Platform Efficiency", value: "90%" },
        { label: "Energy Savings", value: "25%" },
        { label: "Time Optimization", value: "30%" }
      ]
    },
    {
      id: "ujwal", 
      title: "Ujwal",
      subtitle: "The Performance Analytics Module",
      icon: BarChart3,
      color: "text-purple-600",
      bgColor: "bg-purple-50", 
      image: ,
      description: "Ujwal is the analytics powerhouse that processes over 10 lakh data points every hour from across the network. Railway Board members can see live punctuality rates, average delays per route, and track utilization in real-time. Every recommendation made by AI and every decision taken by human controllers is logged with timestamps for complete transparency and accountability. Monthly performance reports show exactly how the system is improving railway operations.",
      features: [
        {
          icon: BarChart3,
          title: "Live Railway Dashboard",
          desc: "Real-time punctuality percentage, delay analysis by route and cause, track section utilization rates. Zone-wise performance comparison. Automatic alerts when performance drops below thresholds."
        },
        {
          icon: Brain,
          title: "Complete Decision Audit System",
          desc: "Every AI suggestion and controller action logged with timestamp and reasoning. Monthly trend analysis shows improvement patterns. Helps identify training needs and system optimization opportunities."
        }
      ],
      stats: [
        { label: "Data Points", value: "1M+/Hr" },
        { label: "Report Generation", value: "Real-time" },
        { label: "Historical Analysis", value: "10+ Years" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            AI-Powered Modules
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Four Pillars of <span className="gradient-text">Railway Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI modules designed to transform Indian Railways through safety, 
            optimization, resource allocation, and performance analytics.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="space-y-20">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={module.id}
                id={module.id}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  !isEven ? "lg:flex-row-reverse" : ""
                } slide-up`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Content */}
                <div className="flex-1 space-y-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${module.bgColor}`}>
                        <Icon className={`w-8 h-8 ${module.color}`} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-foreground">{module.title}</h3>
                        <p className="text-lg text-muted-foreground">{module.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {module.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    {module.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <Card key={featureIndex} className="border-l-4 border-l-primary bg-card/50 hover:shadow-lg transition-all hover-glow">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="p-2 rounded-lg bg-primary/10">
                                <FeatureIcon className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2">{feature.title}</h4>
                                <p className="text-muted-foreground">{feature.desc}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6">
                    {module.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <Card className="overflow-hidden hover:shadow-xl transition-all hover-glow">
                    <div className="relative">
                      <img 
                        src={module.image} 
                        alt={`${module.title} Module`}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-white/90 text-foreground">
                          {module.title} System
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;