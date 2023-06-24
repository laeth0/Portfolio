/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': '#007ced',
        'black-color': '#666',
        "gray-color": "rgb(17 24 39 / var(--tw-text-opacity))"
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

