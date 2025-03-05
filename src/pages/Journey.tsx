
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const JourneyStep = ({ 
  number, 
  title, 
  description, 
  completed = false 
}: { 
  number: number; 
  title: string; 
  description: string; 
  completed?: boolean;
}) => {
  return (
    <div className="relative pl-12 pb-10">
      {/* Line connecting steps */}
      {number < 5 && (
        <div className={`absolute left-5 top-10 bottom-0 w-0.5 ${completed ? "bg-primary" : "bg-muted"}`}></div>
      )}
      
      {/* Step number/indicator */}
      <div className={`absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center
        ${completed ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
        {completed ? <CheckCircle2 className="h-5 w-5" /> : number}
      </div>
      
      {/* Step content */}
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="space-y-4">
          {completed ? (
            <div className="flex items-center text-primary">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Étape complétée</span>
            </div>
          ) : (
            <Button variant={number === 1 ? "default" : "outline"}>
              {number === 1 ? "Commencer cette étape" : "En savoir plus"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Journey = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>
          
          <h1 className="text-3xl font-bold mb-2">Parcours Achat</h1>
          <p className="text-muted-foreground">Toutes les étapes pour l'acquisition de votre bien</p>
        </div>
      </div>
      
      {/* Journey Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Journey Steps */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Les grandes étapes</h2>
            
            <div className="space-y-2">
              <JourneyStep 
                number={1} 
                title="Définir le projet" 
                description="Évaluer votre capacité d'emprunt et établir vos critères de recherche prioritaires."
              />
              
              <JourneyStep 
                number={2} 
                title="Recherche du bien" 
                description="Identifier et visiter les biens correspondant à vos critères dans votre budget."
              />
              
              <JourneyStep 
                number={3} 
                title="Devis et projections" 
                description="Établir des devis pour d'éventuels travaux et affiner votre projet."
              />
              
              <JourneyStep 
                number={4} 
                title="Négociation et achat" 
                description="Faire une offre, négocier et finaliser l'acquisition avec les professionnels."
              />
              
              <JourneyStep 
                number={5} 
                title="Remise des clés" 
                description="Organiser votre installation et préparer votre emménagement."
              />
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Professionnels recommandés</CardTitle>
                <CardDescription>Experts qualifiés pour vous accompagner</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Étape 1: Définir le projet</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Conseiller en gestion de patrimoine</li>
                    <li>• Courtier en prêt immobilier</li>
                    <li>• Banques partenaires</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">Étape 2: Recherche du bien</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Chasseur immobilier</li>
                    <li>• Agences immobilières</li>
                    <li>• Notaires</li>
                  </ul>
                </div>
                
                <Button className="w-full mt-4">Voir tous les professionnels</Button>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Besoin d'aide ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Notre équipe est disponible pour répondre à vos questions et vous accompagner dans votre parcours.
                </p>
                <Button variant="outline" className="w-full">Contacter un conseiller</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Journey;
