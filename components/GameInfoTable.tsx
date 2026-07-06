export default function GameInfoTable() {
  const tableData = [
    { feature: "Platform Name", details: "Raja7" },
    { feature: "App Size", details: "80.5MB" },
    { feature: "Version", details: "2.1.0" },
    { feature: "Welcome Bonus", details: "₹500" },
    { 
      feature: "Link", 
      details: (
        <a 
          href="https://share-rxapq9cajg.raja7.org/share/agent/AS0NV958"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-500 font-bold hover:text-amber-400 hover:underline"
        >
          Download
        </a>
      )
    },
    { feature: "Total Downloads", details: "50,000+" },
  ];

  return (
    <section id="download" className="py-12 bg-slate-950 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-900/80 rounded-2xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-800/50 border-b border-white/10">
                <th className="py-4 px-6 text-sm md:text-base font-bold text-amber-500 uppercase tracking-wider w-1/2">
                  Feature
                </th>
                <th className="py-4 px-6 text-sm md:text-base font-bold text-amber-500 uppercase tracking-wider w-1/2 border-l border-white/10">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {tableData.map((row, index) => (
                <tr 
                  key={row.feature} 
                  className="transition-colors hover:bg-white/[0.02]"
                >
                  <td className="py-4 px-6 text-slate-300 font-medium">
                    {row.feature}:
                  </td>
                  <td className="py-4 px-6 text-white font-bold border-l border-white/10">
                    {row.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
