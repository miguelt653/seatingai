module.exports = (req, res) => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<Response>\n  <Gather input="speech dtmf" timeout="5" numDigits="2" action="/api/reserve-date" method="POST">\n    <Say>How many guests will be dining? You can say for example, four.</Say>\n  </Gather>\n  <Say>We did not get your response. Goodbye.</Say>\n  <Hangup/>\n</Response>`;
  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(xml.trim());
};