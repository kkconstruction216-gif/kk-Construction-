import React, { useEffect } from "react";

export default function TermsAndConditions() {

useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="bg-gray-100 mt-20 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0C226B] mb-6">
          Terms & Conditions
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          Last Updated: January 2025
        </p>

        {/* Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            1. General Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            KK Construction provides civil construction and architectural design
            services. All information on this website is for general guidance
            and does not constitute a binding agreement unless stated otherwise.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            2. Service Agreement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Any construction, renovation, or design service will proceed only
            after signing a formal written agreement. Project scope, pricing,
            materials, and deadlines will be clearly defined in the agreement.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            3. Pricing & Payments
          </h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
            <li>All estimates are subject to change based on material rates and availability.</li>
            <li>Advance payment is required before project initiation.</li>
            <li>Delayed payments may pause work progress.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            4. Project Timelines
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We aim to complete all projects on schedule. However, delays may
            occur due to weather, government approvals, material shortages, or
            other unforeseen circumstances. KK Construction is not liable for
            delays beyond its control.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            5. Client Responsibilities
          </h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
            <li>Provide accurate project details and approved documentation.</li>
            <li>Ensure site access during working hours.</li>
            <li>Obtain necessary legal permissions before construction begins.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            6. Liability Disclaimer
          </h2>
          <p className="text-gray-700 leading-relaxed">
            KK Construction is not responsible for damages caused by third-party
            contractors, incorrect client information, or misuse of structure
            after handover. Website content may contain errors or become
            outdated, and should not be the sole basis for decision-making.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            7. Intellectual Property
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All designs, images, logos, and content on this website are the
            property of KK Construction. Unauthorized copying, distribution, or
            usage is strictly prohibited without written permission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            8. Cancellation Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Project cancellations after confirmation may incur charges based on
            administrative work, material orders, and labor allocation. Refunds
            will depend on completed work percentage.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            9. Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We value your privacy and protect your personal information.
            Specific details can be found in our Privacy Policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            10. Updates to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            KK Construction may update or modify these Terms & Conditions at any
            time. Any changes will be posted on this page with an updated
            revision date.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">
            11. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For questions related to these Terms & Conditions, reach us at:
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
