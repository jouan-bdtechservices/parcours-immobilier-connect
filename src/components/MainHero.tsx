
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const MainHero = () => {
  return (
    <div className="relative bg-gradient-to-b from-primary/10 to-background min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Mon Parcours Immo
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            L'immobilier clé en main : simplifiez vos démarches d'achat et de vente grâce à notre réseau de professionnels qualifiés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="px-8" asChild>
              <Link to="/journey">
                Je suis un particulier
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/professional-dashboard">
                Je suis un professionnel
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
