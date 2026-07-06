export const metadata = {
  title: "Terms of Service | Raja7",
  description: "Read the Terms of Service and User Agreement for playing on Raja7.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-12 bg-slate-900 rounded-2xl border border-white/5 shadow-2xl mb-24">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
        Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">Service</span>
      </h1>
      
      <div className="space-y-8 text-slate-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-amber-500 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and downloading the Raja7 application, you accept and agree to be bound by the terms and provisions of this agreement. Furthermore, when using Raja7's specific services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-amber-500 mb-4">2. Eligibility</h2>
          <p>
            You must be at least 18 years of age to use our services. Our services are only available to users located in jurisdictions where participation in real-money skill gaming is legal. You are entirely responsible for verifying the legality of your participation in your local jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-amber-500 mb-4">3. Account Registration</h2>
          <p>
            You may be required to register an account to access certain features. You must provide accurate, current, and complete information during the registration process. You are solely responsible for safeguarding your password and any activities or actions under your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-amber-500 mb-4">4. Financial Transactions</h2>
          <p>
            All deposits and withdrawals are processed securely. However, you acknowledge that real-money gaming involves a degree of financial risk. You should only play with money you can afford to lose. Raja7 is not liable for any financial losses incurred while using the platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-amber-500 mb-4">5. Account Termination</h2>
          <p>
            We reserve the right to terminate or suspend access to our application immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
        </section>
        
        <p className="text-sm text-slate-500 pt-8 border-t border-white/10 mt-12">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>
      </div>
    </div>
  );
}
