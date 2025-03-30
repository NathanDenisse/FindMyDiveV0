import SpotCard from "@/components/SpotCard";
import spots from "@/data/spots.json";

type Spot = {
  slug: string;
  name: string;
  country: string;
  description: string;
  image: string;
  coords: [number, number];
};

export default function SpotsPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>
        Spots de plongée
      </h1>
      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {(spots as Spot[]).map((spot) => (
          <SpotCard key={spot.slug} {...spot} />
        ))}
      </div>
    </main>
  );
}
