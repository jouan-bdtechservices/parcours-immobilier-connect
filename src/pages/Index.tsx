
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserJourneyCard } from "@/components/UserJourneyCard";
import { FeatureCard } from "@/components/FeatureCard";
import { MainHero } from "@/components/MainHero";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <MainHero />
      
      {/* User Journeys Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Parcours Immobiliers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UserJourneyCard 
            title="Achat" 
            description="Accompagnement pour l'acquisition de votre bien immobilier"
            icon="home"
            steps={5}
          />
          <UserJourneyCard 
            title="Vente" 
            description="Commercialisez votre bien dans les meilleures conditions"
            icon="banknote"
            steps={5}
          />
          <UserJourneyCard 
            title="Investissement" 
            description="Développez votre patrimoine immobilier"
            icon="building"
            steps={4}
          />
        </div>
        <div className="text-center mt-10">
          <Button className="px-8">Découvrir tous les parcours</Button>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-muted/50">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir Mon Parcours Immo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Professionnels Qualifiés" 
            description="Tous nos partenaires sont rigoureusement sélectionnés et évalués"
            icon="shield-check"
          />
          <FeatureCard 
            title="Parcours Personnalisé" 
            description="Une solution adaptée à votre situation personnelle"
            icon="map"
          />
          <FeatureCard 
            title="Simplicité" 
            description="Toutes vos démarches centralisées en un seul endroit"
            icon="sparkles"
          />
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <Card className="w-full bg-primary/5 border-none">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center">Prêt à commencer votre parcours immobilier ?</CardTitle>
            <CardDescription className="text-center text-base">Inscrivez-vous gratuitement et accédez à notre réseau de professionnels</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center gap-4">
            <Button size="lg" className="px-8">Particulier</Button>
            <Button size="lg" variant="outline" className="px-8">Professionnel</Button>
          </CardFooter>
        </Card>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
