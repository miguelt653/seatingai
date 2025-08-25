module.exports = (req, res) => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<Response>\n  <Gather input="speech dtmf" timeout="5" numDigits="1" action="/api/process-intent" method="POST">\n    <Say>Welcome to Seating AI. Press 1 or say new to book a new reservation. Press 2 or say modify to change or cancel an existing reservation. Press 3 or say info if you have a question about the restaurant.</Say>\n  </Gather>\n  <Say>Sorry, we did not receive your response. Please call back later. Goodbye.</Say>\n  <Hangup/>\n</Response>`;
  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(xml.trim());
};