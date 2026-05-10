import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "../components/LegalPage";
import { site } from "../content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the JavaRock Android app.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow={`Effective ${site.effectiveDate}`}
      title="Privacy Policy"
      intro="This Privacy Policy explains what JavaRock collects, why it is collected, how it is protected, and how users can request deletion."
    >
      <h2>Who We Are</h2>
      <p>
        JavaRock is operated by {site.developer}. JavaRock creates a LAN interface from an Android
        phone so traditional Bedrock devices such as iPad, Xbox, and PlayStation can connect to
        approved private Minecraft servers.
      </p>

      <h2>Information We Collect</h2>
      <p>
        JavaRock does not collect personal profile data, server names, server domain names, server
        IP addresses, or server port numbers. The only device data collected by the app is a hashed
        device identifier, which is used to prevent the same login credentials from being reused on
        another smartphone.
      </p>
      <p>
        To keep the same phone recognized across reinstallations and app builds, JavaRock first
        checks for a Widevine device identifier, then the Android SSAID, and finally the Advertising
        ID if the first two are unavailable. The Advertising ID is used only for access control, not
        for ads, profiling, or tracking.
      </p>
      <p>
        The user enters a username and password provided separately by the JavaRock admin. Those
        credentials are used only to verify access and assign the login to the smartphone after first
        use.
      </p>
      <p>JavaRock does not collect:</p>
      <ul>
        <li>Precise location.</li>
        <li>Contacts, photos, microphone recordings, or payment details.</li>
        <li>Analytics tracking profiles.</li>
        <li>Minecraft account passwords.</li>
        <li>Server connection details such as server name, domain, IP address, or port.</li>
      </ul>

      <h2>How We Use Information</h2>
      <ul>
        <li>To verify that admin-provided login credentials are allowed to use JavaRock.</li>
        <li>To bind those login credentials to the first smartphone used for activation.</li>
        <li>To stop the same login credentials from being shared across multiple smartphones.</li>
      </ul>

      <h2>Data Sharing</h2>
      <p>
        JavaRock does not sell user data and does not use user data for advertising. Device ID and
        access-check data may be processed by the hosting and database providers used to run the
        JavaRock access system.
      </p>

      <h2>Security</h2>
      <p>
        JavaRock uses HTTPS for backend communication where available and limits stored device data
        to access-control purposes. No system can be guaranteed perfectly secure, but we use
        reasonable safeguards for the type of data handled.
      </p>

      <h2>Retention</h2>
      <p>
        Device identifier binding information is kept while the login is authorized to use the app.
        It can be canceled when access is no longer needed or when the user needs to move to another
        phone.
      </p>

      <h2>Deletion Requests</h2>
      <p>
        Users can request cancellation of the stored device identifier from the{" "}
        <Link href="/data-deletion">Data Deletion</Link> page or by writing to{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
      </p>

      <h2>Children</h2>
      <p>
        JavaRock is not directed to children without parent or guardian permission. If you believe a
        child provided personal information without appropriate permission, contact us so we can
        review and remove the information.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, contact{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this Privacy Policy as the app or backend changes. The effective date above
        will be updated when meaningful changes are made.
      </p>
    </LegalPage>
  );
}
