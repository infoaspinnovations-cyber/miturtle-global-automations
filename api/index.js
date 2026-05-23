import server from "../dist/server/index.js";

export default async function handler(req, res) {
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers.host || "localhost";
  const url = new URL(req.url ?? "/", `${protocol}://${host}`);

  const request = new Request(url.toString(), {
    method: req.method,
    headers: req.headers,
    body: ["GET", "HEAD"].includes(req.method) ? null : req,
  });

  const response = await server.fetch(request, undefined, undefined);

  res.statusCode = response.status;
  const headers = {};
  for (const [key, value] of response.headers) {
    const normalizedKey = key.toLowerCase();
    if (Object.prototype.hasOwnProperty.call(headers, normalizedKey)) {
      const existing = headers[normalizedKey];
      headers[normalizedKey] = Array.isArray(existing)
        ? [...existing, value]
        : [existing, value];
    } else {
      headers[normalizedKey] = value;
    }
  }
  for (const [key, value] of Object.entries(headers)) {
    res.setHeader(key, value);
  }

  const body = Buffer.from(await response.arrayBuffer());
  res.end(body);
}
