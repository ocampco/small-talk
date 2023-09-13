import LanguageSelect from './LanguageSelect';

type LanguageContainerProps = {
  toCode: string | null,
};

const LanguageContainer = ({
  toCode,
}: LanguageContainerProps) => {

  return (
    <>
      <LanguageSelect toCode={toCode} />
    </>
  );
};

export default LanguageContainer;
