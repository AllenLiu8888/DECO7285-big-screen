/**
 * Mock data describing the Temperature dashboard heat map.
 * Each zone corresponds to a key location within the library floor plan.
 */
export const temperatureZones = [
  {
    id: 'north-quiet',
    label: 'North Quiet Desks',
    temperature: 21.4,
    comfortIndex: 68,
    status: 'cool',
    feedbackHot: 2,
    feedbackCold: 9,
    position: { x: 24, y: 34 },
    radius: 240
  },
  {
    id: 'central-collab',
    label: 'Central Collaboration Hub',
    temperature: 23.8,
    comfortIndex: 74,
    status: 'neutral',
    feedbackHot: 5,
    feedbackCold: 3,
    position: { x: 48, y: 46 },
    radius: 260
  },
  {
    id: 'makerspace',
    label: 'Makerspace Studio',
    temperature: 25.6,
    comfortIndex: 59,
    status: 'warm',
    feedbackHot: 11,
    feedbackCold: 1,
    position: { x: 64, y: 60 },
    radius: 220
  },
  {
    id: 'window-bay',
    label: 'East Window Bay',
    temperature: 26.9,
    comfortIndex: 53,
    status: 'hot',
    feedbackHot: 15,
    feedbackCold: 0,
    position: { x: 78, y: 40 },
    radius: 210
  },
  {
    id: 'south-stacks',
    label: 'South Book Stacks',
    temperature: 22.3,
    comfortIndex: 71,
    status: 'cool',
    feedbackHot: 3,
    feedbackCold: 6,
    position: { x: 36, y: 68 },
    radius: 230
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
  max: 30,
  step: 2
};

/**
 * Aggregated feedback statistics for today only.
 */
export const feedbackToday = [
  {
    id: 'hot-taps',
    label: 'Hot Reports',
    total: 36,
    accentColor: '#FF5D8F',
    delta: '+8 vs yesterday'
  },
  {
    id: 'cold-taps',
    label: 'Cold Reports',
    total: 19,
    accentColor: '#38C0FF',
    delta: '-3 vs yesterday'
  },
  {
    id: 'avg-response',
    label: 'Avg Response',
    total: '18m',
    accentColor: '#A3FF7A',
    delta: 'Target < 20m'
  },
  {
    id: 'active-zones',
    label: 'Active Zones',
    total: '5 / 5',
    accentColor: 'rgba(255,255,255,0.6)',
    delta: 'All sensors responsive'
  }
];
