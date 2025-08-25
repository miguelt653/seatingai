module.exports = (req, res) => {
  const guests = decodeURIComponent(req.query && req.query.guests ? req.query.guests : '');
  const date = decodeURIComponent(req.query && req.query.date ? req.query.date : '');
  const params = req.body || {};
  const timeRaw = (params.SpeechResult || '').trim();
  const time = encodeURIComponent(timeRaw);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<Response>\n  <Gather input="speech" timeout="5" action="/api/reserve-confirm?guests=${encodeURIComponent(guests)}&date=${encodeURIComponent(date)}&time=${time}" method="POST">\n    <Say>Please tell me the name for the reservation.</Say>\n  </Gather>\n  <Say>We did not get your response. Goodbye.</Say>\n  <Hangup/>\n</Response>`;
  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(xml.trim());
};