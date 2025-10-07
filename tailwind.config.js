/**
 * TailwindCSS configuration for the Temperature project.
 * The content property ensures purge targets the Vite + React file tree.
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0D1B2A',
        frost: '#00C2FF',
        ember: '#FF6B6B',
        limePulse: '#9BE564'
      },
      boxShadow: {
        glass: '0 30px 60px -20px rgba(15, 23, 42, 0.8)'
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
