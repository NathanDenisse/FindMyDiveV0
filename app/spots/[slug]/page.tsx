import { notFound } from "next/navigation";
import spots from "@/data/spots.json";
import SpotDetails from "@/components/SpotDetails";

type Spot = {
  slug: string;
  name: string;
  country: string;
  description: string;
  image: string;
  coords: [number, number];
};

type Props = {
  params: { slug: string };
};

export default function SpotPage({ params }: Props) {
  const spot = (spots as Spot[]).find((s) => s.slug === params.slug);
  if (!spot) return notFound();

  return <SpotDetails {...spot} />;
}
