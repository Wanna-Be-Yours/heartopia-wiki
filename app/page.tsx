"use client";

import React, { useState, useMemo } from 'react';
import { 
  EVENT_NOW, FISH_DATA, NPC_DATA, 
  INSECT_DATA, BIRD_DATA, WILD_ANIMALS_DATA, COOKING_DATA 
} from './data';

const getWeatherIcon = (weather) => {
  if (!weather) return '🌍';
  const w = Array.isArray(weather) ? weather.join(' ').toLowerCase() : String(weather).toLowerCase();
  if (w.includes('sun') || w.includes('☀️')) return '☀️';
  if (w.includes('rain') || w.includes('🌧️')) return '🌧️';
  if (w.includes('rainbow') || w.includes('🌈')) return '🌈';
  if (w.includes('cloud') || w.includes('☁️')) return '☁️';
  return '☀️';
};

export default function HeartopiaWiki() {
  const [activeTab, setActiveTab] = useState('Event');
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [weatherFilter, setWeatherFilter] = useState('all');

  // Reset filter saat ganti tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchTerm('');
    setLevelFilter('all');
    setLocationFilter('all');
    setWeatherFilter('all');
  };

  // Logika Filter Universal
  const filteredData = useMemo(() => {
    const dataMap = { 
      'Ikan': FISH_DATA, 'Serangga': INSECT_DATA, 
      'Burung': BIRD_DATA, 'NPC': NPC_DATA,
      'Masakan': COOKING_DATA, 'Wild Animals': WILD_ANIMALS_DATA
    };
    
    let list = dataMap[activeTab] || [];

    return list.filter((item) => {
      // 1. Filter Nama
      const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      // 2. Filter Level (Mencakup level, hobbyLv, birdwatch_level)
      const itemLevel = item.level || item.hobbyLv || item.birdwatch_level || 0;
      const matchLevel = levelFilter === 'all' || itemLevel.toString() === levelFilter;

      // 3. Filter Lokasi
      const matchLocation = locationFilter === 'all' || 
        (item.location && item.location.toLowerCase().includes(locationFilter.toLowerCase()));

      // 4. Filter Cuaca
      const itemWeather = Array.isArray(item.weather) ? item.weather.join(' ') : (item.weather || '');
      const matchWeather = weatherFilter === 'all' || itemWeather.includes(weatherFilter);

      return matchSearch && matchLevel && matchLocation && matchWeather;
    });
  }, [activeTab, searchTerm, levelFilter, locationFilter, weatherFilter]);

  // Ekstrak lokasi unik untuk dropdown
  const uniqueLocations = useMemo(() => {
    const dataMap = { 'Ikan': FISH_DATA, 'Serangga': INSECT_DATA, 'Burung': BIRD_DATA, 'Wild Animals': WILD_ANIMALS_DATA };
    const list = dataMap[activeTab] || [];
    return Array.from(new Set(list.map(item => item.location).filter(Boolean)));
  }, [activeTab]);

  const renderContent = () => {
    if (activeTab === 'Event') {
      return (
        <div className="bg-blue-900/40 p-6 rounded-2xl border border-blue-400/30 shadow-xl">
          <h2 className="text-2xl font-bold text-blue-200 mb-2">{EVENT_NOW.name}</h2>
          <p className="text-blue-300 text-sm mb-4">Berakhir pada: {EVENT_NOW.endDate}</p>
          <ul className="space-y-3">
            {EVENT_NOW.highlights.map((h, i) => (
              <li key={`event-${i}`} className="flex gap-3 text-gray-200 bg-black/20 p-3 rounded-lg border border-white/5">{h}</li>
            ))}
          </ul>
        </div>
      );
    }

    if (activeTab === 'Masakan') {
      return (
        <div className="space-y-6">
          {filteredData.map((dish) => (
            <div key={`dish-${dish.id}-${dish.name}`} className="bg-gray-800/40 rounded-2xl border border-white/10 overflow-hidden shadow-xl">
              <div className="p-4 border-b border-white/5 bg-gradient-to-r from-orange-500/10 to-transparent flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-orange-300">{dish.name}</h3>
                  <div className="flex gap-2 mt-1">
                    {dish.ingredients.map((ing, i) => <span key={`ing-${i}`}>{ing}</span>)}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold bg-orange-500/20 text-orange-300 px-2 py-1 rounded">LV. {dish.level}</span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="px-4 py-3 text-gray-400 w-24">💰 Harga</td>
                      {dish.prices.map((p, i) => <td key={`price-${i}`} className="px-4 py-3 text-orange-200 font-mono">{p.toLocaleString()}</td>)}
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-400">⚡ Energi</td>
                      {dish.energy.map((e, i) => <td key={`energy-${i}`} className="px-4 py-3 text-green-400 font-bold">+{e}</td>)}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((item) => (
          <div key={`${activeTab}-${item.id}-${item.name}`} className="bg-gray-800/40 p-4 rounded-xl border border-white/10 hover:border-pink-500/30 transition-all">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-white text-lg">{item.name} {item.icon}</h3>
              <div className="flex gap-1">
                 {Array.isArray(item.weather) ? item.weather.map((w, idx) => <span key={idx}>{getWeatherIcon(w)}</span>) : getWeatherIcon(item.weather)}
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-gray-500">📍 Lokasi:</span> <span className="text-right">{item.location}</span>
              </p>
              <p className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-gray-500">⏰ Waktu:</span> <span className="text-xs text-right">{Array.isArray(item.time) ? item.time.join(', ') : item.time}</span>
              </p>
              {(item.level || item.hobbyLv || item.birdwatch_level) && (
                <p className="flex justify-between text-yellow-400 font-bold">
                  <span>Level:</span> <span>Lv. {item.level || item.hobbyLv || item.birdwatch_level}</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white pb-20 selection:bg-pink-500/30">
      <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10 p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 italic">HEARTOPIA WIKI</h1>
          <div className="flex overflow-x-auto gap-2 no-scrollbar">
            {['Event', 'Wild Animals', 'Masakan', 'Ikan', 'Serangga', 'Burung', 'NPC'].map((tab) => (
              <button key={tab} onClick={() => handleTabChange(tab)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${activeTab === tab ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/20' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 md:p-6">
        {activeTab !== 'Event' && (
          <div className="space-y-3 mb-8">
            <input type="text" placeholder={`Cari ${activeTab.toLowerCase()}...`} 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-pink-500/50 outline-none transition-all"
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            
            <div className="grid grid-cols-3 gap-2">
              <select className="bg-white/5 border border-white/10 rounded-xl px-2 py-3 text-xs outline-none focus:border-pink-500/50"
                value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)}>
                <option value="all">Level: All</option>
                {[...Array(15)].map((_, i) => <option key={i+1} value={i+1}>Level {i+1}</option>)}
              </select>

              <select className="bg-white/5 border border-white/10 rounded-xl px-2 py-3 text-xs outline-none focus:border-pink-500/50"
                value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
                <option value="all">Lokasi: All</option>
                {uniqueLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>

              <select className="bg-white/5 border border-white/10 rounded-xl px-2 py-3 text-xs outline-none focus:border-pink-500/50"
                value={weatherFilter} onChange={(e) => setWeatherFilter(e.target.value)}>
                <option value="all">Cuaca: All</option>
                <option value="☀️">☀️ Sun</option>
                <option value="🌧️">🌧️ Rain</option>
                <option value="🌈">🌈 Rainbow</option>
                <option value="☁️">☁️ Cloudy</option>
              </select>
            </div>
            <div className="flex justify-between items-center px-1">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Found {filteredData.length} items</p>
              {(searchTerm || levelFilter !== 'all' || locationFilter !== 'all' || weatherFilter !== 'all') && (
                <button onClick={() => {setSearchTerm(''); setLevelFilter('all'); setLocationFilter('all'); setWeatherFilter('all');}} 
                        className="text-[10px] text-pink-400 font-bold uppercase hover:underline">Clear Filters</button>
              )}
            </div>
          </div>
        )}

        {renderContent()}
      </main>

      <footer className="fixed bottom-0 w-full bg-neutral-950/90 backdrop-blur-md border-t border-white/5 p-3 text-center text-[10px] text-gray-600 uppercase tracking-[0.2em]">
        Heartopia Wiki • Update 2026
      </footer>
    </div>
  );
}