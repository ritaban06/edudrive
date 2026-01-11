import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex items-start justify-center py-12 px-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: January 11, 2026</p>
        
        <div className="prose prose-sm md:prose-base max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Welcome to EduDrive. We are committed to protecting your personal information and your right to privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
              our platform and services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using EduDrive, you agree to the collection and use of information in accordance with this policy. 
              If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              When you register and use EduDrive, we collect the following personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
              <li>Name and email address (via Google OAuth)</li>
              <li>Profile picture (if provided through your Google account)</li>
              <li>Educational information (department, year, semester)</li>
              <li>Access tags and permissions assigned by administrators</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Usage Data</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              We automatically collect certain information when you use our platform:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
              <li>Device information (browser type, operating system, device identifiers)</li>
              <li>Log data (IP address, access times, pages viewed, navigation paths)</li>
              <li>PDF viewing and interaction data (documents accessed, time spent, annotations created)</li>
              <li>Search queries and folder navigation patterns</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Authentication Data</h3>
            <p className="text-gray-700 leading-relaxed">
              We use Google OAuth 2.0 for authentication. When you sign in with Google, we receive your basic 
              profile information (name, email, profile picture) as authorized by you. We do not store your 
              Google password.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
              <li><strong>Service Provision:</strong> To provide, operate, and maintain our educational platform</li>
              <li><strong>Authentication:</strong> To verify your identity and manage your account access</li>
              <li><strong>Access Control:</strong> To enforce folder and PDF permissions based on your access tags</li>
              <li><strong>Content Delivery:</strong> To stream and display PDFs securely with appropriate restrictions</li>
              <li><strong>Analytics:</strong> To understand usage patterns and improve our services</li>
              <li><strong>Communication:</strong> To send you service-related notifications and updates</li>
              <li><strong>Security:</strong> To detect, prevent, and address security issues and fraudulent activity</li>
              <li><strong>Compliance:</strong> To comply with legal obligations and enforce our policies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share specific information</li>
              <li><strong>Service Providers:</strong> With trusted third-party services (Google Drive, hosting providers) 
              necessary to operate our platform</li>
              <li><strong>Educational Institution:</strong> With your institution's administrators who manage access and permissions</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental regulations</li>
              <li><strong>Security Purposes:</strong> To protect our rights, property, safety, or that of our users</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
              <li>Encrypted data transmission using SSL/TLS protocols</li>
              <li>Secure authentication via Google OAuth 2.0</li>
              <li>JWT token-based session management</li>
              <li>Role-based access control (RBAC) for content protection</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Protected PDF streaming to prevent unauthorized downloads</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              However, no method of transmission over the internet is 100% secure. While we strive to protect 
              your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              We use cookies and similar tracking technologies to enhance your experience:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
              <li><strong>Essential Cookies:</strong> Required for authentication and platform functionality</li>
              <li><strong>Authentication Tokens:</strong> To maintain your logged-in session securely</li>
              <li><strong>Preference Cookies:</strong> To remember your settings and preferences</li>
              <li><strong>Analytics:</strong> To understand how users interact with our platform (Vercel Analytics)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You can control cookies through your browser settings, but disabling certain cookies may limit 
              your ability to use some features of our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
              <li><strong>Access:</strong> Request access to your personal data we hold</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a structured format</li>
              <li><strong>Opt-out:</strong> Withdraw consent for certain data processing activities</li>
              <li><strong>Objection:</strong> Object to processing of your personal data in certain circumstances</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise these rights, please contact your institution's administrator or reach out to us 
              using the contact information below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              EduDrive integrates with the following third-party services:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
              <li><strong>Google OAuth & Drive:</strong> For authentication and file storage 
              (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
              className="text-purple-600 hover:text-purple-800 underline">Google Privacy Policy</a>)</li>
              <li><strong>Vercel:</strong> For hosting and analytics 
              (<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" 
              className="text-purple-600 hover:text-purple-800 underline">Vercel Privacy Policy</a>)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These services have their own privacy policies. We encourage you to review them to understand 
              how they handle your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined 
              in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. 
              When you delete your account or upon request, we will delete or anonymize your personal data, 
              except where retention is required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              EduDrive is designed for use by college and university students. We do not knowingly collect 
              personal information from children under 13. If you believe we have inadvertently collected 
              information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or 
              legal requirements. We will notify you of any material changes by posting the new Privacy Policy 
              on this page and updating the "Last Updated" date. Your continued use of EduDrive after such 
              changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-gray-700 mb-1"><strong>Support:</strong> iamreallynotfound@proton.me</p>
              <p className="text-gray-700"><strong>Administrator:</strong> Contact your institution's EduDrive administrator</p>
            </div>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              By using EduDrive, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
