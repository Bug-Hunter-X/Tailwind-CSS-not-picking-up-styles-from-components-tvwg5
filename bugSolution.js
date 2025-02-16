```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: [ 
    './src/**/*.{js,jsx,ts,tsx}', // Include JSX and TSX files
    './src/**/*.html' // Include HTML files if using
  ], // Ensure you include all relevant directories
  theme: {
    extend: {},
  },
  plugins: [],
};
```