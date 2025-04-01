"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  description: string;
  image: string;
  animals: string[];
  level: string;
  price: string;
  rating: number;
  clubSlug: string;
  clubName: string;
};

export default function ExperienceCard({
  slug,
  title,
  description,
  image,
  animals,
  level,
  price,
  rating,
  clubSlug,
  clubName,
}: Props) {
  const shortDesc = description.length > 80 ? description.slice(0, 80) + "..." : description;

  return (
    <Link href={`/experiences/${slug}`} className="card-link">
      <div className="card-image-container">
        <Image src={image} alt={title} fill className="card-image" />
        <div className="card-image-overlay" />
      </div>

      <div className="card-description">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{shortDesc}</p>
        <div className="experience-meta">
          <span className="experience-badge">{level}</span>
          <span className="experience-badge">{price}</span>
          <span className="experience-badge">⭐️ {rating.toFixed(1)}</span>
        </div>
        <div className="badge-container">
          {animals.slice(0, 4).map((animal, index) => (
            <span key={index} className="animal-badge">{animal}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
