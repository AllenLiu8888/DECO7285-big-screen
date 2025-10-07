import React from 'react';
import floorplanIllustration from '../assets/library-floorplan.svg';
import { temperatureZones } from '../data/temperatureZones.js';
import TemperatureLegend from './TemperatureLegend.jsx';

/**
 * Accent colour palette per comfort status used by gradients and markers.
 */
const statusPalette = {
  cool: { solid: 'rgba(56, 192, 255, 0.75)', soft: 'rgba(56, 192, 255, 0.08)' },
  neutral: { solid: 'rgba(74, 222, 128, 0.75)', soft: 'rgba(74, 222, 128, 0.08)' },
  warm: { solid: 'rgba(251, 146, 60, 0.75)', soft: 'rgba(251, 146, 60, 0.08)' },
  hot: { solid: 'rgba(255, 93, 143, 0.82)', soft: 'rgba(255, 93, 143, 0.1)' }
};

/**
 * HeatMap visualises the library layout with a blueprint background and radial glows.
 */
const HeatMap = ({ footer }) => (
  <section className="glass-panel rounded-3xl border border-slate-800/50 p-6">
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="min-w-[18rem] flex-1">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">Comfort Heat Map</p>
        <h2 className="mt-2 text-4xl font-semibold text-white">Level 3 · Microclimate Overview</h2>
        <p className="mt-3 max-w-xl text-sm text-slate-400">
          Overlay combines sensor telemetry and button feedback to reveal today&apos;s hot and cold spots.
        </p>
      </div>
      <TemperatureLegend />
    </div>

    <div className="mt-6 space-y-6">
      <div
        className="relative overflow-hidden rounded-[32px] border border-slate-800/60 bg-slate-900/70"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.9), rgba(15,23,42,0.6)), url(${floorplanIllustration})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative aspect-[5/2] w-full">
          {temperatureZones.map((zone) => (
            <React.Fragment key={zone.id}>
              <ZoneGlow zone={zone} />
              <ZoneMarker zone={zone} />
            </React.Fragment>
          ))}
          <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/5" />
        </div>
      </div>
      {footer}
    </div>
  </section>
);

/**
 * ZoneGlow renders a soft radial gradient sized by the configured radius.
 */
const ZoneGlow = ({ zone }) => {
  const palette = statusPalette[zone.status] ?? statusPalette.neutral;
  const diameter = zone.radius;
  const offset = diameter / 2;

  return (
    <div
      className="pointer-events-none absolute mix-blend-screen blur-[2px]"
      style={{
        left: `calc(${zone.position.x}% - ${offset}px)`,
        top: `calc(${zone.position.y}% - ${offset}px)`,
        width: `${diameter}px`,
        height: `${diameter}px`,
        background: `radial-gradient(circle at center, ${palette.solid} 0%, ${palette.solid} 35%, ${palette.soft} 70%, transparent 100%)`
      }}
    />
  );
};

/**
 * ZoneMarker draws the node for each sensor cluster along with temperature text.
 */
const ZoneMarker = ({ zone }) => {
  const palette = statusPalette[zone.status] ?? statusPalette.neutral;

  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3"
      style={{ left: `${zone.position.x}%`, top: `${zone.position.y}%` }}
    >
      <div className="rounded-full border border-white/40 bg-slate-950/80 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
        {zone.id}
      </div>
      <div className="glass-panel flex flex-col items-center rounded-2xl border border-white/30 bg-slate-950/70 px-6 py-4 text-center shadow-xl">
        <span className="text-sm font-medium text-white/70">{zone.label}</span>
        <span className="mt-1 text-3xl font-semibold text-white">{zone.temperature.toFixed(1)}°C</span>
        <span className="mt-2 flex items-center gap-2 text-xs text-slate-300">
          <span className="inline-flex items-center gap-1">
            <span className="inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: palette.solid }} />
            Comfort {zone.comfortIndex}
          </span>
          <span className="inline-flex items-center gap-1 text-ember">
            Hot {zone.feedbackHot}
          </span>
          <span className="inline-flex items-center gap-1 text-frost">
            Cold {zone.feedbackCold}
          </span>
        </span>
      </div>
    </div>
  );
};

export default HeatMap;
