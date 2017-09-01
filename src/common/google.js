import colorOf from 'color-of';

export default function colorize(cseId, apiKey, query) {
  const options = {
    query,
    googleCseId: cseId,
    googleApiKey: apiKey,
    numResults: 10,
    palette: 'css',
  };
  return colorOf(query, options);
}
