"use client";

import { useState } from "react";
import SpotCard from "@/components/SpotCard";
import ClubCard from "@/components/ClubCard";
import ExperienceCard from "@/components/ExperienceCard"; // Importer les cartes d'expérience
import spots from "@/data/spots.json";
import clubs from "@/data/clubs.json";
import SearchBar from "@/components/SearchBar";
import dynamic from "next/dynamic";

// Dynamically import the Map component (SSR disabled)
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Home() {
  const [query, setQuery] = useState("");

  const mapCenter: [number, number] = [20.422983, -86.922343]; // Cozumel
  const mapMarkers = spots.map((spot) => ({
    position: spot.coords as [number, number],
    label: spot.name,
  }));

  const filteredSpots = spots.filter((s) =>
    (s.name + s.country).toLowerCase().includes(query.toLowerCase())
  );
  const filteredClubs = clubs.filter((c) =>
    (c.name + c.country).toLowerCase().includes(query.toLowerCase())
  );

  const filteredExperiences = clubs.flatMap((club) =>
    club.experiences.filter((xp) =>
      xp.title.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <main style={{ padding: "2rem", maxWidth: "1400px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem", textAlign: "center" }}>
        Bienvenue sur GetMyDive 🌊
      </h1>

      <SearchBar onSearch={setQuery} />

      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Spots de plongée
        </h2>
        <div className="cards-container">
          {filteredSpots.map((spot) => (
            <SpotCard key={spot.slug} {...spot} />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Clubs de plongée
        </h2>
        <div className="cards-container">
          {filteredClubs.map((club) => (
            <ClubCard key={club.slug} {...club} />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Expériences de plongée
        </h2>
        <div className="cards-container">
          {filteredExperiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </section>

      <section id="map-section">
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Carte des spots
        </h2>
        <Map center={mapCenter} markers={mapMarkers} zoom={4} />
      </section>

      <button
        id="show-map-button"
        onClick={() => {
          document.querySelector("#map-section")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Afficher la carte
      </button>
    </main>
  );
}
