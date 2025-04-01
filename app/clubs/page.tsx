import ClubCard from "@/components/ClubCard";
import clubs from "@/data/clubs.json";

type Club = {
  slug: string;
  name: string;
  country: string;
  location: string;
  description: string;
  image: string;
  trainingSchool: string;
  rating: number;
};

export default function ClubsPage() {
  return (
    <main>
      <h1 className="details-title">Clubs de plongée</h1>
      <div className="cards-container">
        {(clubs as Club[]).map((club) => (
          <ClubCard key={club.slug} {...club} />
        ))}
      </div>
    </main>
  );
}
