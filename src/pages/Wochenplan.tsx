
import MuseumSchedule from "@/components/MuseumSchedule";
import DownloadSection from "@/components/DownloadSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-museum-dark">
      <div className="container px-4 py-8 mx-auto max-w-md">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-museum-light mb-2">Museenbesuch</h1>
          <p className="text-muted-foreground">
            Alle wichtigen Informationen für den Projektwoche
          </p>
        </header>
        
        <main>
          <section>
            <h2 className="text-xl font-bold text-white mb-5 flex items-center">
              <span className="bg-museum-medium rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">
                <span className="text-white">📅</span>
              </span>
              Wochenplan
            </h2>
            <MuseumSchedule />
          </section>
          
          <section>
            <DownloadSection />
          </section>
        </main>
        
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2024 Museenbesuch Projektwoche</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
