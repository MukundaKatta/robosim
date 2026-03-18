'use client';
import { useStore } from '@/lib/store';
import { Bot, Cpu, Radio } from 'lucide-react';
const typeColors: Record<string, string> = { arm: 'text-blue-400', mobile: 'text-green-400', humanoid: 'text-rsim-400', quadruped: 'text-purple-400' };
export default function RobotLibrary() {
  const { robotModels } = useStore();
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Robot Model Library</h2>
      <div className="grid grid-cols-2 gap-4">
        {robotModels.map((r) => (
          <div key={r.id} className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <Bot size={24} className={typeColors[r.type]} />
              <div><h3 className="font-semibold">{r.name}</h3><span className={`text-xs capitalize ${typeColors[r.type]}`}>{r.type}</span></div>
            </div>
            <p className="text-sm text-gray-400 mb-3">{r.description}</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-800/30 rounded p-2 text-center"><Cpu size={14} className="mx-auto text-rsim-400 mb-1" /><p className="text-sm font-bold">{r.dof} DOF</p></div>
              <div className="bg-gray-800/30 rounded p-2 text-center"><Radio size={14} className="mx-auto text-blue-400 mb-1" /><p className="text-sm font-bold">{r.sensors.length} Sensors</p></div>
            </div>
            <div className="mt-3 flex gap-1 flex-wrap">{r.sensors.map((s) => <span key={s} className="text-xs px-2 py-0.5 bg-gray-800/50 rounded">{s}</span>)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
