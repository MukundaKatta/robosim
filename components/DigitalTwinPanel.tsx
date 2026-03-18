'use client';
import { useStore } from '@/lib/store';
import { Copy, CheckCircle, AlertTriangle, WifiOff, RefreshCw } from 'lucide-react';
const syncConfig: Record<string, { color: string; icon: any }> = { synced: { color: 'text-green-400', icon: CheckCircle }, drifted: { color: 'text-yellow-400', icon: AlertTriangle }, offline: { color: 'text-red-400', icon: WifiOff } };
export default function DigitalTwinPanel() {
  const { twins } = useStore();
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Digital Twins</h2>
      <div className="space-y-4">
        {twins.map((t) => {
          const c = syncConfig[t.syncStatus]; const Icon = c.icon;
          return (
            <div key={t.id} className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3"><Copy size={20} className="text-rsim-400" /><div><h3 className="font-semibold">{t.name}</h3><p className="text-xs text-gray-500">Real: {t.realRobotId}</p></div></div>
                <div className="flex items-center gap-2">
                  <span className={`flex items-center gap-1 text-xs ${c.color}`}><Icon size={14} />{t.syncStatus}</span>
                  <button className="p-1.5 bg-gray-800 rounded-lg text-gray-400 hover:text-white"><RefreshCw size={14} /></button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-800/30 rounded-lg p-3 text-center"><p className="text-xs text-gray-500">Status</p><p className={`text-sm font-bold capitalize ${c.color}`}>{t.syncStatus}</p></div>
                <div className="bg-gray-800/30 rounded-lg p-3 text-center"><p className="text-xs text-gray-500">Drift</p><p className="text-sm font-bold">{t.drift > 0 ? `${(t.drift * 100).toFixed(1)}%` : 'N/A'}</p></div>
                <div className="bg-gray-800/30 rounded-lg p-3 text-center"><p className="text-xs text-gray-500">Last Sync</p><p className="text-sm font-bold">{new Date(t.lastSync).toLocaleTimeString()}</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
