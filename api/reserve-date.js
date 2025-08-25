module.exports = (req, res) => {
  const params = req.body || {};
  const guestsRaw = (params.SpeechResult || params.Digits || '').trim();
  const guests = encodeURIComponent(guestsRaw);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<Response>\n  <Gather input="speech" timeout="5" action="/api/reserve-time?guests=${guests}" method="POST">\n    <Say>Great. On which date would you like the reservation? For example, say July fourth.</Say>\n  </Gather>\n  <Say>We did not get your response. Goodbye.</Say>\n  <Hangup/>\n</Response>`;
  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(xml.trim());
};