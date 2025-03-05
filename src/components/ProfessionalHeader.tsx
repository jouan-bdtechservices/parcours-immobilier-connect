
import { Bell, User, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";

export const ProfessionalHeader = () => {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-slate-200 dark:border-gray-700 sticky top-0 z-30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 lg:gap-4">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center">
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-600">MonParcours</span>
              <span className="font-bold text-xl">Pro</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center max-w-md w-full relative">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <Input 
              className="pl-9 bg-slate-50 dark:bg-gray-700 border-none" 
              placeholder="Rechercher un lead, un rendez-vous..." 
            />
          </div>
          
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative rounded-full bg-slate-50 dark:bg-gray-700 border-none">
                  <Bell className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <div className="p-2">
                  <h3 className="font-medium">Notifications</h3>
                </div>
                <DropdownMenuSeparator />
                <div className="max-h-80 overflow-auto">
                  <DropdownMenuItem className="p-3 cursor-pointer">
                    <div>
                      <div className="font-medium">Nouveau lead assigné</div>
                      <div className="text-sm text-muted-foreground">Marie Martin recherche un bien dans votre secteur</div>
                      <div className="text-xs text-muted-foreground mt-1">Il y a 5 min</div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-3 cursor-pointer">
                    <div>
                      <div className="font-medium">Rappel rendez-vous</div>
                      <div className="text-sm text-muted-foreground">Visite avec Jean Dupont demain à 14h</div>
                      <div className="text-xs text-muted-foreground mt-1">Il y a 2 heures</div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-3 cursor-pointer">
                    <div>
                      <div className="font-medium">Statut mis à jour</div>
                      <div className="text-sm text-muted-foreground">Votre taux de conversion a augmenté de 2%</div>
                      <div className="text-xs text-muted-foreground mt-1">Hier</div>
                    </div>
                  </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator />
                <div className="p-2 text-center">
                  <Button variant="ghost" className="w-full text-sm">Voir toutes les notifications</Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 rounded-full pl-2 pr-4 border-none bg-slate-50 dark:bg-gray-700">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>Marc Dupont</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Mon profil</DropdownMenuItem>
                <DropdownMenuItem>Paramètres</DropdownMenuItem>
                <DropdownMenuItem>Statistiques</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  Déconnexion
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};
