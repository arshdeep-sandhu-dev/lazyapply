import React from "react";
import {
  Alert,
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function RegistryBox({
  onSubmit,
  onGoogleSignIn,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  isDoingAction,
  errorMessage,
  isRegistering,
}) {
  const title = isRegistering ? "Create your account" : "Welcome back";
  const subtitle = isRegistering
    ? "Sign up with email or continue with Google."
    : "Sign in to continue.";

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: 420,
        p: 3,
        borderRadius: 3,
      }}
    >
      <Stack spacing={2.25} component="form" onSubmit={onSubmit}>
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        </Box>

        {errorMessage ? (
          <Alert severity="error" variant="outlined">
            {errorMessage}
          </Alert>
        ) : null}

        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          fullWidth
          required
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete={isRegistering ? "new-password" : "current-password"}
          fullWidth
          required
        />

        {isRegistering ? (
          <TextField
            label="Confirm password"
            type="password"
            value={confirmPassword ?? ""}
            onChange={(e) => setConfirmPassword?.(e.target.value)}
            autoComplete="new-password"
            fullWidth
            required
          />
        ) : null}

        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={isDoingAction}
          fullWidth
        >
          {isDoingAction
            ? isRegistering
              ? "Creating account..."
              : "Signing in..."
            : isRegistering
            ? "Create account"
            : "Sign in"}
        </Button>

        <Divider sx={{ my: 0.5 }}>or</Divider>

        <Button
          variant="outlined"
          size="large"
          onClick={onGoogleSignIn}
          disabled={isDoingAction}
          fullWidth
        >
          Continue with Google
        </Button>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          {isRegistering ? "Already have an account?" : "Don’t have an account?"}{" "}
          <Box
            component={RouterLink}
            to={isRegistering ? "/login" : "/register"}
            sx={{ color: "primary.main", fontWeight: 700, textDecoration: "none" }}
          >
            {isRegistering ? "Sign in" : "Create one"}
          </Box>
        </Typography>
      </Stack>
    </Paper>
  );
}
