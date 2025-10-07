import React from 'react';
import { sensorHealth } from '../data/temperatureZones.js';
import SensorStatusPill from './SensorStatusPill.jsx';

/**
 * Header component summarising project name, building location and metadata.
 */
const Header = () => {
  const lastUpdated = '14:35';
  const totalSensors = sensorHealth.length;
  const offlineCount = sensorHealth.filter((sensor) => sensor.status !== 'online').length;

  return (
    <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
          Library ComfortMap — Public Display
        </p>
        <h1 className="mt-2 text-4xl font-semibold text-white">
          Building A · Level 3
        </h1>
      </div>
      <div className="flex flex-wrap gap-4 text-sm text-slate-300">
        <div className="glass-panel flex items-center gap-3 rounded-full px-6 py-3">
          <span className="inline-flex h-2 w-2 rounded-full bg-limePulse" />
          <span>
            Updated <span className="font-semibold text-white">{lastUpdated}</span>
          </span>
        </div>
        <div className="glass-panel flex items-center gap-3 rounded-full px-6 py-3">
          <span className="inline-flex h-2 w-2 rounded-full bg-frost" />
          <span>
            Sensor Health:{' '}
            <span className="font-semibold text-white">
              {totalSensors - offlineCount}/{totalSensors}
            </span>
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {sensorHealth.map((cluster) => (
          <SensorStatusPill key={cluster.id} label={cluster.label} status={cluster.status} />
        ))}
      </div>
    </header>
  );
};

export default Header;
