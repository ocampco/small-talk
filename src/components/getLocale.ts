import locales, { Locale } from './../constants/locales';

const getLocales = (localeCode: string | null): Locale | undefined =>
  locales.find(({ code }) => code === localeCode)

export default getLocales;


