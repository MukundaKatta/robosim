'use client';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import { useStore, SceneObject } from '@/lib/store';
import * as THREE from 'three';

function SimObject({ obj }: { obj: SceneObject }) {
  const geo = obj.type === 'sphere' ? <sphereGeometry args={[obj.size[0], 16, 16]} /> :
    obj.type === 'cylinder' ? <cylinderGeometry args={[obj.size[0], obj.size[0], obj.size[1], 16]} /> :
    <boxGeometry args={obj.size} />;
  return (<mesh position={obj.position}>{geo}<meshStandardMaterial color={obj.color} metalness={obj.type === 'robot' ? 0.7 : 0.3} roughness={0.5} /></mesh>);
}

export default function SceneEditor() {
  const { scenes } = useStore();
  const [selected, setSelected] = useState(scenes[0] || null);
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Scene Editor</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-sm mb-2">Scenes</h3>
          {scenes.map((s) => (
            <button key={s.id} onClick={() => setSelected(s)}
              className={`w-full text-left p-3 rounded-lg border text-sm ${selected?.id === s.id ? 'bg-rsim-500/20 border-rsim-500/30' : 'bg-gray-900/50 border-gray-800'}`}>
              <p className="font-medium">{s.name}</p>
              <p className="text-xs text-gray-500">{s.objects.length} objects</p>
            </button>
          ))}
        </div>
        <div className="col-span-2 bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden" style={{ height: 450 }}>
          <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
            <ambientLight intensity={0.4} /><directionalLight position={[5, 5, 5]} intensity={1} />
            {selected?.objects.map((obj) => <SimObject key={obj.id} obj={obj} />)}
            <Grid position={[0, -0.01, 0]} args={[20, 20]} cellSize={0.5} cellColor="#1a1a0a" sectionSize={2} sectionColor="#2a2a1a" />
            <OrbitControls />
          </Canvas>
        </div>
        <div className="space-y-4">
          {selected && (
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-3">Scene Objects</h3>
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {selected.objects.map((obj) => (
                  <div key={obj.id} className="flex items-center gap-2 text-xs bg-gray-800/30 rounded p-2">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: obj.color }} />
                    <span className="flex-1 capitalize">{obj.type}</span>
                    <span className="text-gray-500">{obj.mass > 0 ? `${obj.mass}kg` : 'static'}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <h3 className="font-semibold text-sm mb-2">Physics</h3>
            <div className="text-xs space-y-1">
              <div className="flex justify-between"><span className="text-gray-400">Gravity</span><span>{selected?.physics.gravity} m/s2</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Friction</span><span>{selected?.physics.friction}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
