'use client';

import AllBeers from '@/component/AllBeers';
import MyBeers from '@/component/MyBeers';
import { useEffect, useState } from 'react';

export default function Home() {
  const [tab, setTab] = useState('All Beers');
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="max-w-screen-xl min-h-screen px-24 py-24 mx-auto">
      <div className="flex justify-between mb-4 ">
        <div className="flex flex-row gap-4 mb-3">
          <button
            onClick={() => setTab('All Beers')}
            className={` text-base ${tab === 'All Beers' ? 'text-black' : ' text-gray-400'} font-normal`}
          >
            All Beers
          </button>
          <button
            onClick={() => setTab('My Beers')}
            className={`text-base ${tab === 'My Beers' ? ' text-black' : ' text-gray-400'} font-normal `}
          >
            My Beers
          </button>
        </div>
        <div className={`${tab === 'All Beers' ? 'hidden' : 'visible'}`}>
          <button onClick={() => setShowModal(true)} className=" bg-blue-600 text-white px-4 py-2 rounded-md">
            Add a new beer
          </button>
        </div>
      </div>

      {tab === 'All Beers' ? <AllBeers /> : <MyBeers showModal={showModal} setShowModal={setShowModal} />}
    </main>
  );
}
