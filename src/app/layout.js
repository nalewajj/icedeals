<a href="/login" className="font-semibold">Logowanie</a>
<a href="/register" className="font-semibold">Rejestracja</a>import "./globals.css";

export const metadata = {
  title: "IceDeals",
  description: "Okazje z Islandii"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="p-4 bg-gray-100 flex gap-4">
          <a href="/" className="font-semibold">Strona główna</a>
          <a href="/add" className="font-semibold">Dodaj okazję</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
