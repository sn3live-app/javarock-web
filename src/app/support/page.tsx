import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "../components/LegalPage";
import { site } from "../content";

export const metadata: Metadata = {
  title: "Support",
  description: "Support and troubleshooting for JavaRock.",
};

export default function SupportPage() {
  return (
    <LegalPage
      eyebrow="Help and troubleshooting"
      title="Support"
      intro="Most JavaRock issues are caused by local network discovery, server compatibility, or device identifier binding."
    >
      <h2>Contact</h2>
      <p>
        For help, email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. Include
        your JavaRock username, Android model, and the exact error message shown in the app.
      </p>

      <h2>Common Checks</h2>
      <ul>
        <li>Make sure the Android app and the Bedrock device are on the same Wi-Fi network.</li>
        <li>Disable guest Wi-Fi or router isolation if devices cannot see each other.</li>
        <li>For Bedrock servers, confirm the server domain name and port are correct.</li>
        <li>
          For Java servers, use a plugin-enabled server such as Paper or Purpur with GeyserMC and
          Floodgate enabled.
        </li>
        <li>Confirm your login has not already been assigned to another smartphone.</li>
      </ul>

      <h2>Device Binding</h2>
      <p>
        Username and password credentials are provided separately by the admin. After first use, the
        login is assigned to that smartphone. If the device identifier needs to be canceled, write
        to{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> or use the{" "}
        <Link href="/data-deletion">Data Deletion</Link> page.
      </p>

      <h2>Privacy and Terms</h2>
      <p>
        Review the <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
        <Link href="/terms">Terms of Use</Link> for details about data collection and account
        restrictions.
      </p>
    </LegalPage>
  );
}
