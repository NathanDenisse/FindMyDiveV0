"use client";

import Image from "next/image";
import Map from "./Map";
import ExperienceCard from "@/components/ExperienceCard";

type Props = {
  name: string;
  country: string;
  location: string;
  description: string;
  image: string;
  coords: [number, number];
  experiences: any[];
  instructors: {
    name: string;
    experience: string;
    speciality: string;
    bio: string;
    image: string;
  }[];
  rating: number;
  reviews: {
    author: string;
    comment: string;
    rating: number;
  }[];
};

export default function ClubDetails({
  name,
  country,
  location,
  description,
  image,
  coords,
  experiences,
  instructors,
  rating,
  reviews,
}: Props) {
  return (
    <main className="details-page">
      <h1 className="details-title">{name}</h1>
      <p className="details-subtitle">{country} – {location}</p>
      <p className="club-rating"><strong>Note globale :</strong> ⭐️ {rating.toFixed(1)} / 5</p>

      <div className="details-grid">
        <div className="details-image-container">
          <Image
            src={image}
            alt={name}
            width={800}
            height={500}
            className="details-image"
          />
          <p className="club-description">{description}</p>
        </div>
        <div className="details-map-container">
          <Map center={coords} zoom={8} markers={[{ position: coords, label: name }]} />
        </div>
      </div>

      {/* Instructeurs */}
      {instructors?.length > 0 && (
        <section>
          <h2 className="section-title">Instructeurs</h2>
          <div className="instructors-grid">
            {instructors.map((inst, idx) => (
              <div key={idx} className="instructor-container">
                {inst.image && (
                  <Image
                    src={inst.image}
                    alt={inst.name}
                    width={80}
                    height={80}
                    className="instructor-photo"
                  />
                )}
                <div>
                  <p><strong>{inst.name}</strong></p>
                  <p>{inst.experience} – {inst.speciality}</p>
                  <p className="card-text">{inst.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Expériences */}
      <section id="experience-section">
        <h2 className="section-title">Expériences</h2>
        <div className="cards-container">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </section>

      {/* Avis */}
      {reviews?.length > 0 && (
        <section>
          <h2 className="section-title">Avis clients</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {reviews.map((r, i) => (
              <div key={i} className="review-card">
                <p className="review-card-author">
                  {r.author} – ⭐️ {r.rating}/5
                </p>
                <p>{r.comment}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bouton scroll vers expériences */}
      <button
        id="show-map-button"
        onClick={() =>
          document.querySelector("#experience-section")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Voir les expériences
      </button>
    </main>
  );
}
