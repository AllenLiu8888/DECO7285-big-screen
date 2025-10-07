import React from 'react';

/**
 * Helper returning Tailwind classes for cluster status states.
 * @param {('online'|'degraded'|'offline')} status
 */
const getStatusClasses = (status) => {
  switch (status) {
    case 'online':
      return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
    case 'degraded':
      return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
    case 'offline':
      return 'bg-rose-500/10 text-rose-300 border-rose-500/40';
    default:
      return 'bg-slate-600/20 text-slate-200 border-slate-500/40';
  }
};

/**
 * SensorStatusPill displays cluster availability tags.
 */
const SensorStatusPill = ({ label, status }) => (
  <span
    className={`glass-panel inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] ${getStatusClasses(
      status
    )}`}
  >
    <span className="inline-flex h-2 w-2 rounded-full bg-current" />
    {label}
  </span>
);

export default SensorStatusPill;
