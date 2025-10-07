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
      <div className="flex h-28 w-3 flex-col overflow-hidden rounded-full">
        <span
          className="h-full w-full"
          style={{
            backgroundImage: 'linear-gradient(180deg, #38C0FF 0%, #4ADE80 40%, #FB923C 70%, #FF5D8F 100%)'
          }}
        />
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
