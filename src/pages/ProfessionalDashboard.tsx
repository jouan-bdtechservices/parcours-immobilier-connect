
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeadTable } from "@/components/LeadTable";
import { DashboardHeader } from "@/components/DashboardHeader";

const ProfessionalDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("new-leads");
  
  return (
    <div className="container mx-auto py-6">
      <DashboardHeader />
      
      <div className="mt-8">
        <Tabs defaultValue="new-leads" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="new-leads">Nouveaux leads</TabsTrigger>
            <TabsTrigger value="contacted">Contactés</TabsTrigger>
            <TabsTrigger value="appointments">Rendez-vous</TabsTrigger>
            <TabsTrigger value="contracts">Contrats</TabsTrigger>
          </TabsList>
          
          <TabsContent value="new-leads">
            <LeadTable 
              status="new" 
              onStatusChange={(leadId, newStatus) => {
                // Dans une application réelle, ceci appellerait une API
                console.log(`Changing lead ${leadId} status to ${newStatus}`);
                toast({
                  title: "Lead mis à jour",
                  description: "Le lead a été marqué comme contacté",
                });
              }} 
            />
          </TabsContent>
          
          <TabsContent value="contacted">
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
          
          <TabsContent value="appointments">
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
          
          <TabsContent value="contracts">
            <LeadTable 
              status="contract" 
              onStatusChange={() => {}} 
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;
