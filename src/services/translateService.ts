import transformResponse from './../transformResponse';
import { TRANSLATE_SERVICE_ORIGIN } from './../constants/config';

const translateService = {
  translate: async (
    query: string,
    from?: string,
    to?: string,
  ) => {
    const encodedQuery = encodeURI(query);
    const url = `${TRANSLATE_SERVICE_ORIGIN}/get?q=${encodedQuery}&langpair=${from}|${to}`;
    const response = await fetch(url);
    const json = await response.json();
    const translation = await transformResponse(json);

    return translation;
  },
} ;

export default translateService;
