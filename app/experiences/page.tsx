import ExperienceCard from "@/components/ExperienceCard";
import clubs from "@/data/clubs.json";

type Experience = {
  slug: string;
  title: string;
  description: string;
  price: string;
  level: string;
  activity: string;
  animals: string[];
  image: string;
  rating: number;
};

export default function ExperiencesPage() {
  const allExperiences: Experience[] = clubs.flatMap((club) =>
    club.experiences.map((exp) => ({
      ...exp,
      slug: exp.slug,
    }))
  );

  return (
    <main>
      <h1 className="section-title">Expériences de plongée</h1>
      <div className="cards-container">
        {allExperiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </main>
  );
}
