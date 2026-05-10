import app from '../dist/server/server.js';

export default async function handler(req, res) {
  // If the Node.js runtime gives us Express-style req/res, we can use an adapter.
  // But Vercel Node 18+ supports Web APIs if we use standard export default async function(request).
  // Wait, if it receives an incoming Web Request:
  try {
    if (req.url) {
      // Vercel node wrapper gives us IncomingMessage by default.
      // We can create a Request object.
      const url = new URL(req.url, `http://${req.headers.host}`);
      const request = new Request(url, {
        method: req.method,
        headers: req.headers,
        body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined,
        duplex: 'half'
      });
      const response = await app.fetch(request);
      
      const body = await response.text();
      res.status(response.status);
      response.headers.forEach((val, key) => res.setHeader(key, val));
      res.send(body);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}
