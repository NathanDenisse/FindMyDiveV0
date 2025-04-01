"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import SearchBar from "@/components/SearchBar";
import SpotCard from "@/components/SpotCard";
import ClubCard from "@/components/ClubCard";
import ExperienceCard from "@/components/ExperienceCard";

import spots from "@/data/spots.json";
import clubs from "@/data/clubs.json";

// Map dynamique (pas de SSR)
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    activity: "",
    level: "",
    priceRange: "",
    animals: "",
  });

  const mapCenter: [number, number] = [20.422983, -86.922343];
  const mapMarkers = spots.map((spot) => ({
    position: spot.coords as [number, number],
    label: spot.name,
  }));

  const filteredSpots = spots.filter((s) => {
    return (
      (s.name + s.country).toLowerCase().includes(query.toLowerCase()) &&
      (!filters.activity || s.activity.toLowerCase().includes(filters.activity.toLowerCase())) &&
      (!filters.level || s.level.toLowerCase().includes(filters.level.toLowerCase())) &&
      (!filters.priceRange || s.price.toLowerCase().includes(filters.priceRange.toLowerCase())) &&
      (!filters.animals || s.animals.some(animal => animal.toLowerCase().includes(filters.animals.toLowerCase())))
    );
  });

  const filteredClubs = clubs.filter((c) => {
    return (
      (c.name + c.country).toLowerCase().includes(query.toLowerCase()) &&
      (!filters.activity || c.activity.toLowerCase().includes(filters.activity.toLowerCase()))
    );
  });

  const filteredExperiences = clubs.flatMap((club) =>
    club.experiences
      .filter((xp) => xp.title.toLowerCase().includes(query.toLowerCase()))
      .map((xp) => ({
        ...xp,
        clubSlug: club.slug,
        clubName: club.name,
      }))
  );

  return (
    <main>
      <h1 className="home-title">Bienvenue sur GetMyDive 🌊</h1>

      <SearchBar onSearch={setQuery} onFilter={setFilters} />

      {/* Spots */}
      <section className="home-section">
        <div className="home-section-header">
          <h2 className="section-title">Spots de plongée</h2>
          <Link href="/spots" className="section-link">Voir tous les spots</Link>
        </div>
        <div className="horizontal-scroll-container">
          {filteredSpots.map((spot) => (
            <SpotCard key={spot.slug} {...spot} coords={spot.coords as [number, number]} />
          ))}
        </div>
      </section>

      {/* Clubs */}
      <section className="home-section">
        <div className="home-section-header">
          <h2 className="section-title">Clubs de plongée</h2>
          <Link href="/clubs" className="section-link">Voir tous les clubs</Link>
        </div>
        <div className="horizontal-scroll-container">
          {filteredClubs.map((club) => (
            <ClubCard key={club.slug} {...club} />
          ))}
        </div>
      </section>

      {/* Expériences */}
      <section className="home-section">
        <div className="home-section-header">
          <h2 className="section-title">Expériences de plongée</h2>
          <Link href="/experiences" className="section-link">Voir toutes les expériences</Link>
        </div>
        <div className="horizontal-scroll-container">
          {filteredExperiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </section>

      {/* Carte */}
      <section className="home-section">
        <h2 className="section-title">Carte des spots</h2>
        <Map center={mapCenter} zoom={4} markers={mapMarkers} />
      </section>

      <button
        id="show-map-button"
        onClick={() => {
          document.querySelector("section:last-of-type")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Afficher la carte
      </button>
    </main>
  );
}
