'use client';

import React from 'react';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="flex h-screen overflow-hidden">
      <Sidebar />
      <article className="flex-1 overflow-y-auto bg-gray-100 p-6 transition-all duration-300">
        {children}
      </article>
    </main>
  );
}