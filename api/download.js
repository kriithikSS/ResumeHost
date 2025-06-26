export default async function handler(req, res) {
  res.setHeader('Content-Disposition', 'attachment; filename="resume.pdf"');
  res.redirect(302, '/resume.pdf');  // Redirect to the public file
}
