"use client";

type Props = {
  onSearch: (value: string) => void;
  onFilter: (filters: { level: string, animals: string }) => void;
};

export default function SearchBar({ onSearch, onFilter }: Props) {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>, type: string) => {
    const value = e.target.value;
    if (type === "level") {
      onFilter({ level: value, animals: "" });
    } else {
      onFilter({ level: "", animals: value });
    }
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="🔍 Rechercher un spot ou un club..."
        style={{
          width: "100%",
          padding: "0.75rem 1rem",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
      <select
        onChange={(e) => handleFilterChange(e, "level")}
        style={{
          width: "100%",
          padding: "0.75rem 1rem",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginTop: "1rem",
        }}
      >
        <option value="">Filtrer par niveau</option>
        <option value="Débutant">Débutant</option>
        <option value="Niveau 2">Niveau 2</option>
        <option value="Avancé">Avancé</option>
      </select>
      <select
        onChange={(e) => handleFilterChange(e, "animals")}
        style={{
          width: "100%",
          padding: "0.75rem 1rem",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginTop: "1rem",
        }}
      >
        <option value="">Filtrer par animaux</option>
        <option value="Poissons tropicaux">Poissons tropicaux</option>
        <option value="Raies mantas">Raies mantas</option>
        <option value="Requins de récif">Requins de récif</option>
      </select>
    </div>
  );
}
