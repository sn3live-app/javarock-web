import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";
import { site } from "../content";

export const metadata: Metadata = {
  title: "Terms",
  description: "Basic terms for using JavaRock.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow={`Effective ${site.effectiveDate}`}
      title="Terms of Use"
      intro="These terms explain the basic rules for using JavaRock and the limits of what the app provides."
    >
      <h2>Use of JavaRock</h2>
      <p>
        JavaRock is provided as a private LAN bridge utility for approved users. It helps Bedrock
        devices such as iPad, Xbox, and PlayStation connect to approved Minecraft servers through a
        local network interface.
      </p>

      <h2>Account Access</h2>
      <p>
        JavaRock usernames and passwords are provided separately by the admin. After first use, those
        credentials may be assigned to the smartphone used for activation. Sharing credentials,
        bypassing access controls, or attempting to use another user login may result in access
        being disabled.
      </p>

      <h2>Minecraft Services</h2>
      <p>
        JavaRock is an independent app. It is not affiliated with Mojang, Microsoft, Xbox,
        PlayStation, Minecraft, GeyserMC, Floodgate, Paper, Purpur, or Aternos. Minecraft names and
        related marks belong to their respective owners.
      </p>

      <h2>Server Compatibility</h2>
      <p>
        JavaRock does not host Minecraft worlds and does not guarantee that every server will work.
        Bedrock servers connect through their server domain name and port. Java servers need a
        plugin-enabled setup such as Paper or Purpur with GeyserMC and Floodgate enabled. The Android
        app and Bedrock device must be on the same network for LAN discovery.
      </p>

      <h2>No Bypass of Paid Accounts</h2>
      <p>
        JavaRock does not bypass Minecraft or Java account requirements. Users are responsible for
        following Minecraft, server, and platform rules.
      </p>

      <h2>Availability</h2>
      <p>
        The app and backend may be updated, paused, or discontinued. We try to keep access stable,
        but uninterrupted availability is not guaranteed.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
      </p>
    </LegalPage>
  );
}
