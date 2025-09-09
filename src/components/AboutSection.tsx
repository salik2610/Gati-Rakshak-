import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, MapPin, Clock } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    { icon: Users, label: "1.3B+ Citizens", desc: "Serving India's Population" },
    { icon: MapPin, label: "67K+ KM", desc: "Railway Network Coverage" },
    { icon: Clock, label: "24/7", desc: "Continuous Monitoring" },
    { icon: CheckCircle, label: "99.8%", desc: "Safety Reliability" }
  ];

  const keyFeatures = [
    "Prevents head-on collisions by monitoring train positions within 5km radius in real-time",
    "Automatically prioritizes Express over Passenger over Goods trains during traffic conflicts", 
    "Predicts platform availability 15-20 minutes in advance to eliminate station congestion",
    "Processes 10+ lakh data points hourly for live performance monitoring across all zones",
    "Provides 'What-If' simulation tools so controllers can test decisions before implementation",
    "Maintains complete audit logs of all AI recommendations and human decisions for transparency"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column */}
          <div className="space-y-8 fade-in">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                About GatiRakhshak
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Transforming <span className="gradient-text">Indian Railways</span> with AI Innovation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                GatiRakshak was born from a simple observation - most railway accidents and delays happen due to human limitations in processing complex, real-time information. Our engineers and data scientists spent three years studying railway operations across 16 zones to understand exactly where technology could help human decision-makers perform better.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The system doesn't replace railway staff - it makes them superhuman. A controller who could earlier manage 5-6 trains simultaneously can now efficiently coordinate 20+ trains with AI assistance. Loco pilots get early warnings about track conditions they cannot see. Station masters know in advance which platform will be free for incoming trains.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Capabilities</h3>
              <div className="space-y-3">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Government Info Card */}
          <div className="slide-up">
            <Card className="bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 hover:shadow-xl transition-all hover-glow">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">भारत</span>
                  </div>
                    <h3 className="text-2xl font-bold mb-2">Government of India</h3>
                    <p className="text-muted-foreground">Ministry of Railways Initiative</p>
                  </div>

                  <div className="space-y-6">
                    <div className="text-center">
                      <h4 className="font-semibold mb-2">Project Vision</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        "Every Indian should travel by train knowing that the latest technology is working 24x7 to ensure their safety, 
                        that their train will reach on time, and that our railway resources are being used optimally for the nation's progress."
                      </p>
                    </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-4 text-center">Impact Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {achievements.map((achievement, index) => {
                        const Icon = achievement.icon;
                        return (
                          <div key={index} className="text-center">
                            <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                            <div className="text-lg font-bold text-foreground">{achievement.label}</div>
                            <div className="text-xs text-muted-foreground">{achievement.desc}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vision Statement */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 slide-up">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Built by Indians, for Indians
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              GatiRakshak is developed entirely by Indian engineers, data scientists, and railway experts who understand the unique challenges of our network - from monsoon flooding in Kerala to desert sandstorms in Rajasthan. The system is designed to work with our existing infrastructure while preparing us for future technologies like semi-high speed trains and automated signaling systems.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;