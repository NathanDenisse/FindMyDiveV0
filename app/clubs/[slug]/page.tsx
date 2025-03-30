"use client";

import { notFound } from "next/navigation";
import clubs from "@/data/clubs.json";
import ClubDetails from "@/components/ClubDetails";

type Club = {
  slug: string;
  name: string;
  country: string;
  location: string;
  description: string;
  image: string;
  coords: [number, number];
  experiences: Array<{
    slug: string;
    title: string;
    level: string;
    price: string;
    description: string;
    image: string;
  }>;
};

type Props = {
  params: { slug: string };
};

export default function ClubPage({ params }: Props) {
  const club = (clubs as Club[]).find((c) => c.slug === params.slug);
  if (!club) return notFound();

  return <ClubDetails {...club} />;
}
