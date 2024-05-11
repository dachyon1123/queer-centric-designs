/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poetsen': ["Poetsen One", 'sans-serif'],
      'plus': ["M PLUS 1p", 'sans-serif']
    }
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FAF7EF",
          "secondary": "#FAF7EF",
          "accent": "#FAF7EF",
          "neutral": "#FAF7EF",
          "base-100": "#FAF7EF",
        },
      },
      "dark",
      "cupcake",
    ],
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}