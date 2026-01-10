import React from 'react'
import { Box, Typography } from '@mui/material'
import { FadeUp } from './Motion'

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <FadeUp>
      <Box sx={{ mb: 3 }}>
        {eyebrow && (
          <Typography
            sx={{
              display: 'inline-flex',
              px: 1.2,
              py: 0.4,
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.14)',
              background: 'rgba(255,255,255,0.05)',
              fontWeight: 800,
              fontSize: 12,
              letterSpacing: 0.6,
              textTransform: 'uppercase',
              opacity: 0.9
            }}
          >
            {eyebrow}
          </Typography>
        )}
        <Typography variant="h2" sx={{ mt: 1 }}>{title}</Typography>
        {subtitle && <Typography sx={{ mt: 1, opacity: 0.82, maxWidth: 760 }}>{subtitle}</Typography>}
      </Box>
    </FadeUp>
  )
}
