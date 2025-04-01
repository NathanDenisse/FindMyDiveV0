"use client";

import Image from "next/image";
import Map from "./Map";

type Props = {
  name: string;
  country: string;
  description: string;
  image: string;
  coords: [number, number];
  animals: string[];
  level: string;
  activity: string;
  price: string;
  temperature: number;
  visibility: number;
};

export default function SpotDetails({
  name,
  country,
  description,
  image,
  coords,
  animals,
  level,
  activity,
  price,
  temperature,
  visibility,
}: Props) {
  return (
    <main className="details-page">
      <h1 className="section-title">{name}</h1>
      <p className="card-text" style={{ marginBottom: "1rem" }}>{country}</p>

      <div className="details-grid">
        {/* Image */}
        <div className="details-image-container">
          <Image
            src={image}
            alt={name}
            width={800}
            height={500}
            className="details-image"
          />
          <p className="card-text" style={{ marginTop: "1rem" }}>{description}</p>
        </div>

        {/* Carte */}
        <div className="details-map-container">
          <Map
            center={coords}
            zoom={8}
            markers={[{ position: coords, label: name }]}
          />
        </div>
      </div>

      <div className="experience-meta">
        <span className="experience-badge">{activity}</span>
        <span className="experience-badge">{level}</span>
        <span className="experience-badge">{price}</span>
        <span className="experience-badge">{temperature}°C</span>
        <span className="experience-badge">Visibilité : {visibility}m</span>
      </div>

      <p className="card-text">
        <strong>Animaux observables :</strong> {animals.join(", ")}
      </p>
    </main>
  );
}
