"use client";

import Link from "next/link";
import Image from "next/image";

type Props = {
  slug: string;
  title: string;
  level: string;
  price: string;
  description: string;
  image: string;
};

export default function ExperienceCard({
  slug,
  title,
  level,
  price,
  description,
  image,
}: Props) {
  return (
    <Link href={`/experiences/${slug}`} className="card-link">
      <div className="card-image-container">
        <Image src={image} alt={title} fill className="card-image" />
        <div className="card-image-overlay" />
      </div>

      <div className="card-description">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">Niveau: {level}</p>
        <p className="card-text">Prix: {price}€</p>
        <p className="card-text">{description}</p>
      </div>
    </Link>
  );
}
