export default function handler(req, res) {
  res.setHeader('Content-Disposition', 'attachment; filename="kriithik_resume.pdf"');
  res.redirect(302, '/resume.pdf');
}
