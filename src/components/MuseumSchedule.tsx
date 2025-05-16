
import MuseumCard from "./MuseumCard";

const museums = [
  {
    day: "Montag",
    date: "03.06.2024",
    name: "Technikmuseum",
    hours: "10:00–13:30",
    address: "Trebbiner Straße 9, Berlin",
    mapLink: "https://maps.google.com/?q=Technikmuseum+Berlin+Trebbiner+Straße+9",
    admission: "Schulgruppen frei (Nachweis erforderlich), Lehrkräfte 0 € oder 2 € pro Person ohne Nachweis",
    note: "Für Erwachsene ggf. 12 €"
  },
  {
    day: "Dienstag",
    date: "04.06.2024",
    name: "Bundeswehrmuseum Gatow",
    hours: "10:00–13:30",
    address: "Flugplatz Gatow 33, Berlin",
    mapLink: "https://maps.google.com/?q=Bundeswehrmuseum+Gatow+Flugplatz+Gatow+33+Berlin",
    admission: "frei"
  },
  {
    day: "Mittwoch",
    date: "05.06.2024",
    name: "Museum für Kommunikation Berlin",
    hours: "09:00–13:30",
    address: "Leipziger Straße 16, Berlin",
    mapLink: "https://maps.google.com/?q=Museum+für+Kommunikation+Berlin+Leipziger+Straße+16",
    admission: "8 €, ermäßigt 4 €, unter 18 frei",
    note: "(Kosten für Lehrkräfte: 8 €)"
  },
  {
    day: "Donnerstag",
    date: "06.06.2024",
    name: "Deutsch-Russisches Museum Berlin-Karlshorst",
    hours: "10:00–13:30",
    address: "Zwieseler Straße 4, Berlin",
    mapLink: "https://maps.google.com/?q=Deutsch+Russisches+Museum+Berlin+Karlshorst+Zwieseler+Straße+4",
    admission: "frei"
  },
  {
    day: "Freitag",
    date: "07.06.2024",
    name: "Museum für Fotografie",
    hours: "11:00–13:30",
    address: "Jebenstraße 2, Berlin",
    mapLink: "https://maps.google.com/?q=Museum+für+Fotografie+Jebenstraße+2+Berlin",
    admission: "Erwachsene 12 €, ermäßigt 6 €, unter 18 frei"
  }
];

const MuseumSchedule = () => {
  return (
    <div className="space-y-5">
      {museums.map((museum, index) => (
        <MuseumCard
          key={index}
          day={museum.day}
          date={museum.date}
          name={museum.name}
          hours={museum.hours}
          address={museum.address}
          mapLink={museum.mapLink}
          admission={museum.admission}
          note={museum.note}
          delay={index + 1}
        />
      ))}
    </div>
  );
};

export default MuseumSchedule;
