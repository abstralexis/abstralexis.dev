/** @type {import('tailwindcss').Config} */
import tailwindcss from "@catppuccin/tailwindcss"; 

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss,
  ],
}

