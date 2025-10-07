import React from 'react';
import { temperatureZones } from '../data/temperatureZones.js';
import TemperatureLegend from './TemperatureLegend.jsx';

/**
 * Utility mapping zone statuses to accent colors for overlays.
 */
const statusStyles = {
  cold: 'from-[#1B84F3]/90 to-[#1B84F3]/30',
  cool: 'from-[#38C0FF]/80 to-[#38C0FF]/20',
  neutral: 'from-[#4ADE80]/70 to-[#4ADE80]/20',
  warm: 'from-[#FB923C]/80 to-[#FB923C]/20'
};

/**
 * HeatMap visualises the library layout with gradient regions representing temperature.
 */
const HeatMap = () => (
  <section className="glass-panel relative overflow-hidden rounded-3xl border border-slate-800/50 p-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-white">Comfort Heat Map</h2>
        <p className="text-sm text-slate-400">Real-time climate + live feedback blend</p>
      </div>
      <TemperatureLegend />
    </div>

    <div className="mt-6 aspect-[5/3] w-full overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/60">
      <div className="map-gradient relative h-full w-full">
        <div className="absolute inset-0 grid grid-cols-9 grid-rows-6 gap-2 p-6">
          {temperatureZones.map((zone) => (
            <article
              key={zone.id}
              className={`relative rounded-xl border border-white/10 bg-gradient-to-br ${
                statusStyles[zone.status]
              } transition-transform hover:scale-[1.02]`}
              style={{
                gridColumn: `${zone.grid.colStart} / span ${zone.grid.colSpan}`,
                gridRow: `${zone.grid.rowStart} / span ${zone.grid.rowSpan}`
              }}
            >
              <div className="flex h-full flex-col justify-between p-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                    {zone.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">{zone.temperature}°</p>
                </div>
                <div className="flex items-center justify-between text-xs text-white/80">
                  <span className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-white/70" />
                    {zone.seats} seats
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <span className="inline-flex h-2 w-2 rounded-full bg-ember" />
                      Hot {zone.feedbackHot}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="inline-flex h-2 w-2 rounded-full bg-frost" />
                      Cold {zone.feedbackCold}
                    </span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <DecorativeOverlays />
      </div>
    </div>
  </section>
);

/**
 * DecorativeOverlays render icons and structural hints for the map layout.
 */
const DecorativeOverlays = () => (
  <>
    <div className="absolute left-6 top-6 flex items-center gap-2 text-sm font-medium text-white/80">
      <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-limePulse" />
      Entrance
    </div>
    <div className="absolute bottom-6 left-6 flex items-center gap-3 text-xs text-white/60">
      <span className="inline-flex items-center gap-2">
        <span className="inline-flex h-3 w-3 items-center justify-center rounded-full border border-white/40 text-[10px]">
          A
        </span>
        Air Vent
      </span>
      <span className="inline-flex items-center gap-2">
        <span className="inline-flex h-3 w-3 items-center justify-center rounded-full border border-white/40 text-[10px]">
          W
        </span>
        Window
      </span>
    </div>
    {[{ x: '18%', y: '22%' }, { x: '42%', y: '18%' }, { x: '62%', y: '30%' }, { x: '35%', y: '70%' }].map(
      (marker, index) => (
        <div
          key={`vent-${marker.x}-${marker.y}`}
          className="absolute flex h-8 w-8 items-center justify-center rounded-full border border-cyan-200/50 bg-cyan-500/20 text-xs text-cyan-100"
          style={{ left: marker.x, top: marker.y }}
        >
          A{index + 1}
        </div>
      )
    )}
    {[{ x: '78%', y: '25%' }, { x: '82%', y: '55%' }, { x: '15%', y: '65%' }].map((marker, index) => (
      <div
        key={`window-${marker.x}-${marker.y}`}
        className="absolute flex h-8 w-8 items-center justify-center rounded-full border border-amber-200/50 bg-amber-500/20 text-xs text-amber-100"
        style={{ left: marker.x, top: marker.y }}
      >
        W{index + 1}
      </div>
    ))}
  </>
);

export default HeatMap;
