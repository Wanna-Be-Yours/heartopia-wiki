"use client";

import React, { useState, useMemo } from 'react';
import { 
  EVENT_NOW, FISH_DATA, NPC_DATA, 
  INSECT_DATA, BIRD_DATA, WILD_ANIMALS_DATA, 
  COOKING_DATA, GARDENING_DATA, FORAGEABLE_DATA
} from './data';

// --- HELPERS ---
const getWeatherIcon = (weather: any) => {
  const w = Array.isArray(weather) ? weather.join(' ').toLowerCase() : String(weather || '').toLowerCase();
  if (w.includes('sun') || w.includes('☀️')) return '☀️';
  if (w.includes('rain') || w.includes('🌧️')) return '🌧️';
  if (w.includes('rainbow') || w.includes('🌈')) return '🌈';
  if (w.includes('cloud') || w.includes('☁️')) return '☁️';
  return '🌍';
};

export default function HeartopiaWiki() {
  // --- STATES ---
  const [activeTab, setActiveTab] = useState('Event');
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [weatherFilter, setWeatherFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const tabs = [
    { id: 'Event', label: '📢 Event' },
    { id: 'Wild Animals', label: '🐾 Animals' },
    { id: 'Gardening', label: '🌱 Gardening' },
    { id: 'Masakan', label: '🍲 Cooking' },
    { id: 'Ikan', label: '🐟 Fish' },
    { id: 'Serangga', label: '🦋 Insect' },
    { id: 'Burung', label: '🐦 Bird' },
    { id: 'Forageable', label: '🌿 Forage' },
    { id: 'NPC', label: '👤 NPC' },
  ];

  // --- LOGIC ---
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSearchTerm('');
    setLevelFilter('all');
    setLocationFilter('all');
    setWeatherFilter('all');
  };

  const filteredData = useMemo(() => {
    const dataMap: { [key: string]: any[] } = { 
      'Ikan': FISH_DATA, 'Serangga': INSECT_DATA, 'Burung': BIRD_DATA, 
      'NPC': NPC_DATA, 'Masakan': COOKING_DATA, 'Wild Animals': WILD_ANIMALS_DATA,
      'Gardening': GARDENING_DATA, 'Forageable': FORAGEABLE_DATA
    };
    const list = dataMap[activeTab] || [];

    return list.filter((item) => {
      const matchSearch = (item.name || "").toLowerCase().includes(searchTerm.toLowerCase());
      const itemLevel = item.level || item.hobbyLv || item.birdwatch_level || item.gardeningLvl || 0;
      const matchLevel = levelFilter === 'all' || itemLevel.toString() === levelFilter;
      const matchLocation = locationFilter === 'all' || (item.location || "").toLowerCase().includes(locationFilter.toLowerCase());
      const itemWeather = Array.isArray(item.weather) ? item.weather.join(' ') : (item.weather || '');
      const matchWeather = weatherFilter === 'all' || itemWeather.toLowerCase().includes(weatherFilter.toLowerCase());
      return matchSearch && matchLevel && matchLocation && matchWeather;
    });
  }, [activeTab, searchTerm, levelFilter, locationFilter, weatherFilter]);

  const uniqueLocations = useMemo(() => {
    const dataMap: { [key: string]: any[] } = { 
        'Ikan': FISH_DATA, 'Serangga': INSECT_DATA, 'Burung': BIRD_DATA, 
        'Wild Animals': WILD_ANIMALS_DATA, 'Forageable': FORAGEABLE_DATA
    };
    const list = dataMap[activeTab] || [];
    return Array.from(new Set(list.map(item => item.location).filter(Boolean))).sort();
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 pb-24 font-sans selection:bg-pink-500/30">
      
      {/* --- MODAL DETAIL OVERLAY --- */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-[#111] border border-white/10 w-full max-w-xl rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-pink-500/10 to-transparent">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{selectedItem.icon || '💎'}</span>
                <div>
                  <h2 className="text-2xl font-black text-white uppercase tracking-tight">{selectedItem.name}</h2>
                  <span className="text-[10px] text-pink-500 font-bold tracking-[0.2em] uppercase">Detailed Database</span>
                </div>
              </div>
              <button onClick={() => setSelectedItem(null)} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-xl">✕</button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Gambar Lokasi Spesifik */}
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black group">
                <img 
                  src={`/img/locations/${selectedItem.name.toLowerCase().replace(/\s+/g, '_')}.png`} 
                  alt={`Map ${selectedItem.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/img/ingredient_map.png'; }}
                />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold text-center">Specific Spawn Point</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <span className="text-[9px] text-neutral-500 block uppercase font-black mb-1">Primary Location</span>
                  <span className="text-sm text-pink-400 font-bold italic">{selectedItem.location || 'Roaming / Universal'}</span>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <span className="text-[9px] text-neutral-500 block uppercase font-black mb-1">Spawn Conditions</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-neutral-200">{Array.isArray(selectedItem.weather) ? selectedItem.weather.join(' ') : getWeatherIcon(selectedItem.weather)}</span>
                    <span className="text-xs text-neutral-400">|</span>
                    <span className="text-[10px] text-neutral-400">{Array.isArray(selectedItem.time) ? selectedItem.time[0] : (selectedItem.time || '24h')}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-black/40">
              <button onClick={() => setSelectedItem(null)} className="w-full py-4 bg-pink-600 rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg shadow-pink-600/20 hover:bg-pink-500 transition-all">Close Database</button>
            </div>
          </div>
        </div>
      )}

      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-black tracking-tighter bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent italic uppercase">HEARTOPIA <span className="text-pink-600">WIKI</span></h1>
          </div>
          <div className="flex overflow-x-auto gap-2 no-scrollbar pb-2">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => handleTabChange(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-black whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id ? 'bg-pink-600 text-white shadow-lg' : 'bg-white/5 text-neutral-400'
                }`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-6xl mx-auto p-4 mt-6">
        
        {/* Universal Filters */}
        {activeTab !== 'Event' && (
          <div className="space-y-4 mb-10 bg-white/5 p-5 rounded-[2rem] border border-white/5 shadow-inner">
            <input type="text" placeholder={`Search ${activeTab.toLowerCase()}...`} 
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-pink-500/50 outline-none transition-all placeholder:text-neutral-700 text-sm"
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            
            <div className="grid grid-cols-3 gap-3">
              <select className="bg-black/40 border border-white/10 rounded-xl px-3 py-3 text-xs outline-none disabled:opacity-20 transition-opacity" 
                disabled={activeTab === 'NPC' || activeTab === 'Gardening' || activeTab === 'Masakan'}
                value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
                <option value="all">All Locations</option>
                {uniqueLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
              <select className="bg-black/40 border border-white/10 rounded-xl px-3 py-3 text-xs outline-none" 
                value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)}>
                <option value="all">Any Level</option>
                {[...Array(15)].map((_, i) => <option key={i+1} value={i+1}>Level {i+1}</option>)}
              </select>
              <select className="bg-black/40 border border-white/10 rounded-xl px-3 py-3 text-xs outline-none disabled:opacity-20" 
                disabled={activeTab === 'NPC' || activeTab === 'Gardening' || activeTab === 'Masakan'}
                value={weatherFilter} onChange={(e) => setWeatherFilter(e.target.value)}>
                <option value="all">Any Weather</option>
                <option value="☀️">☀️ Sunny</option>
                <option value="🌧️">🌧️ Rainy</option>
              </select>
            </div>
          </div>
        )}

        <div key={activeTab} className="animate-in fade-in duration-700">
          
          {/* TAB EVENT */}
          {activeTab === 'Event' && (
            <div className="bg-gradient-to-br from-blue-600/20 via-black to-black p-8 rounded-[3rem] border border-blue-500/30">
              <h2 className="text-3xl font-black text-white mb-2">{EVENT_NOW.name}</h2>
              <p className="text-blue-400 font-mono text-[10px] mb-8 uppercase tracking-widest">Until: {EVENT_NOW.endDate}</p>
              <div className="grid gap-4">
                {EVENT_NOW.highlights.map((h, i) => (
                  <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/5 text-neutral-300 text-sm leading-relaxed">{h}</div>
                ))}
              </div>
            </div>
          )}

          {/* TAB MAP OVERVIEW (Animals, Forage, NPC) */}
          {['Wild Animals', 'Forageable', 'NPC'].includes(activeTab) && (
             <div className="mb-10 bg-[#111] p-2 rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden">
                <img 
                    src={activeTab === 'Wild Animals' ? "/img/animal_map.png" : activeTab === 'Forageable' ? "/img/ingredient_map.png" : "/img/npc_map.png"} 
                    alt="Map" className="w-full h-auto rounded-[2.5rem]" 
                />
             </div>
          )}

          {/* TAB GARDENING & COOKING (5 STARS TABLE) */}
          {(activeTab === 'Gardening' || activeTab === 'Masakan') && (
            <div className="grid grid-cols-1 gap-8">
              {filteredData.map((item, idx) => (
                <div key={`${activeTab}-${item.id || idx}-${idx}`} className="bg-[#111] rounded-[2.5rem] border border-white/5 overflow-hidden">
                  <div className={`p-8 bg-gradient-to-r ${activeTab === 'Gardening' ? 'from-green-500/10' : 'from-orange-500/10'} to-transparent flex justify-between items-center`}>
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 bg-black rounded-3xl flex items-center justify-center text-4xl border border-white/5 shadow-inner cursor-pointer hover:scale-110 transition-transform" onClick={() => setSelectedItem(item)}>
                        {item.icon || (activeTab === 'Masakan' ? '🍲' : '🌱')}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">{item.name}</h3>
                        <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono mt-1">Requirement: LVL {item.gardeningLvl || item.level}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 overflow-x-auto no-scrollbar">
                    <table className="w-full text-[11px] text-center border-separate border-spacing-x-2">
                      <thead>
                        <tr className="text-neutral-600 uppercase text-[9px] tracking-widest">
                          <th className="py-2 text-left">Statistik</th>
                          {[1,2,3,4,5].map(s => <th key={s} className={`py-2 px-3 bg-white/5 rounded-t-xl ${s === 5 ? 'text-yellow-500 font-black' : ''}`}>⭐ {s}</th>)}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 font-mono">
                        <tr>
                          <td className="py-4 text-left text-neutral-500">Sell Price</td>
                          {Array.from({length: 5}).map((_, i) => (
                            <td key={i} className={`py-4 px-3 bg-white/[0.02] ${i === 4 ? 'text-yellow-400 font-bold underline' : 'text-neutral-300'}`}>
                              {item.prices?.[i] ? `+${item.prices[i].toLocaleString()}` : '-'}
                            </td>
                          ))}
                        </tr>
                        {item.energy && (
                          <tr className="border-t border-white/5">
                            <td className="py-4 text-left text-neutral-500">Energy Regen</td>
                            {Array.from({length: 5}).map((_, i) => (
                              <td key={i} className={`py-4 px-3 bg-white/[0.02] ${i === 4 ? 'text-green-400 font-bold' : 'text-neutral-400'}`}>
                                {item.energy?.[i] ? `+${item.energy[i]}` : '-'}
                              </td>
                            ))}
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB LIST (Fish, Insect, NPC, etc) */}
          {['Ikan', 'Serangga', 'Burung', 'Forageable', 'NPC', 'Wild Animals'].includes(activeTab) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((item, idx) => (
                <div key={`${activeTab}-${idx}`} 
                  onClick={() => setSelectedItem(item)} // KLIK UNTUK DETAIL
                  className="group bg-[#111] p-6 rounded-[2.5rem] border border-white/5 hover:border-pink-500/40 transition-all cursor-pointer shadow-xl hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                        <span className="text-3xl group-hover:scale-125 transition-transform duration-500">{item.icon || (activeTab === 'NPC' ? '👤' : '📍')}</span>
                        <h3 className="font-bold text-white tracking-tight text-lg">{item.name}</h3>
                    </div>
                  </div>
                  <div className="space-y-3 text-[11px]">
                    {item.profession && (
                      <div className="bg-blue-600/10 p-3 rounded-2xl border border-blue-500/20">
                        <span className="text-blue-400 font-bold text-xs">{item.profession}</span>
                      </div>
                    )}
                    <p className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-neutral-600 italic uppercase text-[9px]">Location</span> 
                      <span className="text-neutral-300 font-bold">{item.location || 'Universal'}</span>
                    </p>
                    <div className="flex justify-between items-center">
                       <span className="text-neutral-600 uppercase text-[9px]">Conditions</span>
                       <div className="flex gap-1">
                          {item.weather && (Array.isArray(item.weather) ? item.weather.map((w: any, i: number) => <span key={i}>{getWeatherIcon(w)}</span>) : getWeatherIcon(item.weather))}
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="fixed bottom-0 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/5 p-6 text-center">
        <p className="text-[9px] text-neutral-600 tracking-[0.5em] uppercase font-black">Heartopia Wiki Database © 2026</p>
      </footer>
    </div>
  );
}