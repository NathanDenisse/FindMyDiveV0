"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  name: string;
  country: string;
  location: string;
  description: string;
  image: string;
  trainingSchool: string;
  rating: number;
};

export default function ClubCard({
  slug,
  name,
  country,
  location,
  description,
  image,
  trainingSchool,
  rating,
}: Props) {
  const shortDesc = description.length > 80 ? description.slice(0, 80) + "..." : description;

  return (
    <Link href={`/clubs/${slug}`} className="card-link">
      <div className="card-image-container">
        <Image src={image} alt={name} fill className="card-image" />
        <div className="card-image-overlay" />
      </div>

      <div className="card-description">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{location}, {country}</p>
        <p className="card-text">{shortDesc}</p>
        <div className="club-meta">
          <span className="club-badge">{trainingSchool}</span>
          <span className="club-rating">⭐️ {rating.toFixed(1)} / 5</span>
        </div>
      </div>
    </Link>
  );
}
