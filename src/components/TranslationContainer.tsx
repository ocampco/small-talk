import { useEffect, useState } from 'react';
import { TransformedResponse } from './../transformResponse';
import translateService from './../services/translateService';

type TranslationContainerProps = {
  nativeLocaleCode?: string,
  translationLocaleCode?: string,
};

const TranslationContainer = ({
  nativeLocaleCode,
  translationLocaleCode,
}: TranslationContainerProps) => {
  const [translations, setTranslations] = useState<TransformedResponse[]>([]);

  useEffect(() => {
    // TODO: Handle non-200
    const fetchTranslations = async () => {
      const response: TransformedResponse = await translateService.translate(
        'thank you',
        nativeLocaleCode,
        translationLocaleCode,
      );

      const newTranslations: TransformedResponse[] = [
        ...translations,
        response,
      ];

      setTranslations(newTranslations);
      return response;
    };

    // TODO: Refactor when fetching multiple translations
    if (nativeLocaleCode && translationLocaleCode) {
      console.log('translationLocaleCode=', translationLocaleCode);
      fetchTranslations();
    };

  }, [nativeLocaleCode, translationLocaleCode]);

  return (
    <>
      <h2>translation</h2>
      { translations.map(({ from, to }) =>
         <div key={from}>{from} - {to}</div>
      )}
    </>
  );
};

export default TranslationContainer;
