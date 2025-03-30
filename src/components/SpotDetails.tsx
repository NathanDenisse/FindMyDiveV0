"use client";

import Image from "next/image";
import Map from "./Map";

type Props = {
  name: string;
  country: string;
  description: string;
  image: string;
  coords: [number, number];
};

export default function SpotDetails({
  name,
  country,
  description,
  image,
  coords,
}: Props) {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "2rem auto",
        padding: "1rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>{name}</h1>
      <p style={{ color: "#555" }}>{country}</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
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
      </div>
    </main>
  );
}
