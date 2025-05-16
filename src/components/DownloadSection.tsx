
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadSection = () => {
  return (
    <div className="bg-card rounded-xl p-5 border border-muted shadow-md mt-8">
      <h2 className="text-xl font-bold text-white mb-4">Downloads</h2>
      
      <div className="space-y-4">
        <Button 
          variant="outline"
          className="w-full justify-start bg-muted hover:bg-museum-medium border-museum-medium text-white"
        >
          <Download size={16} className="mr-2" />
          <span>Wochenplan (PDF)</span>
        </Button>
        
        <Button 
          variant="outline"
          className="w-full justify-start bg-muted hover:bg-museum-medium border-museum-medium text-white"
        >
          <Download size={16} className="mr-2" />
          <span>Einverständniserklärung (PDF)</span>
        </Button>
      </div>
    </div>
  );
};

export default DownloadSection;
