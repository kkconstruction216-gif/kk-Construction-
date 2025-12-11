import React, { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-100 mt-20 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0C226B] mb-6">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          Last Updated: January 2026
        </p>

        {/* Intro */}
        <section className="mb-6">
          <p className="text-gray-700 leading-relaxed">
            At KK Construction, we value your trust and are committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, store, and safeguard your data when you use our
            website or contact us for services.
          </p>
        </section>

        {/* What we collect */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
            <li>
              <strong>Personal Information:</strong> Name, phone number, email
              address, and location when you fill out forms or contact us.
            </li>
            <li>
              <strong>Technical Information:</strong> IP address, browser type,
              device details, and pages visited.
            </li>
            <li>
              <strong>Project Information:</strong> Details you provide related
              to construction or design requirements.
            </li>
          </ul>
        </section>

        {/* How we use */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
            <li>To respond to your inquiries and provide requested services.</li>
            <li>
              To create quotations, design plans, and project documentation.
            </li>
            <li>To improve our website’s performance and user experience.</li>
            <li>To send updates or promotional communications (only if opted in).</li>
          </ul>
        </section>

        {/* Sharing info */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            3. Sharing of Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell or trade your personal information. However, we may
            share it with:
          </p>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-2">
            <li>
              Verified third-party vendors (e.g., material suppliers, surveyors)
              essential for completing your project.
            </li>
            <li>
              Legal authorities if required for compliance with the law.
            </li>
          </ul>
        </section>

        {/* Data protection */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            4. Data Protection & Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We implement technical and organizational measures to safeguard your
            personal information from unauthorized access, misuse, or loss.
            However, no online data transmission is 100% secure, and we cannot
            guarantee absolute protection.
          </p>
        </section>

        {/* Cookies */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            5. Cookies & Tracking Technologies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may use cookies to enhance user experience and analyze
            traffic. You may choose to disable cookies in your browser settings,
            but this may impact certain website functionalities.
          </p>
        </section>

        {/* Your rights */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            6. Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-2">
            <li>Request access to the information we store.</li>
            <li>Ask for correction of inaccurate or outdated data.</li>
            <li>Request deletion of your personal information.</li>
            <li>Withdraw consent for marketing communications.</li>
          </ul>
        </section>

        {/* External links */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            7. External Links
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain external links to social media or other
            websites. We are not responsible for the privacy practices of those
            external platforms.
          </p>
        </section>

        {/* Updates */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            8. Updates to This Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            9. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For questions or concerns related to this Privacy Policy, reach us at:
          </p>
          <ul className="mt-3 text-gray-700 leading-relaxed">
            <li>📞 +91 83191 82281</li>
            <li>✉️ kkconstruction881@gmail.com</li>
            <li>📍 Umarpoti, Main Road, Newai, Bhilai, Chhattisgarh</li>
          </ul>
        </section>

        <p className="text-center text-gray-600 text-sm mt-6">
          © 2025 KK Construction. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
