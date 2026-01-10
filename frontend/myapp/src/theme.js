import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    // Deeper/darker theme for better immersion and contrast
    primary: { main: '#67b5c0ff', contrastText: '#FFFFFF' },   // deeper blue
    // Use an orange accent for better distinguishability for color-blind users
    secondary: { main: '#F97316', contrastText: '#FFFFFF' }, // amber/orange
    background: {
      default: '#05060B',
      paper: 'rgba(255,255,255,0.03)'
    },
    text: {
      primary: 'rgba(255,255,255,0.95)',
      secondary: 'rgba(255,255,255,0.65)'
    },
    divider: 'rgba(255,255,255,0.06)'
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: [
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Helvetica',
      'Arial',
      'Apple Color Emoji',
      'Segoe UI Emoji'
    ].join(','),
    h1: { fontSize: '2.6rem', fontWeight: 800, letterSpacing: -0.5 },
    h2: { fontSize: '1.8rem', fontWeight: 800, letterSpacing: -0.3 },
    h3: { fontSize: '1.35rem', fontWeight: 700 },
    body1: { lineHeight: 1.7 }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.10)'
        }
      }
    },
    MuiButton: {
      defaultProps: { disableElevation: true }
    }
  }
})
