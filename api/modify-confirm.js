module.exports = (req, res) => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<Response>\n  <Say>Thank you. A host will assist you shortly.</Say>\n  <Hangup/>\n</Response>`;
  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(xml.trim());
};