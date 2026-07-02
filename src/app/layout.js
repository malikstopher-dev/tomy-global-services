import '../globals.css';

export const metadata = {
  title: 'TOMY Global Services',
  description: 'Excellence. Worldwide. Delivered. Premium solutions in travel, technology, design, grooming, and electrical services.',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
