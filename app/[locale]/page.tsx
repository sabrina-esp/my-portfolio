import { getTranslations, setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure server translations use the URL locale.
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <>
      <Hero title={t("title")} subtitle={t("subtitle")} />
      <ProjectsSection />
    </>
  );
}
