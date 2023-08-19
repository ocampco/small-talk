import { Locale } from './../constants/locales';

type TranslationContainerProps = {
  nativeLocale?: Locale,
  translationLocale?: Locale,
};

const TranslationContainer = ({
  nativeLocale,
  translationLocale,
}: TranslationContainerProps) => {

  return (
    <h2>translation</h2>
  );
};

export default TranslationContainer;
