import { createTheme, alpha } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    // Professional dark neutrals (no glow/gradients)
    background: {
      default: "#0B0F17", // app background
      paper: "#0F1623",   // surfaces/cards
    },

    primary: {
      main: "#cacaca",        // calm “product” blue
      contrastText: "#0B0F17",
    },
    secondary: {
      main: "#A78BFA",        // subtle violet accent (used sparingly)
      contrastText: "#0B0F17",
    },

    text: {
      primary: alpha("#FFFFFF", 0.92),
      secondary: alpha("#FFFFFF", 0.66),
    },

    button: {
      primary: "white",
      secondary: alpha("#FFFFFF", 0.70),
    },

    divider: alpha("#FFFFFF", 0.10),

    // Nice defaults for status UI
    success: { main: "#22C55E" },
    warning: { main: "#F59E0B" },
    error: { main: "#EF4444" },
    info: { main: "#38BDF8" },
  },

  shape: { borderRadius: 14 },

  typography: {
    fontFamily: [
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "Apple Color Emoji",
      "Segoe UI Emoji",
    ].join(","),

    h1: { fontSize: "2.25rem", fontWeight: 800, letterSpacing: "-0.03em" },
    h2: { fontSize: "1.65rem", fontWeight: 780, letterSpacing: "-0.02em" },
    h3: { fontSize: "1.25rem", fontWeight: 740, letterSpacing: "-0.01em" },
    h4: { fontSize: "1.08rem", fontWeight: 720 },

    body1: { fontSize: "1rem", lineHeight: 1.7 },
    body2: { fontSize: "0.95rem", lineHeight: 1.65 },

    button: { textTransform: "none", fontWeight: 700 },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          backgroundColor: "#0B0F17",
        },
        ":root": {
          "--autofill-bg": theme.palette.background.default,
        },

        /* Autofill (Chrome/Edge) - generic */
        "input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 1000px var(--autofill-bg) inset !important",
          boxShadow: "0 0 0 1000px var(--autofill-bg) inset !important",
          WebkitTextFillColor: `${theme.palette.text.primary} !important`,
          caretColor: `${theme.palette.text.primary} !important`,
          transition: "background-color 9999s ease-out 0s",
        },

        /* Autofill (Chrome/Edge) - MUI specificity */
        ".MuiInputBase-input:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 1000px var(--autofill-bg) inset !important",
          boxShadow: "0 0 0 1000px var(--autofill-bg) inset !important",
          WebkitTextFillColor: `${theme.palette.text.primary} !important`,
          caretColor: `${theme.palette.text.primary} !important`,
        },

        ".MuiInputBase-input:-webkit-autofill:focus": {
          WebkitBoxShadow: "0 0 0 1000px var(--autofill-bg) inset !important",
          boxShadow: "0 0 0 1000px var(--autofill-bg) inset !important",
        },
      }),
    },




    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `1px solid ${alpha("#FFFFFF", 0.08)}`,
          borderRadius: 16,
        }),
      },
    },

    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 12,
          padding: "10px 14px",
          transition:
            "transform 120ms ease, background-color 120ms ease, border-color 120ms ease",
          "&:active": { transform: "scale(0.99)" },
        }),

        containedPrimary: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          "&:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.88),
          },
        }),

        outlined: ({ theme }) => ({
          borderColor: alpha("#FFFFFF", 0.16),
          color: alpha("#FFFFFF", 0.88),
          "&:hover": {
            borderColor: alpha("#FFFFFF", 0.24),
            backgroundColor: alpha("#FFFFFF", 0.04),
          },
        }),

        text: ({ theme }) => ({
          "&:hover": { backgroundColor: alpha("#FFFFFF", 0.04) },
        }),
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 12,
          "&:hover": { backgroundColor: alpha("#FFFFFF", 0.06) },
        }),
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundImage: "none",
          backgroundColor: alpha(theme.palette.background.paper, 0.88),
          borderBottom: `1px solid ${alpha("#FFFFFF", 0.08)}`,
          backdropFilter: "blur(10px)", // subtle “modern”, still professional
        }),
      },
    },

    MuiTextField: { defaultProps: { variant: "outlined", size: "medium" } },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 12,
          backgroundColor: alpha("#FFFFFF", 0.03),
          transition: "background-color 120ms ease, box-shadow 120ms ease",
          "&:hover": { backgroundColor: alpha("#FFFFFF", 0.05) },

          "&.Mui-focused": {
            backgroundColor: alpha("#FFFFFF", 0.04),
            boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.20)}`,
          },
        }),
        notchedOutline: {
          borderColor: alpha("#FFFFFF", 0.14),
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: { color: alpha("#FFFFFF", 0.70) },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 12,
          "&.Mui-selected": {
            backgroundColor: alpha(theme.palette.primary.main, 0.14),
          },
          "&.Mui-selected:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.18),
          },
        }),
      },
    },

    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 999,
          backgroundColor: alpha("#FFFFFF", 0.04),
          border: `1px solid ${alpha("#FFFFFF", 0.10)}`,
        }),
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          backgroundColor: alpha("#111827", 0.95),
          border: `1px solid ${alpha("#FFFFFF", 0.10)}`,
          borderRadius: 10,
        }),
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: alpha("#FFFFFF", 0.10),
        },
      },
    },
  },
});



export const lightTheme = createTheme({
  palette: {
    mode: "light",

    // Beige / off-white base (classy, not stark white)
    background: {
      default: "#FAF7F2", // warm canvas
      paper: "#FFFFFF",   // cards/surfaces
    },

    // Calm “product” blue (reads professional on beige)
    primary: {
      main: "#2563EB",
      contrastText: "#FFFFFF",
    },

    // Warm accent that still looks corporate-clean (optional)
    secondary: {
      main: "#B45309", // warm amber-brown
      contrastText: "#FFFFFF",
    },

    text: {
      primary: "#111827",
      secondary: alpha("#111827", 0.70),
    },

    divider: alpha("#111827", 0.10),

    // Status colors tuned to not scream on light bg
    success: { main: "#16A34A" },
    warning: { main: "#D97706" },
    error: { main: "#DC2626" },
    info: { main: "#0284C7" },
  },

  shape: { borderRadius: 14 },

  typography: {
    fontFamily: [
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "Apple Color Emoji",
      "Segoe UI Emoji",
    ].join(","),

    h1: { fontSize: "2.25rem", fontWeight: 800, letterSpacing: "-0.03em", color: "#111827" },
    h2: { fontSize: "1.65rem", fontWeight: 780, letterSpacing: "-0.02em", color: "#111827" },
    h3: { fontSize: "1.25rem", fontWeight: 740, letterSpacing: "-0.01em", color: "#111827" },
    h4: { fontSize: "1.08rem", fontWeight: 720, color: "#111827" },

    body1: { fontSize: "1rem", lineHeight: 1.7, color: "#111827" },
    body2: { fontSize: "0.95rem", lineHeight: 1.65, color: alpha("#111827", 0.85) },

    button: { textTransform: "none", fontWeight: 700 },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#FAF7F2",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundImage: "none",
          border: `1px solid ${alpha("#111827", 0.10)}`,
          boxShadow: `0 10px 28px ${alpha("#111827", 0.08)}`,
        }),
      },
    },

    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 16,
          border: `1px solid ${alpha("#111827", 0.10)}`,
        }),
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundImage: "none",
          backgroundColor: alpha("#FFFFFF", 0.85),
          borderBottom: `1px solid ${alpha("#111827", 0.10)}`,
          color: theme.palette.text.primary,
          boxShadow: "none",
          backdropFilter: "blur(10px)", // subtle modern polish
        }),
      },
    },

    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 14px",
          transition:
            "transform 120ms ease, background-color 120ms ease, border-color 120ms ease",
          "&:active": { transform: "scale(0.99)" },
        },

        containedPrimary: ({ theme }) => ({
          boxShadow: `0 8px 18px ${alpha(theme.palette.primary.main, 0.18)}`,
          "&:hover": {
            boxShadow: `0 10px 22px ${alpha(theme.palette.primary.main, 0.20)}`,
            backgroundColor: alpha(theme.palette.primary.main, 0.92),
          },
        }),

        outlined: ({ theme }) => ({
          borderColor: alpha("#111827", 0.18),
          color: alpha("#111827", 0.90),
          "&:hover": {
            borderColor: alpha("#111827", 0.26),
            backgroundColor: alpha("#111827", 0.04),
          },
        }),

        text: {
          "&:hover": { backgroundColor: alpha("#111827", 0.04) },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          "&:hover": { backgroundColor: alpha("#111827", 0.05) },
        },
      },
    },

    MuiTextField: { defaultProps: { variant: "outlined", size: "medium" } },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 12,
          backgroundColor: alpha("#111827", 0.03),
          transition: "background-color 120ms ease, box-shadow 120ms ease",
          "&:hover": { backgroundColor: alpha("#111827", 0.05) },
          "&.Mui-focused": {
            backgroundColor: alpha("#111827", 0.035),
            boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.18)}`,
          },
        }),
        notchedOutline: {
          borderColor: alpha("#111827", 0.16),
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: { color: alpha("#111827", 0.65) },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: { borderColor: alpha("#111827", 0.10) },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          backgroundColor: alpha("#111827", 0.04),
          border: `1px solid ${alpha("#111827", 0.10)}`,
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 12,
          "&.Mui-selected": {
            backgroundColor: alpha(theme.palette.primary.main, 0.10),
          },
          "&.Mui-selected:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.14),
          },
        }),
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: alpha("#111827", 0.94),
          borderRadius: 10,
        },
      },
    },
  },
});