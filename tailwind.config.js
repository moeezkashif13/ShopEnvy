/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      padding:{

        mobile : '12px'

      },

      colors:{

        'primary': '#558B6E',
// used for important elements that you want to stand out. Use it for your website's primary buttons, headings, and key calls to action.

        'secondary ': '#88A09E',

        // It can be used for secondary buttons, background accents, and to provide contrast to the primary color. You can use it for subheadings, or as a background for certain sections.

        'third': '#704C5E',

        // This color can work well as a background color for your website, especially if you want to create a visually pleasing and harmonious atmosphere. It should provide a good contrast for text, making it easy to read. Use it for the background of your content sections and overall website layout.



        'tertiary ': '#B88C9E',

        // The tertiary color can be used for additional accent elements that you want to stand out but not as prominently as the primary and secondary colors. Consider using it for icons, less important buttons, and other minor design elements.



        'accent': '#F1C8DB',

        // The accent color is typically used sparingly to highlight specific elements, such as links, icons, or promotional banners. It can be used to draw attention to special offers or to add a touch of contrast to your design.


      }
    },
  },
  plugins: [],
}
