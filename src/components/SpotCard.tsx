"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  name: string;
  country: string;
  description: string;
  image: string;
  animals: string[];
  level: string;
  coords: [number, number];
};

export default function SpotCard({
  slug,
  name,
  country,
  description,
  image,
  animals,
  level,
  coords,
}: Props) {
  return (
    <Link href={`/spots/${slug}`} className="card-link">
      <div className="card-image-container">
        <Image src={image} alt={name} fill className="card-image" />
        <div className="card-image-overlay" />
      </div>

      <div className="card-description">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{country}</p>
        <p className="card-text">{description}</p>
        <p className="card-text"><strong>Animaux à voir : </strong>{animals.join(", ")}</p>
        <p className="card-text"><strong>Niveau : </strong>{level}</p>
      </div>
    </Link>
  );
}
