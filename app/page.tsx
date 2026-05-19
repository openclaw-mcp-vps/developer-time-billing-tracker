export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Freelance &amp; Agency Billing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Billable Hours Across{" "}
          <span className="text-[#58a6ff]">Dev Environments</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          DevBill monitors active coding time across your IDEs, terminals, and browsers — automatically — so you never lose a billable minute. Sync to your web dashboard and generate invoices in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to bill accurately</p>
          <div className="text-5xl font-extrabold text-white mb-1">
            $9<span className="text-2xl font-medium text-[#8b949e]">/mo</span>
          </div>
          <p className="text-[#6e7681] text-xs mb-8">Billed monthly. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Automatic time tracking across IDEs & terminals",
              "Browser activity detection",
              "Client & project tagging",
              "One-click invoice generation",
              "CSV & PDF export",
              "Unlimited clients"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">How does DevBill track my time?</h3>
            <p className="text-[#8b949e] text-sm">DevBill runs a lightweight desktop agent (built with Electron) that detects active windows in your IDEs, terminals, and browsers. It only records time when you are actively working — idle time is excluded automatically.</p>
          </div>
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">Which IDEs and tools are supported?</h3>
            <p className="text-[#8b949e] text-sm">DevBill supports VS Code, JetBrains IDEs, Vim/Neovim, Sublime Text, all major terminals (iTerm2, Windows Terminal, Hyper), and popular browsers including Chrome, Firefox, and Arc.</p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">Is my data private and secure?</h3>
            <p className="text-[#8b949e] text-sm">Only window titles and active durations are synced — never your code or file contents. All data is encrypted in transit and at rest. You can delete your data at any time from the dashboard.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} DevBill. All rights reserved.
      </footer>
    </main>
  );
}
