'use client';

import { useEffect } from 'react';
import { useStore } from '@/lib/store';
import { mockScenes, mockRobotModels, mockDomainRandoms, mockSensors, mockTrainingJobs, mockTwins } from '@/lib/mock-data';
import { Boxes, Bot, Atom, Shuffle, Radio, Cpu, Copy, ChevronRight } from 'lucide-react';
import SceneEditor from '@/components/SceneEditor';
import RobotLibrary from '@/components/RobotLibrary';
import PhysicsPanel from '@/components/PhysicsPanel';
import DomainRandomization from '@/components/DomainRandomization';
import SensorSimPanel from '@/components/SensorSimPanel';
import TrainingOrchestrator from '@/components/TrainingOrchestrator';
import DigitalTwinPanel from '@/components/DigitalTwinPanel';

const tabs = [
  { id: 'editor', label: 'Scene Editor', icon: Boxes },
  { id: 'robots', label: 'Robot Library', icon: Bot },
  { id: 'physics', label: 'Physics', icon: Atom },
  { id: 'domain', label: 'Domain Random', icon: Shuffle },
  { id: 'sensors', label: 'Sensors', icon: Radio },
  { id: 'training', label: 'Training', icon: Cpu },
  { id: 'twins', label: 'Digital Twin', icon: Copy },
];

export default function HomePage() {
  const { activeTab, setActiveTab, setScenes, setRobotModels, setDomainRandoms, setSensors, setTrainingJobs, setTwins } = useStore();

  useEffect(() => {
    setScenes(mockScenes); setRobotModels(mockRobotModels); setDomainRandoms(mockDomainRandoms);
    setSensors(mockSensors); setTrainingJobs(mockTrainingJobs); setTwins(mockTwins);
  }, [setScenes, setRobotModels, setDomainRandoms, setSensors, setTrainingJobs, setTwins]);

  const render = () => {
    switch (activeTab) {
      case 'editor': return <SceneEditor />;
      case 'robots': return <RobotLibrary />;
      case 'physics': return <PhysicsPanel />;
      case 'domain': return <DomainRandomization />;
      case 'sensors': return <SensorSimPanel />;
      case 'training': return <TrainingOrchestrator />;
      case 'twins': return <DigitalTwinPanel />;
      default: return <SceneEditor />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-56 bg-gray-900/50 border-r border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold bg-gradient-to-r from-rsim-400 to-rsim-600 bg-clip-text text-transparent">RoboSim</h1>
          <p className="text-xs text-gray-500">Simulation Platform</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {tabs.map((t) => { const Icon = t.icon; return (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs ${activeTab === t.id ? 'bg-rsim-500/20 text-rsim-400 border border-rsim-500/30' : 'text-gray-400 hover:bg-gray-800/50'}`}>
              <Icon size={14} /><span className="flex-1 text-left">{t.label}</span>{activeTab === t.id && <ChevronRight size={12} />}
            </button>); })}
        </nav>
      </aside>
      <main className="flex-1 overflow-auto p-6">{render()}</main>
    </div>
  );
}
