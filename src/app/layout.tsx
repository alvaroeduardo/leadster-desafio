import './global.css';

export const metadata = {
  title: 'LEADSTER • Líder em Marketing Conversacional',
  description: 'Nosso propósito é construir um produto global que seja utilizado por milhões de pessoas a partir do Brasil'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
