import GovNavigation from "@/components/GovNavigation";
import GovHeroSection from "@/components/GovHeroSection";
import GovModulesSection from "@/components/GovModulesSection";
import GovAboutSection from "@/components/GovAboutSection";
import GovFooter from "@/components/GovFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GovNavigation />
      <GovHeroSection />
      <GovModulesSection />
      <GovAboutSection />
      <GovFooter />
    </div>
  );
};

export default Index;
