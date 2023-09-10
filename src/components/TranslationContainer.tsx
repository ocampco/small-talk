// import { useEffect, useState } from 'react';
// import phrases from './../constants/phrases';

type TranslationContainerProps = {
  nativeLocaleCode?: string,
  translationLocaleCode?: string,
};

const TranslationContainer = ({
  nativeLocaleCode,
  translationLocaleCode,
}: TranslationContainerProps) => {
  // let translations: TransformedResponse[] = [];

  // TODO: Handle non-200
  // const fetchTranslation = (phrase: string) =>
  //   translateService.translate(
  //     phrase,
  //     nativeLocaleCode,
  //     translationLocaleCode,
  //   );

  // const fetchTranslations = () => {
  //   phrases.forEach(async (phrase) => {
  //     if (translations.length !== phrases.length) {
  //       const translation = await fetchTranslation(phrase);
  //       translations.push(translation);
  //       console.log('pushing translation=', translation);
  //     };
  //   });
  // };

  return (
    <>
      <h2>translation</h2>
    </>
  );
};

export default TranslationContainer;
