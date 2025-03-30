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
  experiences: any[]; // Vous pouvez définir un type plus précis pour les expériences
  coords: [number, number]; // Ajoutez cette ligne pour les coordonnées
};

export default function ClubDetails({
  name,
  country,
  location,
  description,
  image,
  experiences,
  coords, // Ajoutez cette ligne
}: Props) {
  return (
    <main style={{ maxWidth: "1100px", margin: "2rem auto", padding: "1rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>{name}</h1>
      <p style={{ color: "#555" }}>{country}</p>
      <p>{location}</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
            <Image
              src={image}
              alt={name}
              width={800}
              height={500}
              style={{
                width: "100%",
                borderRadius: "1rem",
                objectFit: "cover",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            />
            <p style={{ marginTop: "1rem" }}>{description}</p>
          </div>

          <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
            <Map
              center={coords}
              zoom={8}
              markers={[{ position: coords, label: name }]}
            />
          </div>
        </div>

        <div id="experience-section">
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Expériences
          </h2>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </div>
      <button
        id="show-map-button"
        onClick={() => {
          document.querySelector("#experience-section")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Voir les expériences
      </button>
    </main>
  );
}
