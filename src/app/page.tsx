import Image from "next/image";
import Link from "next/link";
import { howToPlaySteps, site } from "./content";

const featureCards = [
  {
    title: "LAN interface",
    copy: "Creates a local network entry so traditional Bedrock devices can find the private server from their LAN or Friends screen.",
  },
  {
    title: "Bedrock servers",
    copy: "Connects directly to Bedrock-compatible servers using the server domain name and port.",
  },
  {
    title: "Java servers",
    copy: "Works with plugin-enabled Java servers such as Paper or Purpur when GeyserMC and Floodgate are installed.",
  },
  {
    title: "Secure access",
    copy: "Checks admin-provided credentials through a Strapi backend hosted on Render.com, with backend-hashed device fingerprints stored in Supabase Postgres.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="site-shell hero__inner">
          <div className="hero__content">
            <p className="eyebrow">LAN bridge for Minecraft Bedrock devices</p>
            <h1>{site.name}</h1>
            <p className="hero__copy">{site.description}</p>
            <div className="hero__actions" aria-label="Important pages">
              <Link className="button button--primary" href="/privacy-policy">
                Privacy Policy
              </Link>
              <Link className="button button--secondary" href="/support">
                Support
              </Link>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="signal-ring signal-ring--one" />
            <div className="signal-ring signal-ring--two" />
            <Image
              src="/javarock-icon.png"
              alt=""
              width={220}
              height={220}
              priority
              className="hero__logo"
            />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="site-shell">
          <div className="section-heading">
            <p className="eyebrow">What it does</p>
            <h2>A focused bridge tool for private Minecraft servers.</h2>
            <p>
              JavaRock helps devices that cannot normally add custom private servers, including
              iPad, Xbox, and PlayStation, discover a server through your Android phone on the same
              Wi-Fi network.
            </p>
          </div>
          <div className="feature-grid">
            {featureCards.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="site-shell split-section">
          <div>
            <p className="eyebrow">How access works</p>
            <h2>The Android app and Bedrock device must be on the same network.</h2>
          </div>
          <div className="steps">
            <div>
              <span>01</span>
              <p>The user receives a username and password separately from the JavaRock admin.</p>
            </div>
            <div>
              <span>02</span>
              <p>The app verifies access through a secure Strapi backend before the bridge can start.</p>
            </div>
            <div>
              <span>03</span>
              <p>The first successful login assigns those credentials to the smartphone being used.</p>
            </div>
            <div>
              <span>04</span>
              <p>The phone creates the LAN bridge, and the iPad, Xbox, or PlayStation joins from the same Wi-Fi.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="site-shell">
          <div className="section-heading">
            <p className="eyebrow">How to play</p>
            <h2>Start Minecraft and join the LAN World from Worlds.</h2>
            <p>
              Once JavaRock is running, the Bedrock device joins just like a local multiplayer world
              on the same Wi-Fi network.
            </p>
          </div>
          <div className="page-grid">
            {howToPlaySteps.map((step) => (
              <article className="play-card" key={step.title}>
                <span>{step.title}</span>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
