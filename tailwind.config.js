module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'green': '#399658',
        'bright-green': '#39B558',
        'blue': '#5C73F2',
        'unclicked-links-blue': '#2596be',
        'main-content-black': '#32363B',
        'chat-box-search-bar-main': '#42474D',
        'sub-black': '#2F3136',
        'channel-hover-grey': '#3A3C42',
        'channel-active-grey': '#42474D',
        'server-bar-black': '#212429',
        'light-grey': '#B4BBCF',
        'inactive-light-grey': '#838896',
        'white': '#EDEDED',
        'error-orange': '#E17366'
      },

      fontFamily: {
        'sans': ["Sans Serif"],
        'body': ["Open Sans"]
      },
      spacing: {
        '108': '27rem',
        '120': '30rem',
        '132': '33rem',
        '144': '36rem',
        '192': '48rem'
      }
    },
    minHeight: {
      '48': '48px'
    }
  },
  plugins: [],
}