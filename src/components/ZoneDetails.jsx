import React from 'react';
import { temperatureZones } from '../data/temperatureZones.js';

/**
 * ZoneDetails lists each zone with temperature, state and seat availability.
 */
const ZoneDetails = () => (
  <section className="glass-panel rounded-3xl p-6">
    <h3 className="text-lg font-semibold text-white">Zone Highlights</h3>
    <p className="text-sm text-slate-400">Tap a zone on the map or browse quick stats.</p>

    <div className="mt-4 space-y-3">
      {temperatureZones.map((zone) => (
        <article
          key={zone.id}
          className="flex items-center justify-between rounded-2xl border border-slate-800/60 bg-slate-900/40 px-4 py-3"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{zone.id}</p>
            <h4 className="text-sm font-semibold text-white">{zone.label}</h4>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Stat label="Temp" value={`${zone.temperature}°`} />
            <Stat label="Hot" value={zone.feedbackHot} accent="text-ember" />
            <Stat label="Cold" value={zone.feedbackCold} accent="text-frost" />
          </div>
        </article>
      ))}
    </div>
  </section>
);

/**
 * Stat component maintains consistent typography for mini stats.
 */
const Stat = ({ label, value, accent = 'text-white' }) => (
  <div className="text-right">
    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
    <p className={`text-lg font-semibold ${accent}`}>{value}</p>
  </div>
);

export default ZoneDetails;
