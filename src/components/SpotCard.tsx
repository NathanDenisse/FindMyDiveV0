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
};

export default function SpotCard({
  slug,
  name,
  country,
  description,
  image,
  animals,
}: Props) {
  const shortDesc = description.length > 80 ? description.slice(0, 80) + "..." : description;

  return (
    <Link href={`/spots/${slug}`} className="card-link">
      <div className="card-image-container">
        <Image src={image} alt={name} fill className="card-image" />
        <div className="card-image-overlay" />
      </div>

      <div className="card-description">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{country}</p>
        <p className="card-text">{shortDesc}</p>
        <div className="badge-container">
          {animals.slice(0, 3).map((animal, i) => (
            <span className="animal-badge" key={i}>
              {animal}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
