export const metadata = {
  title: 'VA Simulator',
  description: 'Virtual Assistant Simulator & Traffic Analytics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
