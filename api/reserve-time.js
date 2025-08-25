module.exports = (req, res) => {
  const guests = decodeURIComponent(req.query && req.query.guests ? req.query.guests : '');
  const params = req.body || {};
  const dateRaw = (params.SpeechResult || '').trim();
  const date = encodeURIComponent(dateRaw);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<Response>\n  <Gather input="speech" timeout="5" action="/api/reserve-name?guests=${encodeURIComponent(guests)}&date=${date}" method="POST">\n    <Say>At what time? You can say, for example, seven P M.</Say>\n  </Gather>\n  <Say>We did not get your response. Goodbye.</Say>\n  <Hangup/>\n</Response>`;
  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(xml.trim());
};