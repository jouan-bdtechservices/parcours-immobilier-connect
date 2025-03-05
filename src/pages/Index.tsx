
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-gradient">Parcours Immobiliers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Découvrez nos parcours personnalisés pour vous accompagner à chaque étape de votre projet immobilier</p>
        </div>
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
          <Button className="px-8 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-none shadow-lg transform transition-transform duration-200 hover:scale-105">Découvrir tous les parcours</Button>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-accent/50 rounded-3xl my-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-gradient">Pourquoi choisir Mon Parcours Immo</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Notre plateforme vous connecte avec les meilleurs professionnels de l'immobilier</p>
        </div>
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
        <Card className="w-full border-none shadow-lg overflow-hidden bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center text-gradient">Prêt à commencer votre parcours immobilier ?</CardTitle>
            <CardDescription className="text-center text-base">Inscrivez-vous gratuitement et accédez à notre réseau de professionnels</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center gap-4">
            <Button size="lg" className="px-8 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-none shadow-lg transform transition-transform duration-200 hover:scale-105">Particulier</Button>
            <Button size="lg" variant="outline" className="px-8 border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 shadow-sm">Professionnel</Button>
          </CardFooter>
        </Card>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
