'use client';

import React from 'react';

export default function Sidebar() {
  return (
    <aside className="bg-gray-200 text-gray-900 w-64 h-screen p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Callie Spurlock</span>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <span className="material-icons">expand_more</span>
        </button>
      </div>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search articles or rem..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
      </div>

      {/* Main Upper List */}
      <nav className="mb-4">
        <ul>
          <li className="mb-2">
            <a href="#" className="block px-2 py-1 hover:bg-gray-300 rounded">
              All notes
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block px-2 py-1 hover:bg-gray-300 rounded">
              Daily Notes
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block px-2 py-1 hover:bg-gray-300 rounded">
              Flashcards
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block px-2 py-1 hover:bg-gray-300 rounded">
              Edit Later
            </a>
          </li>
        </ul>
      </nav>

      {/* Two Buttons Horizontally Aligned */}
      <div className="mb-4">
        <button className="px-2 py-1 bg-gray-300 text-gray-700 rounded mr-2">
          Subscribed
        </button>
        <button className="px-2 py-1 bg-gray-300 text-gray-700 rounded">
          All Spaces
        </button>
      </div>

      {/* Lower List */}
      <nav>
        <ul>
          <li className="mb-2">
            <a href="#" className="block px-2 py-1 hover:bg-gray-300 rounded">
              The Science of Biology
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block px-2 py-1 hover:bg-gray-300 rounded">
              The Chemistry of Life
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block px-2 py-1 hover:bg-gray-300 rounded">
              The Biosphere
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block px-2 py-1 hover:bg-gray-300 rounded">
              What is Ecology?
            </a>
          </li>
          <li className="ml-4 mb-2">
            <a href="#" className="block px-2 py-1 hover:bg-gray-300 rounded">
              Energy Flow
            </a>
          </li>
          <li className="ml-4 mb-2">
            <a href="#" className="block px-2 py-1 hover:bg-gray-300 rounded">
              Cycle of Matter
            </a>
          </li>
          <li className="ml-4 mb-2">
            <a href="#" className="block px-2 py-1 hover:bg-gray-300 rounded">
              The role of Climate
            </a>
          </li>
          <li className="ml-4 mb-2">
            <a href="#" className="block px-2 py-1 hover:bg-gray-300 rounded">
              Renewable and Nonrenewable...
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block px-2 py-1 hover:bg-gray-300 rounded">
              Ecosystems and Communities
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block px-2 py-1 hover:bg-gray-300 rounded">
              Populations
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}