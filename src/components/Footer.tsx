
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Mon Parcours Immo</h3>
            <p className="text-muted-foreground">
              La plateforme qui simplifie vos projets immobiliers
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Parcours</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Achat</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Vente</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Investissement</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Primo-accédant</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">À propos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Notre mission</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Nos partenaires</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Témoignages</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Mentions légales</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Politique de confidentialité</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">CGU</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Mon Parcours Immo. Tous droits réservés.
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Facebook</span>
              Facebook
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Instagram</span>
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">LinkedIn</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
