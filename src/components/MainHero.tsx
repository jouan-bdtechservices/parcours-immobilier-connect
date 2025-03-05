
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const MainHero = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-background min-h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            Mon Parcours Immo
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            L'immobilier clé en main : simplifiez vos démarches d'achat et de vente grâce à notre réseau de professionnels qualifiés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-none px-8 shadow-lg transform transition-transform duration-200 hover:scale-105" asChild>
              <Link to="/journey">
                Je suis un particulier
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 shadow-sm" asChild>
              <Link to="/professional-dashboard">
                Je suis un professionnel
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};
