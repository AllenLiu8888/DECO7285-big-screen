import React from 'react';
import { temperatureScope } from '../data/temperatureZones.js';

/**
 * ScopePanel displays the temperature range legend similar to the reference UI.
 */
const ScopePanel = () => (
  <section className="glass-panel rounded-3xl p-6">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-white">Scope</h3>
      <span className="text-xs uppercase tracking-[0.2em] text-slate-500">°C</span>
    </div>
    <div className="mt-4 flex flex-col gap-3">
      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-800/80">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: 'linear-gradient(90deg, #38C0FF 0%, #4ADE80 35%, #FB923C 68%, #FF5D8F 100%)'
          }}
        />
      </div>
      <div className="flex items-center justify-between text-xs text-slate-400">
        {Array.from(
          { length: Math.floor((temperatureScope.max - temperatureScope.min) / temperatureScope.step) + 1 },
          (_, index) => temperatureScope.min + temperatureScope.step * index
        ).map((tick) => (
          <span key={tick}>{tick}</span>
        ))}
      </div>
    </div>
  </section>
);

export default ScopePanel;
