"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { 
  EVENT_NOW, FISH_DATA, NPC_DATA, 
  INSECT_DATA, BIRD_DATA, WILD_ANIMALS_DATA, COOKING_DATA, GARDENING_DATA
} from './data';

const getWeatherIcon = (weather: any) => {
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

  // RESET SEMUA FILTER SAAT TAB BERUBAH
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSearchTerm('');
    setLevelFilter('all');
    setLocationFilter('all');
    setWeatherFilter('all');
  };

  const filteredData = useMemo(() => {
    const dataMap: { [key: string]: any[] } = { 
      'Ikan': FISH_DATA, 'Serangga': INSECT_DATA, 
      'Burung': BIRD_DATA, 'NPC': NPC_DATA,
      'Masakan': COOKING_DATA, 'Wild Animals': WILD_ANIMALS_DATA,
      'Gardening': GARDENING_DATA
    };
    
    let list = dataMap[activeTab] || [];

    return list.filter((item) => {
      const itemName = item?.name || "";
      const matchSearch = itemName.toLowerCase().includes(searchTerm.toLowerCase());
      
      const itemLevel = item.level || item.hobbyLv || item.birdwatch_level || item.gardeningLvl || 0;
      const matchLevel = levelFilter === 'all' || itemLevel.toString() === levelFilter;
      
      const itemLocation = item?.location || "";
      // Gunakan includes agar filter lokasi lebih fleksibel
      const matchLocation = locationFilter === 'all' || itemLocation.toLowerCase().includes(locationFilter.toLowerCase());
      
      const itemWeather = Array.isArray(item.weather) ? item.weather.join(' ') : (item.weather || '');
      const matchWeather = weatherFilter === 'all' || itemWeather.toLowerCase().includes(weatherFilter.toLowerCase());

      return matchSearch && matchLevel && matchLocation && matchWeather;
    });
  }, [activeTab, searchTerm, levelFilter, locationFilter, weatherFilter]);

  const uniqueLocations = useMemo(() => {
    const dataMap: { [key: string]: any[] } = { 
        'Ikan': FISH_DATA, 'Serangga': INSECT_DATA, 'Burung': BIRD_DATA, 'Wild Animals': WILD_ANIMALS_DATA 
    };
    const list = dataMap[activeTab] || [];
    // Mengambil lokasi unik dan membersihkan nilai null/undefined
    return Array.from(new Set(list.map(item => item.location).filter(Boolean)));
  }, [activeTab]);

  const renderContent = () => {
    // Kita tambahkan "key" pada div utama agar React mereset scroll dan state DOM setiap pindah tab
    return (
      <div key={`content-wrapper-${activeTab}`} className="animate-in fade-in duration-300">
        {activeTab === 'Event' && (
          <div className="bg-blue-900/40 p-6 rounded-2xl border border-blue-400/30 shadow-xl">
            <h2 className="text-2xl font-bold text-blue-200 mb-2">{EVENT_NOW.name}</h2>
            <p className="text-blue-300 text-sm mb-4">Berakhir: {EVENT_NOW.endDate}</p>
            <ul className="space-y-3">
              {EVENT_NOW.highlights.map((h: string, i: number) => (
                <li key={`ev-${i}`} className="flex gap-3 text-gray-200 bg-black/20 p-3 rounded-lg border border-white/5">{h}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'Gardening' && (
          <div className="grid grid-cols-1 gap-6">
            {filteredData.map((crop) => (
              <div key={`crop-${crop.id}`} className="bg-gray-800/40 rounded-2xl border border-white/10 overflow-hidden shadow-xl">
                <div className="p-4 border-b border-white/5 bg-gradient-to-r from-green-500/10 to-transparent flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{crop.icon || '🌱'}</span>
                    <div>
                      <h3 className="text-xl font-bold text-green-300">{crop.name}</h3>
                      <p className="text-xs text-gray-400 italic">⏳ Waktu: {crop.growthTime}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold bg-green-500/20 text-green-300 px-2 py-1 rounded">LV. {crop.gardeningLvl}</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs md:text-sm">
                        <thead className="bg-white/5 text-[10px] text-gray-400 uppercase">
                            <tr>
                                <th className="px-4 py-2">Info</th>
                                <th className="px-4 py-2 text-red-400">Beli Benih</th>
                                <th className="px-4 py-2">⭐</th>
                                <th className="px-4 py-2">⭐⭐</th>
                                <th className="px-4 py-2">⭐⭐⭐</th>
                                <th className="px-4 py-2">⭐⭐⭐⭐</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            <tr>
                                <td className="px-4 py-3 text-gray-400 italic">Gold</td>
                                <td className="px-4 py-3 text-red-400 font-mono">-{crop.seedPurchase}</td>
                                {crop.prices.map((p: number, idx: number) => (
                                    <td key={idx} className="px-4 py-3 text-yellow-200 font-mono">{p ? `+${p.toLocaleString()}` : '-'}</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Masakan' && (
          <div className="space-y-6">
            {filteredData.map((dish) => (
              <div key={`dish-${dish.id}`} className="bg-gray-800/40 rounded-2xl border border-white/10 overflow-hidden shadow-xl">
                <div className="p-4 border-b border-white/5 bg-gradient-to-r from-orange-500/10 to-transparent flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-orange-300">{dish.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {dish.ingredients.map((ing: string, i: number) => (
                            <span key={i} className="text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/10">{ing}</span>
                        ))}
                    </div>
                  </div>
                  <span className="text-xs font-bold bg-orange-500/20 text-orange-300 px-2 py-1 rounded">LV. {dish.level}</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs md:text-sm">
                        <tbody className="divide-y divide-white/5">
                            <tr>
                                <td className="px-4 py-3 text-gray-400 font-medium">💰 Harga</td>
                                {dish.prices.map((p: number, i: number) => <td key={i} className="px-4 py-3 text-orange-200 font-mono">{p?.toLocaleString() || '-'}</td>)}
                            </tr>
                            <tr className="bg-white/5">
                                <td className="px-4 py-3 text-gray-400 font-medium">⚡ Energi</td>
                                {dish.energy.map((e: any, i: number) => <td key={i} className="px-4 py-3 text-green-400 font-bold">+{e}</td>)}
                            </tr>
                        </tbody>
                    </table>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* DEFAULT LAYOUT UNTUK IKAN, SERANGGA, BURUNG, NPC, WILD ANIMALS */}
        {['Ikan', 'Serangga', 'Burung', 'NPC', 'Wild Animals'].includes(activeTab) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeTab === 'Wild Animals' && (
                    <div className="col-span-full bg-gray-800/50 p-2 rounded-2xl border border-white/10 mb-4 overflow-hidden shadow-2xl">
                        <img src="./img/animal_map.png" alt="Map" className="w-full h-auto rounded-xl"/>
                    </div>
                )}
                {filteredData.map((item) => (
                    <div key={`${activeTab}-${item.id}`} className="bg-gray-800/40 p-4 rounded-xl border border-white/10 hover:border-pink-500/30 transition-all">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-white text-lg">{item.name} {item.icon}</h3>
                            <div className="flex gap-1">
                                {Array.isArray(item.weather) ? item.weather.map((w: any, idx: number) => <span key={idx}>{getWeatherIcon(w)}</span>) : (item.weather ? getWeatherIcon(item.weather) : null)}
                            </div>
                        </div>
                        <div className="space-y-2 text-sm text-gray-300">
                            {activeTab === 'NPC' ? (
                                <p className="flex justify-between border-b border-white/5 pb-1">
                                    <span className="text-gray-500 italic">Profesi:</span> 
                                    <span className="text-right text-blue-300 font-semibold">{item.profession}</span>
                                </p>
                            ) : (
                                <>
                                    <p className="flex justify-between border-b border-white/5 pb-1">
                                        <span className="text-gray-500 italic">Lokasi:</span> <span className="text-right">{item.location}</span>
                                    </p>
                                    <p className="flex justify-between border-b border-white/5 pb-1">
                                        <span className="text-gray-500 italic">Waktu:</span> <span className="text-xs text-right">{Array.isArray(item.time) ? item.time.join(', ') : item.time}</span>
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white pb-24 font-sans">
      <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-white/10 p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-black bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-4 italic tracking-tighter uppercase">HEARTOPIA WIKI</h1>
          <div className="flex overflow-x-auto gap-2 no-scrollbar">
            {['Event', 'Wild Animals', 'Gardening', 'Masakan', 'Ikan', 'Serangga', 'Burung', 'NPC'].map((tab) => (
              <button key={tab} onClick={() => handleTabChange(tab)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${activeTab === tab ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                {tab === 'Wild Animals' ? '🐾 Animals' : tab === 'Gardening' ? '🌱 Gardening' : tab === 'Ikan' ? '🐟Fish' : tab === 'Serangga' ? '🦋Insect' : tab === 'Burung' ? '🐦Bird' : tab === 'NPC' ? '👤NPC' : tab === 'Masakan' ? '🍲Cooking' : tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        {activeTab !== 'Event' && (
          <div className="space-y-3 mb-8">
            <input type="text" placeholder={`Cari ${activeTab.toLowerCase()}...`} 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-pink-500/50 outline-none transition-all placeholder:text-gray-600 text-sm"
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            
            <div className="grid grid-cols-3 gap-2 text-[10px] md:text-xs">
              <select className="bg-white/5 border border-white/10 rounded-xl px-2 py-3 outline-none" value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)}>
                <option value="all">Semua LV</option>
                {[...Array(15)].map((_, i) => <option key={i+1} value={i+1}>Level {i+1}</option>)}
              </select>
              <select className="bg-white/5 border border-white/10 rounded-xl px-2 py-3 outline-none" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
                <option value="all">Lokasi</option>
                {uniqueLocations.map((loc: any) => <option key={loc} value={loc}>{loc}</option>)}
              </select>
              <select className="bg-white/5 border border-white/10 rounded-xl px-2 py-3 outline-none" value={weatherFilter} onChange={(e) => setWeatherFilter(e.target.value)}>
                <option value="all">Cuaca</option>
                <option value="☀️">☀️ Cerah</option>
                <option value="🌧️">🌧️ Hujan</option>
                <option value="🌈">🌈 Pelangi</option>
              </select>
            </div>
          </div>
        )}

        {renderContent()}
      </main>

      <footer className="fixed bottom-0 w-full bg-neutral-950/95 backdrop-blur-md border-t border-white/5 p-4 text-center text-[10px] text-gray-600 tracking-widest uppercase">
        HEARTOPIA DATABASE &copy; 2026
      </footer>
    </div>
  );
}