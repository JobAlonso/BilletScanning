// src/theme.js
import { createTheme } from '@mui/material/styles';

const darkNucorTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3B3F44', // a dark gray, similar to Nucor's branding
      contrastText: '#ffffff', // text on primary button, white
      light: '#4A4F54', // a lighter gray for hover effects
    },
    secondary: {
      main: '#858C91', // this is a lighter gray for secondary actions
      contrastText: '#F6FFEB', // text on secondary button near white
    },
    background: {
      default: '#121212', // main background color near black
      black: '#000000', // pure black for contrast
      white: '#ffffff', // pure white for contrast
      cardTitle: '#525960', // background color for card titles
      cardContent: '#33383E', // background color for card content
      paper: '#1e1e1e',   // background color for paper components near black
    },
    text: {
      primary: '#ffffff', // white text for content
      black: '#000000', // black text for contrast
      secondary: '#aaaaaa', // a lighter gray for secondary text
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    allVariants: {
        textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
    },
  },
});

export default darkNucorTheme;
// This theme can be used in the application by wrapping the components with a ThemeProvider
// from '@mui/material/styles' and passing this theme as a prop.