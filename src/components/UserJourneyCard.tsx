
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Banknote, Building } from "lucide-react";

interface UserJourneyCardProps {
  title: string;
  description: string;
  icon: "home" | "banknote" | "building";
  steps: number;
}

export const UserJourneyCard = ({ title, description, icon, steps }: UserJourneyCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "home":
        return <Home className="h-6 w-6" />;
      case "banknote":
        return <Banknote className="h-6 w-6" />;
      case "building":
        return <Building className="h-6 w-6" />;
      default:
        return <Home className="h-6 w-6" />;
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          {getIcon()}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
        <div className="mt-4 flex items-center gap-2">
          <div className="text-sm font-medium">{steps} étapes</div>
          <div className="flex-1 h-2 bg-muted rounded-full">
            <div className="bg-primary h-2 rounded-full w-full" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full justify-between">
          Voir le parcours
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
