import React from 'react';

/**
 * QrPanel displays the QR code call-to-action mirrored from the design reference.
 */
const QrPanel = () => (
  <section className="glass-panel flex items-center justify-between rounded-3xl p-6">
    <div>
      <h3 className="text-lg font-semibold text-white">Scan to open on mobile</h3>
      <p className="text-sm text-slate-400">Stay in sync with your chosen spot from your phone.</p>
    </div>
    <div className="qr-block relative h-24 w-24 rounded-2xl border border-white/20 text-white">
      <span className="absolute inset-2 rounded-xl border border-white/30" />
    </div>
  </section>
);

export default QrPanel;
