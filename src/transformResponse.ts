type Match = {
  translation: string,
  segment: string,
};

type Response = {
  matches: Match[],
};

export type TransformedResponse = {
  from: string,
  to: string,
};

const transformResponse = (response: Response): TransformedResponse => {
  const { translation, segment } = response.matches[0];

  return ({
    from: segment,
    to: translation,
  });
};

export default transformResponse;
