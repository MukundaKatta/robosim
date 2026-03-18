import { SimScene, RobotModel, DomainRandom, SensorSim, TrainingJob, DigitalTwin } from './store';

export const mockScenes: SimScene[] = [
  { id: 's1', name: 'Tabletop Manipulation', objects: [
    { id: 'so1', type: 'plane', position: [0, 0, 0], size: [5, 0.1, 5], color: '#444', mass: 0 },
    { id: 'so2', type: 'box', position: [0, 0.55, 0], size: [1.5, 0.1, 0.8], color: '#8B4513', mass: 0 },
    { id: 'so3', type: 'box', position: [0.2, 0.7, 0.1], size: [0.05, 0.05, 0.05], color: '#ff6b6b', mass: 0.1 },
    { id: 'so4', type: 'sphere', position: [-0.2, 0.68, -0.1], size: [0.04, 0.04, 0.04], color: '#4dabf7', mass: 0.05 },
    { id: 'so5', type: 'robot', position: [0, 0, -0.5], size: [0.3, 1, 0.3], color: '#f97316', mass: 0 },
  ], lighting: 'studio', physics: { gravity: 9.81, friction: 0.5 }, created_at: '2024-04-01T10:00:00Z' },
  { id: 's2', name: 'Navigation Arena', objects: [
    { id: 'so6', type: 'plane', position: [0, 0, 0], size: [10, 0.1, 10], color: '#333', mass: 0 },
    { id: 'so7', type: 'box', position: [2, 0.5, 1], size: [0.5, 1, 0.5], color: '#666', mass: 0 },
    { id: 'so8', type: 'cylinder', position: [-1, 0.5, -2], size: [0.3, 1, 0.3], color: '#666', mass: 0 },
    { id: 'so9', type: 'robot', position: [0, 0.1, 0], size: [0.4, 0.3, 0.4], color: '#f97316', mass: 0 },
  ], lighting: 'outdoor', physics: { gravity: 9.81, friction: 0.4 }, created_at: '2024-04-01T11:00:00Z' },
];

export const mockRobotModels: RobotModel[] = [
  { id: 'rm1', name: 'Panda Arm', type: 'arm', dof: 7, sensors: ['joint_pos', 'joint_vel', 'force_torque', 'camera'], description: '7-DOF robotic arm for manipulation tasks' },
  { id: 'rm2', name: 'TurtleBot', type: 'mobile', dof: 2, sensors: ['lidar', 'camera', 'imu', 'odometry'], description: 'Differential drive mobile robot' },
  { id: 'rm3', name: 'Atlas', type: 'humanoid', dof: 28, sensors: ['joint_pos', 'imu', 'force_plates', 'stereo_camera'], description: 'Full humanoid robot' },
  { id: 'rm4', name: 'Spot', type: 'quadruped', dof: 12, sensors: ['joint_pos', 'imu', 'depth_camera', 'lidar'], description: 'Quadruped walking robot' },
];

export const mockDomainRandoms: DomainRandom[] = [
  { id: 'dr1', parameter: 'Object Mass', min: 0.01, max: 2.0, distribution: 'log-uniform', enabled: true },
  { id: 'dr2', parameter: 'Friction Coefficient', min: 0.1, max: 1.0, distribution: 'uniform', enabled: true },
  { id: 'dr3', parameter: 'Camera Noise', min: 0, max: 0.05, distribution: 'normal', enabled: true },
  { id: 'dr4', parameter: 'Lighting Intensity', min: 0.3, max: 2.0, distribution: 'uniform', enabled: true },
  { id: 'dr5', parameter: 'Joint Backlash', min: 0, max: 0.02, distribution: 'uniform', enabled: false },
  { id: 'dr6', parameter: 'Gravity Variation', min: 9.7, max: 9.9, distribution: 'normal', enabled: false },
];

export const mockSensors: SensorSim[] = [
  { id: 'ss1', type: 'RGB Camera', noiseLevel: 0.02, updateRate: 30, range: 10, enabled: true },
  { id: 'ss2', type: 'Depth Camera', noiseLevel: 0.005, updateRate: 30, range: 5, enabled: true },
  { id: 'ss3', type: 'LIDAR', noiseLevel: 0.01, updateRate: 10, range: 30, enabled: true },
  { id: 'ss4', type: 'IMU', noiseLevel: 0.001, updateRate: 200, range: 0, enabled: true },
  { id: 'ss5', type: 'Force Torque', noiseLevel: 0.1, updateRate: 1000, range: 0, enabled: true },
  { id: 'ss6', type: 'Tactile', noiseLevel: 0.05, updateRate: 100, range: 0, enabled: false },
];

export const mockTrainingJobs: TrainingJob[] = [
  { id: 'tj1', name: 'Grasp Policy v3', algorithm: 'PPO', episodes: 5000, maxEpisodes: 10000, reward: 245, status: 'running' },
  { id: 'tj2', name: 'Navigation v2', algorithm: 'SAC', episodes: 10000, maxEpisodes: 10000, reward: 380, status: 'completed' },
  { id: 'tj3', name: 'Balance Control', algorithm: 'TD3', episodes: 0, maxEpisodes: 20000, reward: 0, status: 'queued' },
];

export const mockTwins: DigitalTwin[] = [
  { id: 'dt1', name: 'Lab Panda #1', realRobotId: 'panda-001', syncStatus: 'synced', lastSync: new Date().toISOString(), drift: 0.002 },
  { id: 'dt2', name: 'Warehouse Bot #3', realRobotId: 'turtle-003', syncStatus: 'drifted', lastSync: new Date(Date.now() - 3600000).toISOString(), drift: 0.15 },
  { id: 'dt3', name: 'Field Spot #1', realRobotId: 'spot-001', syncStatus: 'offline', lastSync: new Date(Date.now() - 86400000).toISOString(), drift: 0 },
];
