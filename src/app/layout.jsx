import '../styles/index.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: {
    default: 'GrowX',
    template: 'GrowX',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}<script type="module" src="#"></script>
</body>
    </html>
  )
}