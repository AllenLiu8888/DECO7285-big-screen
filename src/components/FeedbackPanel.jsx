import React from 'react';
import { feedbackSnapshots } from '../data/temperatureZones.js';

/**
 * FeedbackPanel visualises aggregated hot/cold interactions with contextual tags.
 */
const FeedbackPanel = () => (
  <section className="glass-panel rounded-3xl p-6">
    <h3 className="text-lg font-semibold text-white">Live Feedback</h3>
    <p className="text-sm text-slate-400">Student button presses merged with sensor data.</p>

    <div className="mt-4 space-y-4">
      {feedbackSnapshots.map((snapshot) => (
        <article
          key={snapshot.id}
          className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-4"
        >
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-white">{snapshot.label}</h4>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Alert Rule</span>
          </div>
          <div className="mt-3 flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <Badge color="bg-ember" label="Hot" value={snapshot.hotCount} />
              <Badge color="bg-frost" label="Cold" value={snapshot.coldCount} />
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-400">
              {snapshot.highlightedZones.map((zone) => (
                <span key={zone} className="rounded-full bg-slate-800/80 px-3 py-1 text-slate-200">
                  #{zone}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

/**
 * Badge renders a rounded statistic chip inside the feedback card.
 */
const Badge = ({ color, label, value }) => (
  <span className="flex items-center gap-2 rounded-full bg-slate-800/80 px-4 py-2 text-white">
    <span className={`inline-flex h-2.5 w-2.5 rounded-full ${color}`} />
    <span className="text-xs uppercase tracking-[0.2em] text-white/70">{label}</span>
    <span className="text-lg font-semibold">{value}</span>
  </span>
);

export default FeedbackPanel;
