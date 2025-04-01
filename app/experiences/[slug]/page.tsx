import { notFound } from "next/navigation";
import clubs from "@/data/clubs.json";
import ExperienceDetails from "@/components/ExperienceDetails";

export async function generateStaticParams() {
  return clubs.flatMap((club) =>
    club.experiences.map((exp) => ({ slug: exp.slug }))
  );
}

export default function ExperiencePage({ params }: { params: { slug: string } }) {
  const experience = clubs
    .flatMap((club) =>
      club.experiences.map((exp) => ({
        ...exp,
        clubSlug: club.slug,
        clubName: club.name,
      }))
    )
    .find((exp) => exp.slug === params.slug);

  if (!experience) return notFound();

  return <ExperienceDetails {...experience} />;
}
