import { getTranslations, setRequestLocale } from "next-intl/server";

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
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Server locale: {localeFromParams}
        </p> */}
        <h1 className="text-5xl font-semibold tracking-tight">{t("title")}</h1>

        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          {t("subtitle")}
        </p>
      </div>
    </main>
  );
}
