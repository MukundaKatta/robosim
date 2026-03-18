# RoboSim

Robotics simulation environment with scene editing, physics simulation, domain randomization, and digital twin support.

## Features

- **Scene Editor** -- Build and configure 3D simulation environments
- **Robot Library** -- Browse and import robot models into simulations
- **Physics Engine** -- Configure realistic physics parameters and interactions
- **Domain Randomization** -- Vary environment parameters for robust sim-to-real transfer
- **Sensor Simulation** -- Simulate cameras, LiDAR, IMU, and other sensors
- **Training Orchestrator** -- Launch and manage reinforcement learning training jobs
- **Digital Twin** -- Create and synchronize digital twins of physical robots

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D Rendering:** Three.js, React Three Fiber, React Three Drei
- **State Management:** Zustand
- **Charts:** Recharts
- **Database:** Supabase
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone <repository-url>
cd robosim
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
robosim/
├── app/                  # Next.js App Router pages
├── components/           # React components
│   ├── SceneEditor.tsx
│   ├── RobotLibrary.tsx
│   ├── PhysicsPanel.tsx
│   ├── DomainRandomization.tsx
│   ├── SensorSimPanel.tsx
│   ├── TrainingOrchestrator.tsx
│   └── DigitalTwinPanel.tsx
├── lib/                  # Utilities, store, mock data
├── public/               # Static assets
└── package.json
```

## License

MIT
