import React from 'react'

export default function GradientGlow() {
  return (
    <div aria-hidden style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        width: 550,
        height: 550,
        left: -200,
        top: -200,
        background: 'radial-gradient(circle at 30% 30%, rgba(56,189,248,0.40), transparent 60%)',
        filter: 'blur(20px)'
      }} />
      <div style={{
        position: 'absolute',
        width: 700,
        height: 700,
        right: -250,
        bottom: -250,
        background: 'radial-gradient(circle at 70% 70%, rgba(78, 78, 78, 0.3), transparent 30%)',
        filter: 'blur(20px)'
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
        opacity: 0.55
      }} />
    </div>
  )
}
