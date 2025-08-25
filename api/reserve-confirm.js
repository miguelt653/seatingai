module.exports = (req, res) => {
  const guests = decodeURIComponent(req.query && req.query.guests ? req.query.guests : '');
  const date = decodeURIComponent(req.query && req.query.date ? req.query.date : '');
  const time = decodeURIComponent(req.query && req.query.time ? req.query.time : '');
  const params = req.body || {};
  const name = (params.SpeechResult || '').trim();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<Response>\n  <Say>Thank you ${name}. Your reservation for ${guests} guest${guests === '1' ? '' : 's'} on ${date} at ${time} has been received. We look forward to serving you. Goodbye.</Say>\n  <Hangup/>\n</Response>`;
  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(xml.trim());
};