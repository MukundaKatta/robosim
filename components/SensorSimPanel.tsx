'use client';
import { useStore } from '@/lib/store';
import { Radio, ToggleLeft, ToggleRight } from 'lucide-react';
export default function SensorSimPanel() {
  const { sensors, setSensors } = useStore();
  const toggle = (id: string) => setSensors(sensors.map((s) => s.id === id ? { ...s, enabled: !s.enabled } : s));
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Sensor Simulation</h2>
      <div className="grid grid-cols-2 gap-4">
        {sensors.map((s) => (
          <div key={s.id} className={`bg-gray-900/50 border rounded-xl p-4 ${s.enabled ? 'border-rsim-500/30' : 'border-gray-800 opacity-60'}`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2"><Radio size={16} className="text-rsim-400" /><h3 className="font-semibold text-sm">{s.type}</h3></div>
              <button onClick={() => toggle(s.id)}>{s.enabled ? <ToggleRight size={24} className="text-rsim-400" /> : <ToggleLeft size={24} className="text-gray-600" />}</button>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-gray-800/30 rounded p-2 text-center"><p className="text-gray-500">Noise</p><p className="font-bold">{s.noiseLevel}</p></div>
              <div className="bg-gray-800/30 rounded p-2 text-center"><p className="text-gray-500">Rate</p><p className="font-bold">{s.updateRate}Hz</p></div>
              <div className="bg-gray-800/30 rounded p-2 text-center"><p className="text-gray-500">Range</p><p className="font-bold">{s.range > 0 ? `${s.range}m` : 'N/A'}</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
