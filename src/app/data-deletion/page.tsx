import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";
import { site } from "../content";

export const metadata: Metadata = {
  title: "Data Deletion",
  description: "How to request cancellation of a JavaRock device ID binding.",
};

export default function DataDeletionPage() {
  return (
    <LegalPage
      eyebrow="Device ID binding"
      title="Data Deletion"
      intro="Use this page to request cancellation of the Android device ID linked to your JavaRock login."
    >
      <h2>How To Request Deletion</h2>
      <p>
        Send an email to <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> with the
        subject line <strong>JavaRock device ID cancellation</strong>.
      </p>
      <p>Include the following details so we can find the right record:</p>
      <ul>
        <li>Your JavaRock username.</li>
        <li>The Android device used with the app, if known.</li>
        <li>Whether you want the device ID canceled or the full login record removed.</li>
      </ul>

      <h2>What We Delete</h2>
      <p>When a device ID cancellation request is approved, we remove or reset:</p>
      <ul>
        <li>Stored Android device ID.</li>
        <li>Any active access token linked to that device ID.</li>
      </ul>
      <p>
        If you request full access record removal, the admin-provided username record can also be
        removed or disabled.
      </p>

      <h2>Device Reset Option</h2>
      <p>
        If you are moving to a new phone, request a device reset. A reset removes the saved Android
        device ID while keeping the admin-provided username available for reactivation on the new
        phone.
      </p>

      <h2>Timing</h2>
      <p>
        We aim to complete deletion or reset requests within 30 days. Some minimal records may be
        retained when needed for security, fraud prevention, dispute handling, or legal compliance.
      </p>

      <h2>After Deletion</h2>
      <p>
        Once the device ID is canceled, the same login can be assigned again when it is next used on
        an approved smartphone.
      </p>
    </LegalPage>
  );
}
