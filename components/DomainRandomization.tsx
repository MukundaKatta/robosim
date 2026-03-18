'use client';
import { useStore } from '@/lib/store';
import { ToggleLeft, ToggleRight } from 'lucide-react';
export default function DomainRandomization() {
  const { domainRandoms, setDomainRandoms } = useStore();
  const toggle = (id: string) => setDomainRandoms(domainRandoms.map((d) => d.id === id ? { ...d, enabled: !d.enabled } : d));
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Domain Randomization</h2>
      <div className="space-y-3">
        {domainRandoms.map((dr) => (
          <div key={dr.id} className={`bg-gray-900/50 border rounded-xl p-4 ${dr.enabled ? 'border-rsim-500/30' : 'border-gray-800 opacity-60'}`}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-sm">{dr.parameter}</h3>
                <div className="flex gap-4 text-xs text-gray-500 mt-1">
                  <span>Range: [{dr.min}, {dr.max}]</span>
                  <span>Distribution: {dr.distribution}</span>
                </div>
              </div>
              <button onClick={() => toggle(dr.id)}>
                {dr.enabled ? <ToggleRight size={28} className="text-rsim-400" /> : <ToggleLeft size={28} className="text-gray-600" />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
