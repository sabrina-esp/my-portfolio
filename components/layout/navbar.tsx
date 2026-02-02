"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const otherLocale = locale === "en" ? "de" : "en";

  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <h1 className="text-lg font-semibold">Sabrina</h1>
        {/* <span className="text-xs text-zinc-500 dark:text-zinc-400">({locale})</span> */}

        <nav className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/">{t("home")}</Link>
          <Link href="/projects">{t("projects")}</Link>
          <Link href="/blog">{t("blog")}</Link>
          <Link href="/contact">{t("contact")}</Link>

          {/* Language switch */}
          <Link
            href={pathname}
            locale={otherLocale}
            className="ml-4 rounded border px-2 py-1 text-xs"
          >
            {otherLocale.toUpperCase()}
          </Link>
        </nav>
      </div>
    </header>
  );
}
