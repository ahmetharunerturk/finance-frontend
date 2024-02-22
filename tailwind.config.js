//npx tailwindcss -i ./input.css -o ./output.css --watch


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      padding: '195px',
      center: true,
      screens:{
        lg:'1140px',
        xl:'1140px',
        '2xl':'1130px',
      }
    },
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],

      },

      colors: {
        'primary-color': '#23A6F0',
        'secondary-color-1': '#40BB15',
        'secondary-color-2': '#3C403D',
        'text-color': '#252B42',
        'second-text-color': '#737373',
        'light-text-color': '#FFFFFF',
        'dark-background-color': '#252B42',
        'light-background-color': '#FFFFFF',
        'hover-color': '#2A7CC7',
        'disabled-element-color': '#8EC2F2',
        'muted-color': '#BDBDBD',
        'success-color': '#2DC071',
        'alert-color': '#E77C40',
        'danger-color': '#E74040',
        'light-gray-1': '#FAFAFA',
        'light-gray-2': '#ECECEC',
        'corner': "E9E9E9",
      },

    },
  },
  plugins: [],
}

