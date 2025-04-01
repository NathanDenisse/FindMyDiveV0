import SpotCard from "@/components/SpotCard";
import spotsData from "@/data/spots.json";

type Spot = {
  slug: string;
  name: string;
  country: string;
  description: string;
  image: string;
  coords: [number, number];
  animals: string[];
  level: string;
  activity: string;
  price: string;
  temperature: number;
  visibility: number;
  current: string;
  depthRange: string;
  bestSeason: string;
  category: string;
};

export default function SpotsPage() {
  const spots = (spotsData as any[]).map((spot) => ({
    ...spot,
    coords: spot.coords as [number, number],
  }));

  return (
    <main>
      <h1 className="details-title">Spots de plongée</h1>
      <div className="cards-container">
        {spots.map((spot) => (
          <SpotCard key={spot.slug} {...spot} />
        ))}
      </div>
    </main>
  );
}
