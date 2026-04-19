`jsx
"use client";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const res = await fetch("http://localhost:4000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Rejestracja</h1>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-2"
        placeholder="Hasło"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button
        onClick={register}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Zarejestruj
      </button>
    </div>
  );
}
`
