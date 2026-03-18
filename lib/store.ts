import { create } from 'zustand';

export interface SimScene { id: string; name: string; objects: SceneObject[]; lighting: string; physics: { gravity: number; friction: number }; created_at: string; }
export interface SceneObject { id: string; type: 'box' | 'sphere' | 'cylinder' | 'plane' | 'robot'; position: [number, number, number]; size: [number, number, number]; color: string; mass: number; }
export interface RobotModel { id: string; name: string; type: 'arm' | 'mobile' | 'humanoid' | 'quadruped'; dof: number; sensors: string[]; description: string; }
export interface PhysicsConfig { gravity: number; timestep: number; iterations: number; friction: number; restitution: number; }
export interface DomainRandom { id: string; parameter: string; min: number; max: number; distribution: 'uniform' | 'normal' | 'log-uniform'; enabled: boolean; }
export interface SensorSim { id: string; type: string; noiseLevel: number; updateRate: number; range: number; enabled: boolean; }
export interface TrainingJob { id: string; name: string; algorithm: string; episodes: number; maxEpisodes: number; reward: number; status: 'running' | 'completed' | 'queued'; }
export interface DigitalTwin { id: string; name: string; realRobotId: string; syncStatus: 'synced' | 'drifted' | 'offline'; lastSync: string; drift: number; }

interface RoboSimState {
  activeTab: string; scenes: SimScene[]; robotModels: RobotModel[]; physics: PhysicsConfig;
  domainRandoms: DomainRandom[]; sensors: SensorSim[]; trainingJobs: TrainingJob[]; twins: DigitalTwin[];
  setActiveTab: (t: string) => void; setScenes: (s: SimScene[]) => void; setRobotModels: (r: RobotModel[]) => void;
  setDomainRandoms: (d: DomainRandom[]) => void; setSensors: (s: SensorSim[]) => void;
  setTrainingJobs: (j: TrainingJob[]) => void; setTwins: (t: DigitalTwin[]) => void;
}

export const useStore = create<RoboSimState>((set) => ({
  activeTab: 'editor', scenes: [], robotModels: [],
  physics: { gravity: 9.81, timestep: 0.001, iterations: 50, friction: 0.5, restitution: 0.3 },
  domainRandoms: [], sensors: [], trainingJobs: [], twins: [],
  setActiveTab: (tab) => set({ activeTab: tab }),
  setScenes: (scenes) => set({ scenes }),
  setRobotModels: (robotModels) => set({ robotModels }),
  setDomainRandoms: (domainRandoms) => set({ domainRandoms }),
  setSensors: (sensors) => set({ sensors }),
  setTrainingJobs: (trainingJobs) => set({ trainingJobs }),
  setTwins: (twins) => set({ twins }),
}));
