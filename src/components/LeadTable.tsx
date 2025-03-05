
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Données fictives pour la démo
const generateMockLeads = (status: string, count = 5) => {
  const statuses = {
    new: "Nouveau",
    contacted: "Contacté",
    appointment: "Rendez-vous",
    contract: "Contrat",
  };
  
  const types = ["Achat", "Vente", "Financement", "Estimation"];
  const cities = ["Paris", "Lyon", "Marseille", "Bordeaux", "Lille"];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `lead-${status}-${i}`,
    name: `Client ${i + 1}`,
    email: `client${i + 1}@example.com`,
    phone: `06${Math.floor(10000000 + Math.random() * 90000000)}`,
    type: types[Math.floor(Math.random() * types.length)],
    city: cities[Math.floor(Math.random() * cities.length)],
    date: new Date(Date.now() - Math.floor(Math.random() * 10) * 86400000).toLocaleDateString(),
    status: statuses[status as keyof typeof statuses] || "Inconnu",
    rating: status === "contract" ? Math.floor(Math.random() * 5) + 1 : null,
  }));
};

interface LeadTableProps {
  status: "new" | "contacted" | "appointment" | "contract";
  onStatusChange: (leadId: string, newStatus: string) => void;
}

export const LeadTable = ({ status, onStatusChange }: LeadTableProps) => {
  const [leads] = useState(generateMockLeads(status));
  const [appointmentDate, setAppointmentDate] = useState("");
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);
  
  const getNextActionButton = (leadId: string) => {
    switch (status) {
      case "new":
        return (
          <Button 
            onClick={() => onStatusChange(leadId, "contacted")}
            size="sm"
          >
            Marquer comme contacté
          </Button>
        );
      case "contacted":
        return (
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="sm"
                onClick={() => setSelectedLeadId(leadId)}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Planifier RDV
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Planifier un rendez-vous</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="appointment-date">Date et heure</Label>
                  <Input
                    id="appointment-date"
                    type="datetime-local"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="appointment-notes">Notes</Label>
                  <Input id="appointment-notes" placeholder="Notes additionnelles" />
                </div>
              </div>
              <Button 
                onClick={() => {
                  onStatusChange(selectedLeadId || "", "appointment");
                }}
              >
                Confirmer le rendez-vous
              </Button>
            </DialogContent>
          </Dialog>
        );
      case "appointment":
        return (
          <Button 
            onClick={() => onStatusChange(leadId, "contract")}
            size="sm"
          >
            Enregistrer contrat
          </Button>
        );
      case "contract":
        return (
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  (leads.find(l => l.id === leadId)?.rating || 0) > i
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Téléphone</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Ville</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell className="font-medium">{lead.name}</TableCell>
              <TableCell>{lead.email}</TableCell>
              <TableCell>{lead.phone}</TableCell>
              <TableCell>{lead.type}</TableCell>
              <TableCell>{lead.city}</TableCell>
              <TableCell>{lead.date}</TableCell>
              <TableCell>{lead.status}</TableCell>
              <TableCell>{getNextActionButton(lead.id)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
