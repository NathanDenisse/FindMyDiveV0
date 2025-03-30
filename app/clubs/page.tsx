import ClubCard from "@/components/ClubCard";
import clubs from "@/data/clubs.json";

type Club = {
  slug: string;
  name: string;
  country: string;
  location: string;
  description: string;
  image: string;
};

export default function ClubsPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>
        Clubs de plongée
      </h1>
      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {(clubs as Club[]).map((club) => (
          <ClubCard key={club.slug} {...club} />
        ))}
      </div>
    </main>
  );
}
