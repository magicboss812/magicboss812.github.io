import MuseumSchedule from "@/components/MuseumSchedule";
import DownloadSection from "@/components/DownloadSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-museum-dark">
      <div className="container  px-4 py-8 mx-auto max-w-md">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-museum-light mb-2">Museenbesuch</h1>
          <p className="text-muted-foreground">
            Alle wichtigen Informationen für die Projektwoche
          </p>
        </header>
        
        <main>
          <section>
            <h2 className="text-xl font-bold text-white mb-5 flex items-center">
              <span className="bg-museum-medium rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">
                <span className="text-white">📅</span>
              </span>
              Wochenplan komplett
            </h2>
            <div className="bg-card border rounded-xl p-4 mt-6 text-white text-center font-semibold mb-4">
              <span className="font-extrabold text-museum-light">WICHTIG!</span> Anreise & Abreise erfolgt selbständig
            </div>
            <div className="bg-card border rounded-xl p-4 mt-6 text-white text-center font-semibold mb-4">
              Empfohlen ist es <span className="font-extrabold text-museum-light">mind.</span> 5&nbsp;€ pro Tag mit sich zu haben
            </div>
            <div className="bg-card border rounded-xl pt-4 pb-1 px-4 mt-6 text-white text-center font-semibold mb-4 flex flex-col items-center">
              <span>
                <span className="font-extrabold text-museum-light">AUCH WICHTIG!</span> Eine Einverständniserklärung ist notwendig
              </span>
              <span className="text-2xl text-museum-light mt-1">↓↓</span>
              <span className="text-2xl text-museum-light mt-1">↓↓</span>
            </div>
            <MuseumSchedule />
            
          

            
          </section>
          <section>
            <DownloadSection />
          </section>
        </main>
        
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2025 Museenbesuch Projektwoche</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
