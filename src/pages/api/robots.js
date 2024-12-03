export default function handler(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(`User-agent: *
  Disallow: /admin/
  Disallow: /login/
  Disallow: /register/
  Disallow: /cart/
  Disallow: /checkout/
  Disallow: /user/
  Disallow: /settings/
  Disallow: /private/
  Disallow: /wp-admin/
  Disallow: /wp-login.php
  Disallow: /cgi-bin/
  Disallow: /?
  Disallow: /*.php$
  Allow: /wp-admin/admin-ajax.php
  
  # Sitemap
  Sitemap: https://www.springlearns.com/sitemap.xml`);
  }