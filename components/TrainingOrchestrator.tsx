'use client';
import { useStore } from '@/lib/store';
import { Play, CheckCircle, Clock, Cpu } from 'lucide-react';
const statusConfig: Record<string, { color: string; icon: any }> = { running: { color: 'text-rsim-400', icon: Play }, completed: { color: 'text-green-400', icon: CheckCircle }, queued: { color: 'text-gray-400', icon: Clock } };
export default function TrainingOrchestrator() {
  const { trainingJobs } = useStore();
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Training Orchestrator</h2>
      <div className="space-y-4">
        {trainingJobs.map((j) => {
          const c = statusConfig[j.status]; const Icon = c.icon; const pct = (j.episodes / j.maxEpisodes) * 100;
          return (
            <div key={j.id} className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><Cpu size={18} className="text-rsim-400" /><div><h3 className="font-semibold">{j.name}</h3><p className="text-xs text-gray-500">{j.algorithm} | {j.episodes}/{j.maxEpisodes} episodes</p></div></div>
                <div className={`flex items-center gap-1 text-xs ${c.color}`}><Icon size={14} />{j.status}</div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div className="text-center"><p className="text-lg font-bold text-rsim-400">{j.reward}</p><p className="text-xs text-gray-500">Reward</p></div>
                <div className="text-center"><p className="text-lg font-bold text-blue-400">{pct.toFixed(0)}%</p><p className="text-xs text-gray-500">Progress</p></div>
                <div className="text-center"><p className="text-lg font-bold text-purple-400">{j.algorithm}</p><p className="text-xs text-gray-500">Algorithm</p></div>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-rsim-500 rounded-full" style={{ width: `${pct}%` }} /></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
