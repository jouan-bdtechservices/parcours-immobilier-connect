
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ShieldCheck, Map, Sparkles } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: "shield-check" | "map" | "sparkles";
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "shield-check":
        return <ShieldCheck className="h-6 w-6" />;
      case "map":
        return <Map className="h-6 w-6" />;
      case "sparkles":
        return <Sparkles className="h-6 w-6" />;
      default:
        return <Sparkles className="h-6 w-6" />;
    }
  };

  return (
    <Card className="border-none bg-transparent">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          {getIcon()}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};
