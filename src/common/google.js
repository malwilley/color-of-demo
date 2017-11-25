import colorOf from 'color-of';

export default function colorize(cseId, apiKey, palette, query) {
  const options = {
    query,
    googleCseId: cseId,
    googleApiKey: apiKey,
    numResults: 10,
    palette,
  };
  return colorOf(query, options);
}
