
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-museum-dark">
      <div className="container px-4 py-8 mx-auto max-w-md">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-museum-light mb-2">MUSEUMSBESUCH</h1>
        </header>
        
        <main>
          <section className="museum-card">
            <h2 className="text-2xl font-bold text-white mb-4">Du hast den QR-Code also doch gescannt!</h2>
            
            <div className="space-y-4 text-left">
              <p className="text-white">Hallo!</p>
              <p className="text-white">Wir sind die Projektleiter des Projekts „Museenbesuch".</p>
              <p className="text-white">Du hast also doch den QR-Code gescannt – solltest du zwar eigentlich nicht, aber keine Sorge! Wir freuen uns trotzdem, dass du hier bist und hoffen, dass du bei uns mitmachst.</p>
              
              <p className="text-white">Unsere Idee: eine tägliche Exkursion zu verschiedenen Museen in Berlin. Denn wir finden, ein Museumsbesuch ist nicht immer langweilig – im Gegenteil!</p>
              <p className="text-white">Wir haben für euch die fünf interessantesten Museen ausgesucht, damit DU dich nicht so schnell langweilst und stattdessen ein paar exotische, antike oder einfach spannende Dinge entdecken kannst.</p>
              
              <div className="pt-2">
                <p className="text-white font-bold">Und das Wichtigste:</p>
                <p className="text-white">Hab Spaß dabei!</p>
              </div>
              
              <div className="pt-2">
                <p className="text-white">Liebe Grüße</p>
                <p className="text-white">Die Projektleitung (PL)</p>
                <p className="text-white">Talay & Martin, Klasse 10c</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                asChild
                size="lg" 
                className="w-full bg-museum-medium hover:bg-museum-light text-white font-bold text-lg py-6"
              >
                <Link to="/wochenplan">
                  Wochenplan <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </section>
        </main>
        
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2024 Museenbesuch Projektwoche</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
