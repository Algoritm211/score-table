

export const sse = new EventSource(
  'http://localhost:5000',
  { withCredentials: true });
