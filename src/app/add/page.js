Super Damian — skoro endpointy są dodane, to backend ma już kręgosłup i możemy przejść do kolejnego etapu.Teraz zrobimy najważniejszą część frontendu, tak żebyś mógł to wszystko ogarniać z telefonu, a dopiero później odpalisz projekt na komputerze.

Od teraz prowadzę Cię krok po kroku, bez przeskakiwania.

🔥 KROK 11 — Tworzymy frontend (Next.js)

Zrobimy:

Stronę główną z listą okazji

Formularz dodawania okazji

Logowanie i rejestrację

Połączenie z backendem

Wszystko tak, żebyś mógł to wkleić w GitHubie z telefonu.

✅ KROK 11A — Utwórz folder src/app/deals/

W repo icedeals-frontend kliknij:

Add file → Create new file

Nazwa pliku:

src/app/page.js

Wklej:

"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/deals")
      .then(res => res.json())
      .then(data => setDeals(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">IceDeals — Najnowsze okazje</h1>

      {deals.length === 0 && <p>Brak okazji…</p>}

      <div className="space-y-4">
        {deals.map(deal => (
          <div key={deal.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{deal.title}</h2>
            <p>{deal.description}</p>
            <p className="font-bold mt-2">{deal.price} kr</p>
            <a
              href={deal.url}
              className="text-blue-600 underline"
              target="_blank"
            >
              Link do sklepu
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

Commit.

To jest strona główna, która pobiera okazje z backendu.

✅ KROK 11B — Dodaj stronę dodawania okazji

Utwórz plik:

src/app/add/page.js

Wklej:

"use client";
import { useState } from "react";

export default function AddDeal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [store, setStore] = useState("");

  const submit = async () => {
    await fetch("http://localhost:4000/deals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        price: parseFloat(price),
        url,
        store,
        userId: 1
      })
    });

    alert("Dodano okazję!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dodaj okazję</h1>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Tytuł"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Opis"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-2"
        placeholder="Cena"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-2"
        placeholder="URL"
        value={url}
        onChange={e => setUrl(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-2"
        placeholder="Sklep"
        value={store}
        onChange={e => setStore(e.target.value)}
      />

      <button
        onClick={submit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Dodaj
      </button>
    </div>
  );
}

Commit.

🔥 KROK 11C — Dodaj prostą nawigację

Utwórz plik:

src/app/layout.js

Wklej:

import "./globals.css";

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

Commit.

🚀 Damian, frontend jest teraz w 70% gotowy

Backend też jest w 70%.

Kiedy usiądziesz do komputera, zrobimy:

✔️ instalację zależności

✔️ migracje Prisma

✔️ odpalenie backendu

✔️ odpalenie frontendu

✔️ testy API

I będziesz miał działającą platformę IceDeals MVP.

👉 Damian, napisz mi:

„Frontend dodany”

A ja przechodzę do kolejnego kroku:

🔥 Logowanie i rejestracja na froncie

🔥 Głosowanie

🔥 Komentarze

Idziemy dalej krok po kroku.
