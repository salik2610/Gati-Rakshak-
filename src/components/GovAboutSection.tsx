import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, MapPin, Clock, Award, Shield, Target, TrendingUp } from "lucide-react";

const GovAboutSection = () => {
  const networkStats = [
    { icon: Users, label: "1.3B+", desc: "Citizens Served Daily", color: "text-blue-600" },
    { icon: MapPin, label: "68,000 KM", desc: "Rail Network Coverage", color: "text-green-600" },
    { icon: Clock, label: "24/7", desc: "Continuous Monitoring", color: "text-purple-600" },
    { icon: Shield, label: "99.8%", desc: "Safety Reliability", color: "text-red-600" }
  ];

  const govInitiatives = [
    { title: "Digital India", desc: "Part of PM's vision for digital transformation" },
    { title: "Make in India", desc: "Developed entirely by Indian engineers and scientists" },
    { title: "Atmanirbhar Bharat", desc: "Self-reliant technology for railway modernization" },
    { title: "Skill India", desc: "Training programs for railway personnel on AI systems" }
  ];

  const keyAchievements = [
    "First AI-powered railway management system in South Asia",
    "Developed by DRDO and IIT collaboration with Railway Ministry", 
    "Successfully tested across 12 railway zones before deployment",
    "Recognized by International Union of Railways (UIC) for innovation",
    "Integration with existing Railway Board systems and protocols",
    "Compliance with all Indian railway safety and security standards"
  ];

  const ministryInfo = {
    minister: "Railway Minister, Government of India",
    secretary: "Railway Board Secretary",
    establishment: "Ministry of Railways, Govt. of India",
    launched: "National Railway Modernization Program 2024"
  };

  return (
    <section className="py-12 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        
          <div className="max-w-5xl mx-auto space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 text-sm font-medium w-max">
              <Award className="w-4 h-4 mr-2" />
              AI Railway Innovation
            </Badge>
            
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-rajdhani font-bold text-secondary leading-tight">
                About Gati Rakshak
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Gati Rakshak is an innovative AI-powered system designed to modernize railway operations through cutting-edge technology. 
              This comprehensive platform addresses critical challenges of safety, efficiency, and resource optimization 
              across India's vast railway network infrastructure.
            </p>
          </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto mb-12 space-y-6">
            <div className="gov-slide-up">
              <h3 className="text-2xl md:text-3xl font-rajdhani font-bold text-secondary mb-4">
                Advanced Railway AI System
              </h3>
              
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Gati Rakshak is a comprehensive AI system that reimagines railway operations through cutting-edge artificial intelligence. 
                  Our team of engineers and data scientists have developed this advanced platform to solve real-world challenges 
                  in India's railway network - from preventing accidents to optimizing resource allocation.
                </p>
                
                <p>
                  The system focuses on practical solutions with real-time implementation capabilities. Each module addresses specific operational 
                  challenges identified through extensive analysis of railway networks. Our goal is to create technology that enhances human 
                  decision-making while maintaining the expertise of experienced railway professionals.
                </p>
                
                <p>
                  This advanced system demonstrates the potential for AI-driven transformation in transportation infrastructure, 
                  showcasing how modern technology can make India's railway network safer, more efficient, and more reliable for millions of daily passengers.
                </p>
              </div>
            </div>


            {/* Network Statistics */}
            <div className="gov-slide-up" style={{animationDelay: "0.2s"}}>
              <h4 className="text-xl md:text-2xl font-rajdhani font-semibold text-secondary mb-3">
                Network Impact & Coverage
              </h4>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                {networkStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} className="text-center gov-hover-lift border-border">
                      <CardContent className="p-4 md:p-5 space-y-2.5">
                        <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                          <Icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                        <div className={`text-2xl font-rajdhani font-bold ${stat.color}`}>
                          {stat.label}
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                          {stat.desc}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
        </div>

        {/* Vision Statement */}
        <Card className="gov-slide-up bg-gradient-to-r from-muted/50 to-muted/30 border-2 border-primary/20 shadow-xl" style={{animationDelay: "0.6s"}}>
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-rajdhani font-bold text-secondary mb-6">
              "Building the Railway Network of Tomorrow, Today"
            </h3>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-6">
              Gati Rakshak is an advanced AI innovation that demonstrates the potential of artificial intelligence in transforming railway operations. 
              Our intelligent system addresses real challenges faced by railway networks through automated decision-making and predictive analytics, 
              showcasing how technology can enhance safety, efficiency, and passenger experience in India's transportation infrastructure.
            </p>
            
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Innovation Focus
              </Badge>
              <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2 font-medium">
                <Users className="w-4 h-4 mr-2" />
                Technology Platform
              </Badge>
              <Badge className="bg-secondary/10 text-secondary border-secondary/20 px-4 py-2 font-medium">
                <Award className="w-4 h-4 mr-2" />
                AI Solution
              </Badge>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GovAboutSection;