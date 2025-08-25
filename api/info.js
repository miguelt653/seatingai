module.exports = (req, res) => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<Response>\n  <Say>Our restaurant is open daily from 5 P M to 10 P M. We are located at 123 Main Street. We look forward to welcoming you.</Say>\n  <Hangup/>\n</Response>`;
  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(xml.trim());
};