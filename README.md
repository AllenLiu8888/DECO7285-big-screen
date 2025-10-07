# Temperature — Library ComfortMap Front-End

A React + Vite + Tailwind CSS single-page experience that visualises the Temperature project's microclimate concept for open-plan libraries. The interface mirrors the public display and mobile summary showcased in the PRD, highlighting comfort zones, live feedback, and sensor health.

## Table of Contents
- [Quick Start](#quick-start)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Design & Interaction Notes](#design--interaction-notes)
- [Data Model](#data-model)
- [Coding Rules for AI Tools](#coding-rules-for-ai-tools)
  - [Front-End Implementation Rules](#front-end-implementation-rules)
  - [Back-End Integration Expectations](#back-end-integration-expectations)
  - [Deployment & DevOps Rules](#deployment--devops-rules)
- [Extending the Experience](#extending-the-experience)
- [Acknowledgements](#acknowledgements)

## Quick Start

> **Prerequisite:** Node.js 18+ and npm.

```bash
npm install
npm run dev
```

The dev server defaults to `http://localhost:5173/`.

⚠️ If the npm registry is blocked in your environment, cache or mirror the dependencies locally before running the commands above.

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Starts the Vite dev server with hot module replacement. |
| `npm run build` | Produces a production build in `dist/`. |
| `npm run preview` | Serves the `dist/` build locally for smoke testing. |

## Project Structure

```
DECO7285-big-screen/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── components/
│   │   ├── FeedbackPanel.jsx
│   │   ├── Header.jsx
│   │   ├── HeatMap.jsx
│   │   ├── QrPanel.jsx
│   │   ├── ScopePanel.jsx
│   │   ├── SensorStatusPill.jsx
│   │   └── ZoneDetails.jsx
│   └── data/
│       └── temperatureZones.js
└── README.md
```

## Design & Interaction Notes

- **Map Composition:** The library plan is drawn via CSS grid overlays. Each zone card pulls from `temperatureZones` data to ensure the UI is data-driven and easily replaceable with real sensor payloads.
- **Responsive Layout:** The dashboard uses a two-column layout that gracefully stacks on smaller breakpoints, keeping the heat map as the visual anchor.
- **Accessibility:** High-contrast colors and uppercase tracking mirror the original concept art while remaining screen-reader friendly via semantic HTML structure.

## Data Model

The current build uses static JSON-like modules to simulate real-time data:

- `temperatureZones`: zone-level aggregates with spatial metadata.
- `sensorHealth`: cluster availability for the header.
- `feedbackSnapshots`: rolling windows of user-submitted button presses.
- `temperatureScope`: range configuration for gradient legends.

Swap these structures with live API responses once the hardware pipeline is ready.

## Coding Rules for AI Tools

These guardrails must be followed whenever AI-assisted coding tools (e.g., Claude Code, Cursor, Copilot, Codeium) touch this codebase. **Always reference and comply with the rules that match your task category.**

### Front-End Implementation Rules

1. **Architect for SOLID:** Break UI into small, composable components. Single-responsibility logic only.
2. **Honor DRY:** Centralise mock data, constants, and utility functions to avoid duplication.
3. **Prefer KISS & Readability:** Keep JSX expressive yet concise. Inline complex Tailwind utilities only when they improve clarity.
4. **Comment Thoroughly:** Every component and helper must include concise docstrings or inline comments explaining intent.
5. **State Management:** Use React hooks (or future context) over prop-drilling when more than two nesting levels require the same data.
6. **Styling:** Tailwind is the canonical styling approach. Avoid ad-hoc CSS files unless a pattern is reused widely.
7. **Testing Prep:** Write components to be testable via React Testing Library (deterministic outputs, data-testid when necessary).

### Back-End Integration Expectations

1. **API Contracts:** Define request/response DTOs before consuming endpoints; keep types mirrored in `/src/data` or a future `/src/services` folder.
2. **Error Handling Plan:** Surface sensor/offline states visually (already stubbed via `SensorStatusPill`). Plan to add toasts or banners when live data is unavailable.
3. **Security Considerations:** When integrating auth or database calls, enforce HTTPS, token-based auth, and sanitise all user-generated feedback.
4. **Not Implemented Yet:** This repository currently exposes only the front-end shell. Any AI tool proposing server changes must outline them in documentation rather than committing code here.

### Deployment & DevOps Rules

1. **Build Artefacts:** Production builds must be generated through `npm run build`. Never commit the `dist/` directory.
2. **Environment Variables:** Future secrets should live in `.env` files consumed via Vite `import.meta.env`. Document required keys in this README before use.
3. **CI/CD Hooks:** When adding pipelines, ensure lint/test/build stages run sequentially. Include caching strategies for node modules.
4. **Monitoring:** Capture basic Web Vitals via tools such as Vercel Analytics or Google Analytics only after privacy review.

## Extending the Experience

- **Realtime Sync:** Attach WebSocket listeners for button presses to animate hotspots in near real-time.
- **Multi-floor Support:** Introduce tabs or dropdowns for buildings/levels alongside the heat map.
- **Mobile Layout:** Convert the dashboard into a responsive PWA so students can bookmark their favourite seats.
- **Hardware Hooks:** Map ESP32 sensor IDs to the `temperatureZones` entries once the Firebase (or custom API) gateway is live.

## Acknowledgements

Design language and scenario derived from the Temperature project PRD.
