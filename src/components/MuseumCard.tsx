
import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface MuseumCardProps {
  day: string;
  date: string;
  name: string;
  hours: string;
  address: string;
  mapLink: string;
  admission: string;
  note?: string;
  delay: number;
}

const MuseumCard = ({
  day,
  date,
  name,
  hours,
  address,
  mapLink,
  admission,
  note,
  delay
}: MuseumCardProps) => {
  return (
    <Card className="museum-card" style={{ animationDelay: `${delay * 0.1}s` }}>
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-sm font-medium text-museum-light mb-1">{day}, {date}</div>
            <h2 className="text-xl font-bold text-white">{name}</h2>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-museum-light">Besuchszeit</div>
            <div className="text-white font-bold">{hours} Uhr</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <a 
          href={mapLink} 
          target="_blank"
          rel="noopener noreferrer" 
          className="flex items-center gap-2 text-museum-light hover:text-museum-light/80 mb-3 transition-colors"
        >
          <MapPin size={16} />
          <span className="text-sm underline">{address}</span>
        </a>
        
        <div className="mt-3">
          <div className="text-sm font-medium text-museum-light mb-1">Eintritt:</div>
          <p className="text-sm text-white">{admission}</p>
          {note && <p className="text-sm text-museum-light mt-2 italic">{note}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default MuseumCard;
