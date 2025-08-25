module.exports = (req, res) => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<Response>\n  <Gather input="speech" timeout="5" action="/api/modify-confirm" method="POST">\n    <Say>Please say your name or confirmation code to modify your reservation.</Say>\n  </Gather>\n  <Say>We did not get your response. Goodbye.</Say>\n  <Hangup/>\n</Response>`;
  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(xml.trim());
};