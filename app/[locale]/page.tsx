import { getTranslations, setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";

export default async function Home({
  
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeFromParams } = await params;

  // Ensure server translations use the URL locale.
  setRequestLocale(localeFromParams);

  const t = await getTranslations({ locale: localeFromParams, namespace: "home" });

  return (
    <>
    <Hero
      title={t("title")}
      subtitle={t("subtitle")}
    />
    <ProjectsSection />
    </>

  );
}
