module.exports = (req, res) => {
  const params = req.body || {};
  const speechResult = (params.SpeechResult || '').toLowerCase();
  const digits = params.Digits || '';
  const choice = speechResult || digits;
  let redirectPath = '';
  if (choice.includes('1') || choice.includes('new')) {
    redirectPath = '/api/reserve-guests';
  } else if (choice.includes('2') || choice.includes('modify') || choice.includes('cancel')) {
    redirectPath = '/api/modify-start';
  } else if (choice.includes('3') || choice.includes('info')) {
    redirectPath = '/api/info';
  } else {
    const xmlFail = `<?xml version="1.0" encoding="UTF-8"?>\n<Response>\n  <Say>Sorry, we did not understand your response.</Say>\n  <Hangup/>\n</Response>`;
    res.setHeader('Content-Type', 'text/xml');
    return res.status(200).send(xmlFail.trim());
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<Response>\n  <Redirect method="POST">${redirectPath}</Redirect>\n</Response>`;
  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(xml.trim());
};