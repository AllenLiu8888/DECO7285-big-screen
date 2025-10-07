import React from 'react';
import Header from './components/Header.jsx';
import HeatMap from './components/HeatMap.jsx';
import FeedbackPanel from './components/FeedbackPanel.jsx';
import ScopePanel from './components/ScopePanel.jsx';
import ZoneDetails from './components/ZoneDetails.jsx';
import QrPanel from './components/QrPanel.jsx';

/**
 * App composes the full Temperature dashboard experience.
 */
const App = () => (
  <main className="min-h-screen bg-slate-950 pb-16">
    <div className="mx-auto max-w-6xl space-y-10 px-6 pt-12">
      <Header />
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <HeatMap footer={<FeedbackPanel />} />
        <div className="flex flex-col gap-6">
          <ScopePanel />
          <QrPanel />
        </div>
      </div>
      <ZoneDetails />
    </div>
  </main>
);

export default App;
