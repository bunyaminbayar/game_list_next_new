'use client';
import React from 'react';
import GameList from '@/app/components/GameList';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1>Characters List</h1>
      <GameList />
    </main>
  );
}
