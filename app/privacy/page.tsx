export const metadata = {
  title: "Privacy Policy | Raja7",
  description: "Learn how Raja7 protects and handles your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-12 bg-slate-900 rounded-2xl border border-white/5 shadow-2xl mb-24">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
        Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">Policy</span>
      </h1>
      
      <div className="space-y-8 text-slate-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-amber-500 mb-4">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create or modify your account, contact customer support, or otherwise communicate with us. This may include your name, email address, phone number, and payment information required for withdrawals.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-amber-500 mb-4">2. How We Use Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, such as verifying your identity, processing transactions, sending security alerts, and providing customer support. We also use it to monitor and analyze usage and trends to improve your gaming experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-amber-500 mb-4">3. Data Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. Your payment details are fully encrypted and securely processed by our banking partners.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-amber-500 mb-4">4. Sharing of Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our application, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-amber-500 mb-4">5. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </p>
        </section>
        
        <p className="text-sm text-slate-500 pt-8 border-t border-white/10 mt-12">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>
      </div>
    </div>
  );
}
