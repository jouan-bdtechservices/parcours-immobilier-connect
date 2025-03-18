
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeadTable } from "@/components/LeadTable";
import { ProfessionalHeader } from "@/components/ProfessionalHeader";
import { ConversationTemplate } from "@/components/ConversationTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, FileText, Users, Calendar, MessageCircle } from "lucide-react";

const ProfessionalDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("new-leads");
  const [showConversation, setShowConversation] = useState(false);
  
  const stats = [
    { label: "Leads", value: "24", icon: Users, color: "bg-emerald-500" },
    { label: "Rendez-vous", value: "8", icon: Calendar, color: "bg-blue-500" },
    { label: "Contrats", value: "3", icon: FileText, color: "bg-amber-500" },
    { label: "Taux conversion", value: "12%", icon: BarChart, color: "bg-indigo-500" }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800">
      <ProfessionalHeader />
      
      <div className="container px-4 py-8 mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center">
                  <div className={`${stat.color} p-4 flex items-center justify-center`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Activité récente</h2>
            <div className="space-y-3">
              <div className="flex items-center text-sm p-2 hover:bg-slate-50 dark:hover:bg-gray-700 rounded-md">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div>
                <span className="flex-1">Jean Dupont a confirmé un rendez-vous</span>
                <span className="text-muted-foreground">Il y a 2h</span>
              </div>
              <div className="flex items-center text-sm p-2 hover:bg-slate-50 dark:hover:bg-gray-700 rounded-md">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                <span className="flex-1">Nouveau lead: Marie Martin (Achat)</span>
                <span className="text-muted-foreground">Il y a 3h</span>
              </div>
              <div className="flex items-center text-sm p-2 hover:bg-slate-50 dark:hover:bg-gray-700 rounded-md">
                <div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
                <span className="flex-1">Contrat signé avec Pierre Durand</span>
                <span className="text-muted-foreground">Hier</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Assistant IA</h2>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1"
                onClick={() => setShowConversation(!showConversation)}
              >
                <MessageCircle className="w-4 h-4" />
                {showConversation ? "Réduire" : "Ouvrir"}
              </Button>
            </div>
            {showConversation ? (
              <ConversationTemplate />
            ) : (
              <div className="text-center p-6 border border-dashed rounded-lg">
                <MessageCircle className="w-12 h-12 mx-auto text-muted-foreground mb-2" />
                <p className="text-muted-foreground">
                  Utilisez notre assistant IA pour vous aider à gérer vos leads et répondre à vos questions.
                </p>
                <Button 
                  variant="default" 
                  className="mt-4"
                  onClick={() => setShowConversation(true)}
                >
                  Démarrer une conversation
                </Button>
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <Tabs defaultValue="new-leads" onValueChange={setActiveTab} className="w-full">
            <div className="px-6 pt-6">
              <h2 className="text-xl font-bold mb-4">Gestion des leads</h2>
            </div>
            <TabsList className="bg-slate-100 dark:bg-gray-700 p-1 mx-6 rounded-md">
              <TabsTrigger value="new-leads" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm rounded-md">
                Nouveaux
              </TabsTrigger>
              <TabsTrigger value="contacted" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm rounded-md">
                Contactés
              </TabsTrigger>
              <TabsTrigger value="appointments" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm rounded-md">
                Rendez-vous
              </TabsTrigger>
              <TabsTrigger value="contracts" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm rounded-md">
                Contrats
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="new-leads" className="p-6">
              <LeadTable 
                status="new" 
                onStatusChange={(leadId, newStatus) => {
                  console.log(`Changing lead ${leadId} status to ${newStatus}`);
                  toast({
                    title: "Lead mis à jour",
                    description: "Le lead a été marqué comme contacté",
                  });
                }} 
              />
            </TabsContent>
            
            <TabsContent value="contacted" className="p-6">
              <LeadTable 
                status="contacted" 
                onStatusChange={(leadId, newStatus) => {
                  console.log(`Changing lead ${leadId} status to ${newStatus}`);
                  toast({
                    title: "Rendez-vous planifié",
                    description: "Le rendez-vous a été enregistré",
                  });
                }} 
              />
            </TabsContent>
            
            <TabsContent value="appointments" className="p-6">
              <LeadTable 
                status="appointment" 
                onStatusChange={(leadId, newStatus) => {
                  console.log(`Changing lead ${leadId} status to ${newStatus}`);
                  toast({
                    title: "Contrat enregistré",
                    description: "Le contrat a été enregistré avec succès",
                  });
                }} 
              />
            </TabsContent>
            
            <TabsContent value="contracts" className="p-6">
              <LeadTable 
                status="contract" 
                onStatusChange={() => {}} 
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;
