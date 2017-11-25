import colorOf from 'color-of';

function createHeaders(key) {
  const headers = new Headers();
  headers.append('Host', 'api.cognitive.microsoft.com');
  headers.append('Content-Type', 'multipart/form-data');
  headers.append('Ocp-Apim-Subscription-Key', key);
  return headers;
}

export async function validateSubscriptionKey(key) {
  const init = {
    method: 'POST',
    headers: createHeaders(key),
  };
  try {
    const response = await fetch(
      'https://api.cognitive.microsoft.com/bing/v5.0/images/search',
      init,
    );

    // get status code 401 if there is an auth issue
    return response.status !== 401;
  } catch (error) {
    return false;
  }
}

export function colorize(apiKey, palette, query) {
  const options = {
    query,
    bingApiKey: apiKey,
    numResults: 50,
    palette,
  };
  return colorOf(query, options);
}
