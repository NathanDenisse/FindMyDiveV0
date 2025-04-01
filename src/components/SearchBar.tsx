"use client";

type Props = {
  onSearch: (value: string) => void;
  onFilter: (filters: {
    level: string;
    animals: string;
    activity: string;
    priceRange: string;
  }) => void;
};

export default function SearchBar({ onSearch, onFilter }: Props) {
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    type: string
  ) => {
    const value = e.target.value;
    onFilter({
      level: "",
      animals: "",
      activity: "",
      priceRange: "",
      [type]: value,
    });
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        className="searchbar-input"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="🔍 Rechercher un spot, un club ou une expérience..."
      />

      <div className="filters-container">
        <div>
          <label htmlFor="activity">Activité</label>
          <select
            id="activity"
            name="activity"
            onChange={(e) => handleFilterChange(e, "activity")}
          >
            <option value="">Toutes</option>
            <option value="Plongée">Plongée</option>
            <option value="Snorkeling">Snorkeling</option>
            <option value="Freediving">Freediving</option>
          </select>
        </div>

        <div>
          <label htmlFor="level">Niveau</label>
          <select
            id="level"
            name="level"
            onChange={(e) => handleFilterChange(e, "level")}
          >
            <option value="">Tous</option>
            <option value="Débutant">Débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Avancé">Avancé</option>
          </select>
        </div>

        <div>
          <label htmlFor="priceRange">Prix</label>
          <select
            id="priceRange"
            name="priceRange"
            onChange={(e) => handleFilterChange(e, "priceRange")}
          >
            <option value="">Tous</option>
            <option value="Bas">Bas</option>
            <option value="Moyen">Moyen</option>
            <option value="Élevé">Élevé</option>
          </select>
        </div>

        <div>
          <label htmlFor="animals">Animaux</label>
          <select
            id="animals"
            name="animals"
            onChange={(e) => handleFilterChange(e, "animals")}
          >
            <option value="">Tous</option>
            <option value="Requins">Requins</option>
            <option value="Raies">Raies</option>
            <option value="Tortues">Tortues</option>
            <option value="Poissons tropicaux">Poissons tropicaux</option>
          </select>
        </div>
      </div>
    </div>
  );
}
