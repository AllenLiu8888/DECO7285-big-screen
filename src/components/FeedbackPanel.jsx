import React from 'react';
import { feedbackToday } from '../data/temperatureZones.js';

/**
 * FeedbackPanel shows compact statistics for today directly beneath the map.
 */
const FeedbackPanel = () => (
  <section className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-5">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h3 className="text-base font-semibold text-white">Live Feedback — Today</h3>
        <p className="text-xs text-slate-400">Sensor pings merged with student button presses.</p>
      </div>
      <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Refreshed 5 min ago</span>
    </div>

    <div className="mt-4 flex flex-wrap gap-4">
      {feedbackToday.map((stat) => (
        <article
          key={stat.id}
          className="flex min-w-[160px] flex-1 items-center justify-between gap-4 rounded-2xl border border-slate-800/70 bg-slate-950/70 px-4 py-3"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
            <p className="mt-1 text-xl font-semibold text-white">{stat.total}</p>
          </div>
          <div className="flex flex-col items-end gap-2 text-right">
            <span
              className="inline-flex h-2 w-2 rounded-full"
              style={{ backgroundColor: stat.accentColor }}
            />
            <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
              {stat.delta}
            </span>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default FeedbackPanel;
