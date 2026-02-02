import {getRequestConfig} from "next-intl/server";

const locales = ["en", "de"] as const;
const defaultLocale = "en";

export default getRequestConfig(async ({locale}) => {
  const resolvedLocale =
    locale && (locales as readonly string[]).includes(locale)
      ? locale
      : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default
  };
});
