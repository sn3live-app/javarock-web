import Link from "next/link";
import { navItems, site } from "../content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__inner">
        <div>
          <p className="site-footer__brand">{site.name}</p>
          <p className="muted">Built for private Minecraft LAN bridge access.</p>
        </div>
        <nav className="site-footer__links" aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
