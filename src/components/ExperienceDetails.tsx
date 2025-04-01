"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  description: string;
  price: string;
  level: string;
  activity: string;
  animals: string[];
  image: string;
  rating: number;
  reviews: {
    author: string;
    comment: string;
    rating: number;
  }[];
  clubSlug: string;
  clubName: string;
};

export default function ExperienceDetails({
  title,
  description,
  price,
  level,
  animals,
  image,
  rating,
  reviews,
  clubSlug,
  clubName,
}: Props) {
  return (
    <main className="details-page">
      <h1 className="section-title">{title}</h1>

      <div className="experience-meta">
        <span className="experience-badge">{level}</span>
        <span className="experience-badge">{price}</span>
        <span className="experience-rating">⭐️ {rating.toFixed(1)} / 5</span>
      </div>

      <Image
        src={image}
        alt={title}
        width={900}
        height={500}
        className="experience-hero-image"
      />

      <p className="card-text" style={{ marginTop: "1rem" }}>{description}</p>

      <p className="card-text">
        <strong>Animaux observables :</strong> {animals.join(", ")}
      </p>

      <section>
        <h2 className="section-title">Avis</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {reviews.map((r, i) => (
            <div key={i} className="review-card">
              <p className="review-card-author">
                {r.author} – ⭐️ {r.rating}/5
              </p>
              <p style={{ margin: 0 }}>{r.comment}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ marginTop: "2rem" }}>
        <Link href={`/clubs/${clubSlug}`} className="back-to-club-button">
          ← Retour au club {clubName}
        </Link>
      </div>
    </main>
  );
}
