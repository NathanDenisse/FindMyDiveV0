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
};

export default function ClubCard({
  slug,
  name,
  country,
  location,
  description,
  image,
  trainingSchool,
}: Props) {
  return (
    <Link href={`/clubs/${slug}`} className="card-link">
      <div className="card-image-container">
        <Image src={image} alt={name} fill className="card-image" />
        <div className="card-image-overlay" />
      </div>

      <div className="card-description">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{location}, {country}</p>
        <p className="card-text">{description}</p>
        <div className="card-button">
          <span className="training-school">{trainingSchool}</span>
        </div>
      </div>
    </Link>
  );
}
