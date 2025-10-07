import React from 'react';
import { temperatureScope } from '../data/temperatureZones.js';

/**
 * TemperatureLegend renders the min-max gradient scale displayed next to the map.
 */
const TemperatureLegend = () => {
  const gradientStops = Array.from(
    { length: Math.floor((temperatureScope.max - temperatureScope.min) / temperatureScope.step) + 1 },
    (_, index) => temperatureScope.min + temperatureScope.step * index
  );

  return (
    <div className="flex items-end gap-3">
      <div className="flex h-24 w-2 flex-col overflow-hidden rounded-full">
        <span className="h-full w-full bg-gradient-to-b from-[#00C2FF] via-[#FDBA74] to-[#FF5D8F]" />
      </div>
      <div className="flex flex-col gap-1 text-right text-xs text-slate-400">
        {gradientStops.map((value) => (
          <span key={value}>{value}°C</span>
        ))}
      </div>
    </div>
  );
};

export default TemperatureLegend;
