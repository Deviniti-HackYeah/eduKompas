/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        kajtektext: '#5569B0',
        kajtekbg: '#deefff',
        kajtekborder: '#cde7ff',

        karatext: '#565553',
        karabg: '#fdf8e6',
        karaborder: '#f7e9b8',

        usertext: '#434343',
        userbg: '#ededed',
        userborder: '#d4d4d4',
      },
    },
  },
  plugins: [],
};
