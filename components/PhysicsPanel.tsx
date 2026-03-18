'use client';
import { useStore } from '@/lib/store';
export default function PhysicsPanel() {
  const { physics } = useStore();
  const params = [
    { label: 'Gravity (m/s2)', value: physics.gravity, min: 0, max: 20, step: 0.01 },
    { label: 'Timestep (s)', value: physics.timestep, min: 0.0001, max: 0.01, step: 0.0001 },
    { label: 'Solver Iterations', value: physics.iterations, min: 1, max: 200, step: 1 },
    { label: 'Default Friction', value: physics.friction, min: 0, max: 1, step: 0.01 },
    { label: 'Restitution', value: physics.restitution, min: 0, max: 1, step: 0.01 },
  ];
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Physics Simulation</h2>
      <div className="max-w-lg space-y-4">
        {params.map((p) => (
          <div key={p.label} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <div className="flex justify-between text-sm mb-2"><span className="text-gray-400">{p.label}</span><span className="text-rsim-400 font-mono">{p.value}</span></div>
            <input type="range" min={p.min} max={p.max} step={p.step} defaultValue={p.value} className="w-full accent-rsim-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
