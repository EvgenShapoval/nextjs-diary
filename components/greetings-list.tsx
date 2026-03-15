"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

interface Greeting {
  id: number;
  name: string;
  liked: boolean;
}

const initialGreetings: Greeting[] = [
  { id: 1, name: "Ира", liked: false },
  { id: 2, name: "Олег", liked: false },
  { id: 3, name: "Тест", liked: false },
];

export function GreetingsList() {
  const [greetings, setGreetings] = useState<Greeting[]>(initialGreetings);

  const toggleLike = (id: number) => {
    setGreetings((prev) =>
      prev.map((greeting) =>
        greeting.id === id ? { ...greeting, liked: !greeting.liked } : greeting
      )
    );
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      {greetings.map((greeting) => (
        <div
          key={greeting.id}
          className="flex items-center justify-between p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900"
        >
          <span className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            {greeting.name} привет
          </span>
          <button
            onClick={() => toggleLike(greeting.id)}
            className="p-2 rounded-full transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800"
            aria-label={greeting.liked ? "Убрать лайк" : "Поставить лайк"}
          >
            <Heart
              className={`w-6 h-6 transition-colors ${
                greeting.liked
                  ? "fill-red-500 text-red-500"
                  : "text-zinc-400 hover:text-red-400"
              }`}
            />
          </button>
        </div>
      ))}
    </div>
  );
}
