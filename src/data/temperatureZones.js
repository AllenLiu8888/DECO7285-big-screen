/**
 * Mock data describing the Temperature dashboard heat map.
 * Each zone corresponds to a rectangular group of seats inside the library.
 */
export const temperatureZones = [
  {
    id: 'entrance',
    label: 'Entrance Lobby',
    temperature: 23,
    status: 'cool',
    feedbackHot: 1,
    feedbackCold: 6,
    seats: 12,
    grid: { colStart: 1, colSpan: 3, rowStart: 5, rowSpan: 3 }
  },
  {
    id: 'north-study',
    label: 'North Study Pods',
    temperature: 20,
    status: 'cold',
    feedbackHot: 0,
    feedbackCold: 9,
    seats: 18,
    grid: { colStart: 2, colSpan: 4, rowStart: 2, rowSpan: 2 }
  },
  {
    id: 'central-hub',
    label: 'Central Collaboration Hub',
    temperature: 24,
    status: 'neutral',
    feedbackHot: 2,
    feedbackCold: 2,
    seats: 20,
    grid: { colStart: 4, colSpan: 4, rowStart: 4, rowSpan: 3 }
  },
  {
    id: 'south-window',
    label: 'South Window Row',
    temperature: 28,
    status: 'warm',
    feedbackHot: 8,
    feedbackCold: 1,
    seats: 10,
    grid: { colStart: 7, colSpan: 3, rowStart: 3, rowSpan: 3 }
  },
  {
    id: 'west-stacks',
    label: 'West Book Stacks',
    temperature: 22,
    status: 'cool',
    feedbackHot: 2,
    feedbackCold: 4,
    seats: 14,
    grid: { colStart: 1, colSpan: 2, rowStart: 2, rowSpan: 3 }
  },
  {
    id: 'makerspace',
    label: 'Innovation MakerSpace',
    temperature: 26,
    status: 'warm',
    feedbackHot: 6,
    feedbackCold: 1,
    seats: 8,
    grid: { colStart: 7, colSpan: 3, rowStart: 6, rowSpan: 2 }
  }
];

/**
 * Sensor health data summarises device availability for the map legend.
 */
export const sensorHealth = [
  { id: 'north', label: 'North Cluster', status: 'online' },
  { id: 'central', label: 'Central Cluster', status: 'online' },
  { id: 'south', label: 'South Cluster', status: 'degraded' },
  { id: 'east', label: 'East Cluster', status: 'offline' }
];

/**
 * Temperature scope legend values used by the gradient scale component.
 */
export const temperatureScope = {
  min: 20,
  max: 32,
  step: 3
};

/**
 * Pre-aggregated feedback snapshots for the feedback panel.
 */
export const feedbackSnapshots = [
  {
    id: 'snapshot-1',
    label: 'Last 15 minutes',
    hotCount: 14,
    coldCount: 7,
    highlightedZones: ['south-window', 'makerspace']
  },
  {
    id: 'snapshot-2',
    label: 'Today',
    hotCount: 56,
    coldCount: 32,
    highlightedZones: ['south-window', 'central-hub']
  }
];
