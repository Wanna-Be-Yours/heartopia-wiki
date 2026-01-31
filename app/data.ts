// app/data.ts

export const EVENT_NOW = {
  name: "Winter Frost Gala: Crystal Celebration",
  endDate: "2026-02-15 05:59 WIB",
  highlights: [
    "❄️ Winter Gacha: Dapatkan set kostum 'Frost Noble' dan skin rumah 'Ice Palace'.",
    "🎣 Crystal Fishing: Ikan tipe 'Crystal' (seperti Crystal Salmon) muncul di semua area perairan.",
    "🥚 Ice Egg Hunt: Cari 16 telur beku yang tersebar di map Mountain untuk hadiah Wishing Stars.",
    "🎁 Exchange Shop: Tukarkan 'Snowflake Tokens' dari quest harian dengan furniture tema musim dingin.",
    "🏔️ Onsen Party: Dapatkan buff stamina tambahan saat berendam di Onsen Mountain Park bersama pemain lain."
  ],
};

export const FISH_DATA = [
  {
    id: 1,
    name: "Anglerfish",
    location: "Sea Fishing",
    level: 2,
    type: "Sea",
    shadow: "Golden",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 2,
    name: "Arctic Char",
    location: "Forest Lake",
    level: 10,
    type: "Lake",
    shadow: "M",
    weather: ["🌧️", "🌈"],
    time: ["☀️", "🌇"]
  }, //
  {
    id: 3,
    name: "Atlantic Mackerel",
    location: "Whale Sea",
    level: 5,
    type: "Sea",
    shadow: "S",
    weather: ["🌈", "☀️", "🌧️"],
    time: ["☀️", "🌇"]
  }, //
  {
    id: 4,
    name: "Atlantic Pygmy Octopus",
    location: "Zephyr Sea",
    level: 2,
    type: "Sea",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 5,
    name: "Atlantic Salmon",
    location: "Whale Sea",
    level: 3,
    type: "Sea",
    shadow: "M",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️"]
  }, //
  {
    id: 6,
    name: "Beltfish",
    location: "Zephyr Sea",
    level: 1,
    type: "Sea",
    shadow: "L",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 7,
    name: "Blackspot Seabream",
    location: "Zephyr Sea",
    level: 7,
    type: "Sea",
    shadow: "M",
    weather: ["🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 8,
    name: "Blue Ero Crayfish",
    location: "Forest Lake",
    level: 8,
    type: "Lake",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌇", "🌙"]
  }, //
  {
    id: 9,
    name: "Bluefin Tuna",
    location: "Zephyr Sea",
    level: 9,
    type: "Sea",
    shadow: "L",
    weather: ["🌈"],
    time: ["🌅", "☀️"]
  }, //
  {
    id: 10,
    name: "Bluegill",
    location: "Onsen Mountain Lake",
    level: 10,
    type: "Lake",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 11,
    name: "Burbot",
    location: "Tranquil River",
    level: 4,
    type: "River",
    shadow: "L",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["☀️", "🌇"]
  }, //
  {
    id: 12,
    name: "Butterfly Koi",
    location: "Meadow Lake",
    level: 4,
    type: "Lake",
    shadow: "L",
    weather: ["🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 13,
    name: "Chum Salmon",
    location: "Tranquil River",
    level: 6,
    type: "River",
    shadow: "S",
    weather: ["🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 14,
    name: "Clownfish",
    location: "Old Sea",
    level: 3,
    type: "Sea",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 15,
    name: "Common Barbel",
    location: "Shallow River",
    level: 1,
    type: "River",
    shadow: "M",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 16,
    name: "Common Bleak",
    location: "Lake",
    level: 1,
    type: "Lake",
    shadow: "M",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 17,
    name: "Common Carp",
    location: "Rosy River",
    level: 4,
    type: "River",
    shadow: "M",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 18,
    name: "Common Chub",
    location: "Lake",
    level: 1,
    type: "Lake",
    shadow: "M",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 19,
    name: "Common Octopus",
    location: "Sea Fishing",
    level: 2,
    type: "Sea",
    shadow: "M, Golden",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 20,
    name: "Common Rudd",
    location: "Suburban Lake",
    level: 5,
    type: "Lake",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 21,
    name: "Common Shrimp",
    location: "East Sea",
    level: 1,
    type: "Sea",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 22,
    name: "Common Whitefish",
    location: "Onsen Mountain Lake",
    level: 1,
    type: "Lake",
    shadow: "M",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 23,
    name: "Crucian Carp",
    location: "Suburban Lake",
    level: 1,
    type: "Lake",
    shadow: "M",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 24,
    name: "Edible Frog",
    location: "Lake",
    level: 3,
    type: "Lake",
    shadow: "Blue",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 25,
    name: "European Crayfish",
    location: "Forest Lake",
    level: 3,
    type: "Lake",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌇", "🌙", "🌅"]
  }, //
  {
    id: 26,
    name: "European Eel",
    location: "Old Sea",
    level: 7,
    type: "Sea",
    shadow: "M",
    weather: ["🌈"],
    time: ["🌅", "☀️", "🌇"]
  }, //
  {
    id: 27,
    name: "European Flying Squid",
    location: "Sea Fishing",
    level: 5,
    type: "Sea",
    shadow: "Golden",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 28,
    name: "European Lobster",
    location: "Zephyr Sea",
    level: 5,
    type: "Sea",
    shadow: "M",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌇", "🌙"]
  }, //
  {
    id: 29,
    name: "European Mudminnow",
    location: "Suburban Lake",
    level: 8,
    type: "Lake",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 30,
    name: "European Perch",
    location: "River",
    level: 1,
    type: "River",
    shadow: "M",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 31,
    name: "European Plaice",
    location: "Old Sea",
    level: 4,
    type: "Sea",
    shadow: "M",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 32,
    name: "European Smelt",
    location: "Meadow Lake",
    level: 1,
    type: "Lake",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 33,
    name: "False Scad",
    location: "Zephyr Sea",
    level: 2,
    type: "Sea",
    shadow: "M",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 34,
    name: "Freshwater Blenny",
    location: "Rosy River",
    level: 5,
    type: "River",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 35,
    name: "Giant Oarfish",
    location: "Sea Fishing",
    level: 7,
    type: "Sea",
    shadow: "Golden",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️"]
  }, //
  {
    id: 36,
    name: "Goby",
    location: "East Sea",
    level: 4,
    type: "Sea",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 37,
    name: "Golden King Crab",
    location: "Sea Fishing",
    level: 8,
    type: "Sea",
    shadow: "Golden",
    weather: ["🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 38,
    name: "Goldfish",
    location: "Meadow Lake",
    level: 8,
    type: "Lake",
    shadow: "S",
    weather: ["🌧️", "🌈"],
    time: ["🌅", "☀️", "🌇"]
  }, //
  {
    id: 39,
    name: "Grayling",
    location: "Suburban Lake",
    level: 6,
    type: "Lake",
    shadow: "M",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 40,
    name: "Haddock",
    location: "East Sea",
    level: 8,
    type: "Sea",
    shadow: "M",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 41,
    name: "Hermit Crab",
    location: "East Sea",
    level: 3,
    type: "Sea",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 42,
    name: "Huchen",
    location: "Giantwood River",
    level: 9,
    type: "River",
    shadow: "M",
    weather: ["🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 43,
    name: "King Crab",
    location: "Whale Sea",
    level: 8,
    type: "Sea",
    shadow: "L",
    weather: ["🌈"],
    time: ["🌅", "☀️", "🌇"]
  }, //
  {
    id: 44,
    name: "Large Pearl Mussel",
    location: "Forest Lake",
    level: 6,
    type: "Lake",
    shadow: "M",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 45,
    name: "Largemouth Bass",
    location: "Forest Lake",
    level: 4,
    type: "Lake",
    shadow: "M",
    weather: ["☀️", "🌈"],
    time: ["🌅", "☀️", "🌇"]
  }, //
  {
    id: 46,
    name: "Mediterranean Killifish",
    location: "Suburban Lake",
    level: 7,
    type: "Lake",
    shadow: "S",
    weather: ["☀️", "🌈"],
    time: ["☀️", "🌇", "🌙"]
  }, //
  {
    id: 47,
    name: "Minnow",
    location: "Tranquil River",
    level: 1,
    type: "River",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 48,
    name: "Moonfish",
    location: "Sea Fishing",
    level: 9,
    type: "Sea",
    shadow: "Golden",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 49,
    name: "Mottled Sculpin",
    location: "Onsen Mountain Lake",
    level: 7,
    type: "Lake",
    shadow: "S",
    weather: ["🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 50,
    name: "Mud Sunfish",
    location: "Forest Lake",
    level: 3,
    type: "Lake",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 51,
    name: "Mussel",
    location: "Suburban Lake",
    level: 4,
    type: "Lake",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 52,
    name: "Northern Pike",
    location: "Suburban Lake",
    level: 9,
    type: "Lake",
    shadow: "M",
    weather: ["☀️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 53,
    name: "Nursehound",
    location: "Sea Fishing",
    level: 6,
    type: "Sea",
    shadow: "L, Golden",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 54,
    name: "Ocean Sunfish",
    location: "East Sea",
    level: 9,
    type: "Sea",
    shadow: "L",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 55,
    name: "Oriental Shrimp",
    location: "River",
    level: 1,
    type: "River",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 56,
    name: "Puffer Fish",
    location: "Old Sea",
    level: 6,
    type: "Sea",
    shadow: "M",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 57,
    name: "Pumpkinseed",
    location: "Onsen Mountain Lake",
    level: 9,
    type: "Lake",
    shadow: "S",
    weather: ["☀️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 58,
    name: "Rabbit Fish",
    location: "Ocean",
    level: 4,
    type: "Sea",
    shadow: "M, Blue",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 59,
    name: "Red-Bellied Piranha",
    location: "Giantwood River",
    level: 4,
    type: "River",
    shadow: "M",
    weather: ["☀️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 60,
    name: "River Crab",
    location: "Suburban Lake",
    level: 4,
    type: "Lake",
    shadow: "S",
    weather: ["☀️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 61,
    name: "Ruffe",
    location: "Onsen Mountain Lake",
    level: 3,
    type: "Lake",
    shadow: "S",
    weather: ["☀️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 62,
    name: "Sardine",
    location: "Ocean",
    level: 1,
    type: "Sea",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 63,
    name: "Scad",
    location: "Whale Sea",
    level: 1,
    type: "Sea",
    shadow: "S",
    weather: ["☀️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 64,
    name: "Schneider",
    location: "Suburban Lake",
    level: 1,
    type: "Lake",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 65,
    name: "Sea Bass",
    location: "Ocean",
    level: 1,
    type: "Sea",
    shadow: "M",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 66,
    name: "Sea Stickleback",
    location: "Old Sea",
    level: 1,
    type: "Sea",
    shadow: "S",
    weather: ["☀️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 67,
    name: "Seabream",
    location: "Zephyr Sea",
    level: 0, // Not specified in table
    type: "Sea",
    shadow: "",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌇", "🌙"]
  }, //
  {
    id: 68,
    name: "Seahorse",
    location: "Whale Sea",
    level: 1,
    type: "Sea",
    shadow: "S",
    weather: ["☀️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 69,
    name: "Shortfin Mako Shark",
    location: "Sea Fishing",
    level: 10,
    type: "Sea",
    shadow: "Golden",
    weather: ["🌈"],
    time: ["🌅", "☀️"]
  }, //
  {
    id: 70,
    name: "Skipjack Tuna",
    location: "Ocean",
    level: 1,
    type: "Sea",
    shadow: "L",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 71,
    name: "Smooth Hammerhead",
    location: "Old Sea",
    level: 10,
    type: "Sea",
    shadow: "L",
    weather: ["🌈"],
    time: ["🌇", "🌙"]
  }, //
  {
    id: 72,
    name: "Spined Loach",
    location: "Giantwood River",
    level: 1,
    type: "River",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 73,
    name: "Stone Loach",
    location: "Suburban Lake",
    level: 2,
    type: "Lake",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 74,
    name: "Streber",
    location: "Rosy River",
    level: 3,
    type: "River",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 75,
    name: "Striped Red Mullet",
    location: "Sea Fishing",
    level: 1,
    type: "Sea",
    shadow: "Golden",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 76,
    name: "Swordfish",
    location: "Whale Sea",
    level: 10,
    type: "Sea",
    shadow: "L",
    weather: ["🌈"],
    time: ["🌅", "☀️"]
  }, //
  {
    id: 77,
    name: "Tadpole",
    location: "Onsen Mountain Lake",
    level: 3,
    type: "Lake",
    shadow: "S",
    weather: ["🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 78,
    name: "Tench",
    location: "Forest Lake",
    level: 1,
    type: "Lake",
    shadow: "S",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 79,
    name: "Three-Spined Stickleback",
    location: "Shallow River",
    level: 7,
    type: "River",
    shadow: "S",
    weather: ["🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 80,
    name: "Tilapia",
    location: "River",
    level: 3,
    type: "River",
    shadow: "M, Blue",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 81,
    name: "Trout",
    location: "Meadow Lake",
    level: 5,
    type: "Lake",
    shadow: "M",
    weather: ["☀️", "🌈"],
    time: ["🌇", "🌙"]
  }, //
  {
    id: 82,
    name: "Tub Gurnard",
    location: "East Sea",
    level: 6,
    type: "Sea",
    shadow: "M",
    weather: ["🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 83,
    name: "Turbot",
    location: "Sea Fishing",
    level: 4,
    type: "Sea",
    shadow: "M",
    weather: ["☀️", "🌧️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  }, //
  {
    id: 84,
    name: "Wels Catfish",
    location: "Meadow Lake",
    level: 10,
    type: "Lake",
    shadow: "",
    weather: ["☀️", "🌈"],
    time: ["🌙", "🌇"]
  }, //
  {
    id: 85,
    name: "Zander",
    location: "Giantwood River",
    level: 3,
    type: "River",
    shadow: "M",
    weather: ["☀️", "🌈"],
    time: ["🌙", "🌅", "☀️", "🌇"]
  } //
];

export const NPC_DATA = [
{ id: 1, name: "Albert Jr.", profession: "Wandering Gold Merchant" },
  { id: 2, name: "Bailey Jr.", profession: "Birdwatching Mentor & Store" },
  { id: 3, name: "Dorothee", profession: "Clothing Store" },
  { id: 4, name: "Mrs. Joan", profession: "Pet Care Mentor & Pet Shop" },
  { id: 5, name: "Vernie", profession: "Forest Worker" },
  { id: 6, name: "Andrew", profession: "Driving Mentor & Vehicle Store" },
  { id: 7, name: "Blanc", profession: "Gardening Mentor & Gardening Store" },
  { id: 8, name: "Eric", profession: "Park Manager" },
  { id: 9, name: "Naniwa", profession: "Insect Catching Mentor & Supplies" },
  { id: 10, name: "Will", profession: "Lighthouse Guardian" },
  { id: 11, name: "Annie", profession: "Town Guide, Friendship & Music Store" },
  { id: 12, name: "Bob", profession: "Furniture & Special Home Decor Store" },
  { id: 13, name: "Ka Ching", profession: "General Store" },
  { id: 14, name: "Patti", profession: "Woodland Mentor" },
  { id: 15, name: "Bill", profession: "Sea Fishing Event" },
  { id: 16, name: "Atara", profession: "Third Mayor" },
  { id: 17, name: "Collector", profession: "Time-Limited Festival" },
  { id: 18, name: "Massimo", profession: "Cooking Mentor & Cooking Store" },
  { id: 19, name: "Vanya", profession: "Fishing Mentor & Fishing Store" },
  { id: 20, name: "Doris", profession: "Special Merchant"}
];

export const INSECT_DATA = [
  { id: 1, name: "Alpine Longhorn Beetle", location: "Forest Island", hobbyLv: 5, rarity: "Epic", type: "Beetle", weather: "Cloudy / Rainy", time: "Day / Sunset / Night" },
  { id: 2, name: "Amethyst Flower Beetle", location: "Home (Rocks)", hobbyLv: 2, rarity: "Common", type: "Beetle", weather: "Cloudy / Rainy", time: "Day / Sunset / Night" },
  { id: 3, name: "Ant", location: "Fishing Village Square", hobbyLv: 3, rarity: "Common", type: "Bug", weather: "Sunny / Rainy", time: "Day / Sunset / Night" },
  { id: 4, name: "Apollo", location: "Bait the Insects Event", hobbyLv: 1, rarity: "Common", type: "Butterfly", weather: "Sunny / Rainy", time: "Day / Sunset / Night" },
  { id: 5, name: "Asian Lady Beetle", location: "Forest (Deer Tower)", hobbyLv: 5, rarity: "Epic", type: "Beetle", weather: "Cloudy / Rainy", time: "Morning / Day / Sunset" },
  { id: 6, name: "Asparagus Beetle", location: "Flower Field", hobbyLv: 1, rarity: "Common", type: "Beetle", weather: "Sunny / Cloudy", time: "Day / Sunset / Night" },
  { id: 7, name: "Bagworm Moth", location: "Forest (Deer Tower)", hobbyLv: 10, rarity: "Legendary", type: "Butterfly", weather: "Sunny / Cloudy", time: "Day / Sunset / Night" },
  { id: 8, name: "Beautiful Demoiselle", location: "Forest Lake Shore", hobbyLv: 6, rarity: "Rare", type: "Dragonfly", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 9, name: "Beautiful Leopard", location: "Fishing Village (Wharf)", hobbyLv: 4, rarity: "Common", type: "Butterfly", weather: "Sunny / Cloudy", time: "Morning / Day / Sunset" },
  { id: 10, name: "Blue Morpho", location: "Forest (Spirit Oak Pine Forest)", hobbyLv: 7, rarity: "Rare", type: "Butterfly", weather: "Sunny / Cloudy", time: "Morning / Day / Sunset" },
  { id: 11, name: "Blue Shieldbug", location: "Fishing Village (Lighthouse)", hobbyLv: 6, rarity: "Rare", type: "Bug", weather: "Sunny / Cloudy", time: "Morning / Day / Sunset" },
  { id: 12, name: "Bumblebee", location: "Flower Field", hobbyLv: 2, rarity: "Common", type: "Bee", weather: "Sunny / Cloudy", time: "Morning / Day / Sunset" },
  { id: 13, name: "Cabbage White", location: "Fishing Village", hobbyLv: 1, rarity: "Common", type: "Butterfly", weather: "Sunny / Cloudy", time: "Morning / Day / Sunset" },
  { id: 14, name: "Cerulean Carpenter", location: "Fishing Village Square", hobbyLv: 9, rarity: "Epic", type: "Bee", weather: "Rainy", time: "Morning / Day / Sunset" },
  { id: 15, name: "Chestnut Tiger", location: "Bait the Insects Event", hobbyLv: 7, rarity: "Rare", type: "Butterfly", weather: "Sunny / Cloudy", time: "Morning / Day / Sunset" },
  { id: 16, name: "Cicada", location: "Forest (Spirit Oak Pine Forest)", hobbyLv: 4, rarity: "Common", type: "Bug", weather: "Sunny / Cloudy", time: "Morning / Day / Sunset" },
  { id: 17, name: "Comet Moth", location: "Suburbs", hobbyLv: 8, rarity: "Epic", type: "Butterfly", weather: "Cloudy / Rainy", time: "Sunset / Night" },
  { id: 18, name: "Common Blue Butterfly", location: "Central Area", hobbyLv: 2, rarity: "Common", type: "Butterfly", weather: "Sunny / Cloudy", time: "Morning / Day / Sunset" },
  { id: 19, name: "Common Brimstone", location: "Suburbs", hobbyLv: 1, rarity: "Common", type: "Butterfly", weather: "Sunny / Cloudy", time: "Morning / Day / Sunset" },
  { id: 20, name: "Common Whitetail", location: "River Bank", hobbyLv: 4, rarity: "Common", type: "Dragonfly", weather: "Sunny / Cloudy", time: "Morning / Day / Sunset" },
  { id: 21, name: "Conehead Mantis", location: "Onsen Mountain (Ruins)", hobbyLv: 9, rarity: "Epic", type: "Grasshopper", weather: "Sunny / Cloudy", time: "Morning / Day / Sunset" },
  { id: 22, name: "Crimson Marsh Glider", location: "Onsen Mountain", hobbyLv: 7, rarity: "Rare", type: "Dragonfly", weather: "Rainy", time: "Morning / Day / Sunset" },
  { id: 23, name: "Elegant Flower Beetle", location: "Flower Field (Whale Mountain)", hobbyLv: 7, rarity: "Rare", type: "Beetle", weather: "Sunny / Cloudy", time: "Morning / Day / Sunset" },
  { id: 24, name: "European Firebug", location: "Home (Rocks)", hobbyLv: 1, rarity: "Common", type: "Bug", weather: "Sunny / Cloudy", time: "Morning / Day / Sunset" },
  { id: 25, name: "Fire-colored Beetle", location: "Onsen Mountain (Onsen)", hobbyLv: 3, rarity: "Common", type: "Beetle", weather: "Sunny / Cloudy", time: "Morning / Day / Sunset" },
  { id: 26, name: "Four-spotted Ladybug", location: "Onsen Mountain (Crater Lake)", hobbyLv: 4, rarity: "Common", type: "Beetle", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 27, name: "Four-spotted Skimmer", location: "Suburban Lakeshore", hobbyLv: 2, rarity: "Common", type: "Dragonfly", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 28, name: "Giant Asian Mantis", location: "Onsen Mountain (Ruins)", hobbyLv: 5, rarity: "Epic", type: "Grasshopper", weather: "Sunny / Cloudy", time: "Morning / Day / Sunset" },
  { id: 29, name: "Gold Grasshopper", location: "Onsen Mountain", hobbyLv: 1, rarity: "Common", type: "Grasshopper", weather: "Sunny / Cloudy", time: "Morning / Day / Sunset" },
  { id: 30, name: "Golden Jewel Scarab", location: "Forest (Jump Puzzle)", hobbyLv: 7, rarity: "Rare", type: "Beetle", weather: "Sunny / Cloudy", time: "Morning / Day / Sunset" },
  { id: 31, name: "Golden Stag Beetle", location: "Forest (Spirit Oak Pine Forest)", hobbyLv: 9, rarity: "Epic", type: "Beetle", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 32, name: "Green Birdwing", location: "Suburbs", hobbyLv: 6, rarity: "Rare", type: "Butterfly", weather: "Cloudy / Rainy", time: "Morning / Day / Sunset" },
  { id: 33, name: "Green Tiger Beetle", location: "Onsen Mountain", hobbyLv: 2, rarity: "Common", type: "Beetle", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 34, name: "Hercules Beetle", location: "Onsen Mountain (Crater Lake)", hobbyLv: 10, rarity: "Legendary", type: "Beetle", weather: "Sunny / Cloudy", time: "Morning / Day / Sunset" },
  { id: 35, name: "Horned Beetle", location: "Fishing Village (East Pier)", hobbyLv: 8, rarity: "Epic", type: "Beetle", weather: "Sunny / Cloudy", time: "Morning / Day / Sunset" },
  { id: 36, name: "Katydid", location: "Flower Field (Amethyst Beach)", hobbyLv: 3, rarity: "Common", type: "Grasshopper", weather: "Sunny / Rainy", time: "Day / Sunset / Night" },
  { id: 37, name: "Large Banded Grasshopper", location: "Suburbs", hobbyLv: 4, rarity: "Common", type: "Grasshopper", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 38, name: "Large Red Damselfly", location: "Waterside", hobbyLv: 1, rarity: "Common", type: "Dragonfly", weather: "Sunny / Rainy", time: "Day / Sunset / Night" },
  { id: 39, name: "Mediterranean Mantis", location: "Onsen Mountain (Stone Cliff)", hobbyLv: 4, rarity: "Common", type: "Grasshopper", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 40, name: "Mini Moon Moth", location: "Suburbs", hobbyLv: 3, rarity: "Common", type: "Butterfly", weather: "Sunny / Rainy", time: "Morning / Day" },
  { id: 41, name: "Minotaur Beetle", location: "Onsen Mountain (Ruins)", hobbyLv: 7, rarity: "Rare", type: "Beetle", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 42, name: "Morpho Helena", location: "Flower Field (Amethyst Beach)", hobbyLv: 10, rarity: "Legendary", type: "Butterfly", weather: "Rainy", time: "Morning / Day / Sunset" },
  { id: 43, name: "Mother-Of-Pearl", location: "Windmill Flower Field", hobbyLv: 9, rarity: "Epic", type: "Butterfly", weather: "Cloudy / Rainy", time: "Morning / Day / Sunset" },
  { id: 44, name: "Mourning Cloak", location: "Onsen Mountain (Onsen)", hobbyLv: 5, rarity: "Common", type: "Butterfly", weather: "Cloudy / Rainy", time: "Morning / Day / Sunset" },
  { id: 45, name: "Old World Swallowtail", location: "Forest", hobbyLv: 1, rarity: "Common", type: "Butterfly", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 46, name: "Orange-Tip", location: "Central Area", hobbyLv: 1, rarity: "Common", type: "Butterfly", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 47, name: "Peacock Butterfly", location: "Windmill Flower Field", hobbyLv: 5, rarity: "Common", type: "Butterfly", weather: "Sunny / Rainy", time: "Day / Sunset / Night" },
  { id: 48, name: "Picasso Bug", location: "Flower Field (Amethyst Beach)", hobbyLv: 8, rarity: "Epic", type: "Bug", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 49, name: "Pink Katydid", location: "Bait the Insects Event", hobbyLv: 3, rarity: "Common", type: "Grasshopper", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 50, name: "Postman Butterfly", location: "Bait the Insects Event", hobbyLv: 1, rarity: "Common", type: "Butterfly", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 51, name: "Purple Emperor", location: "Whale Mountain", hobbyLv: 3, rarity: "Common", type: "Butterfly", weather: "Sunny / Rainy", time: "Day / Sunset / Night" },
  { id: 52, name: "Rainbow Stag Beetle", location: "Bait the Insects Event (Ruins)", hobbyLv: 9, rarity: "Epic", type: "Beetle", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 53, name: "Rajah Brooke's Birdwing", location: "Home", hobbyLv: 3, rarity: "Common", type: "Butterfly", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 54, name: "Seven-Spotted Ladybug", location: "Suburbs", hobbyLv: 2, rarity: "Common", type: "Beetle", weather: "Cloudy / Rainy", time: "Morning / Day / Sunset" },
  { id: 55, name: "Siberian Grasshopper", location: "Fishing Village", hobbyLv: 2, rarity: "Common", type: "Grasshopper", weather: "Sunny / Rainy", time: "Day / Sunset / Night" },
  { id: 56, name: "Silver Jewel Scarab", location: "Onsen Stone Cliff", hobbyLv: 6, rarity: "Rare", type: "Beetle", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 57, name: "Spanish Moon Moth", location: "Spirit Oak Pine Forest", hobbyLv: 8, rarity: "Epic", type: "Butterfly", weather: "Sunny / Rainy", time: "Sunset / Night" },
  { id: 58, name: "Splay-Footed Carpenter", location: "Whale Mountain", hobbyLv: 5, rarity: "Common", type: "Bee", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 59, name: "Stag Beetle", location: "Forest (Jump Puzzle)", hobbyLv: 6, rarity: "Rare", type: "Beetle", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 60, name: "Sulkowsky's Morpho", location: "Insect Attractor Specialty", hobbyLv: 1, rarity: "Common", type: "Butterfly", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 61, name: "Sunset Morpho", location: "Forest (Deer Tower)", hobbyLv: 10, rarity: "Legendary", type: "Butterfly", weather: "Rainy", time: "Morning / Day / Sunset" },
  { id: 62, name: "Waroona Cuckoo Bee", location: "Forest (Deer Tower)", hobbyLv: 3, rarity: "Common", type: "Bee", weather: "Cloudy / Rainy", time: "Day / Sunset / Night" },
  { id: 63, name: "Wasp Beetle", location: "Forest", hobbyLv: 2, rarity: "Common", type: "Beetle", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
  { id: 64, name: "White Witch", location: "Bait the Insects Event", hobbyLv: 5, rarity: "Common", type: "Butterfly", weather: "Sunny / Rainy", time: "Morning / Day / Sunset" },
];

export const BIRD_DATA = [
  { id: 1, name: "African Olive Pigeon", location: "Onsen Mountain (Onsen)  ", "birdwatch_level": 5, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 2, name: "American Flamingo", location: "Flower Field", "birdwatch_level": 9, weather: ["Rainbow"], time: "Morning / Day" },
  { id: 3, name: "Audouin's Gull", location: "Whale Sea (seaside & beaches), Amethyst Beach", "birdwatch_level": 3, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 4, name: "Azure Tit", location: "Flower Field (Windmill Flower Field)", "birdwatch_level": 7, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 5, name: "Bearded Reedling", location: "Onsen Mountain", "birdwatch_level": 2, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 6, name: "Blue Peafowl", location: "Nest of Hundreds Event", "birdwatch_level": 1, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 7, name: "Blue-and-Yellow Macaw", location: "Nest of Hundreds Event", "birdwatch_level": 1, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 8, name: "Brown Noddy", location: "Old Ocean Seaside", "birdwatch_level": 5, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 9, name: "Cinnamon Ground Dove", location: "Fishing Village (East Pier)", "birdwatch_level": 6, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 10, name: "Common Kestrel", location: "Forest (Deer Tower)", "birdwatch_level": 7, weather: ["Sunny", "Rainbow"], time: "Full-time" },
  { id: 11, name: "Double-Barred Finch", location: "Fishing Village (Lighthouse)", "birdwatch_level": 3, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 12, name: "Eastern Bluebird", location: "Suburbs", "birdwatch_level": 8, weather: ["Rainy", "Rainbow"], time: "Full-time" },
  { id: 13, name: "Eurasian Bullfinch", location: "Suburbs", "birdwatch_level": 1, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 14, name: "Eurasian Chaffinch", location: "Flower Field", "birdwatch_level": 1, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 15, name: "Eurasian Collared Dove", location: "Home", "birdwatch_level": 1, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 16, name: "Eurasian Golden Oriole", location: "Rosy River, Home", "birdwatch_level": 3, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 17, name: "Eurasian Nuthatch", location: "Fishing Village", "birdwatch_level": 2, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 18, name: "Eurasian Wigeon", location: "River", "birdwatch_level": 2, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 19, name: "Eurasian Wren", location: "Forest", "birdwatch_level": 1, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 20, name: "European Bee-Eater", location: "Onsen Mountain (Lake Shore)", "birdwatch_level": 5, weather: ["Rainy", "Rainbow"], time: "Full-time" },
  { id: 21, name: "European Robin", location: "Central Area", "birdwatch_level": 1, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 22, name: "European Shag", location: "Ocean", "birdwatch_level": 3, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 23, name: "Great Green Macaw", location: "Nest of Hundreds Event", "birdwatch_level": 5, weather: ["Sunny", "Rainbow"], time: "Full-time" },
  { id: 24, name: "Great Tit", location: "Onsen Mountain", "birdwatch_level": 1, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 25, name: "Greater Flamingo", location: "Waterside", "birdwatch_level": 1, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 26, name: "Hawfinch", location: "Onsen Mountain (Crater Lake)", "birdwatch_level": 6, weather: ["All weather icon"], time: "Night" },
  { id: 27, name: "Imperial Shag", location: "East Sea / Zephyr Sea", "birdwatch_level": 9, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 28, name: "Jambu Fruit Dove", location: "Suburbs", "birdwatch_level": 7, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 29, name: "King Eider", location: "River", "birdwatch_level": 3, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 30, name: "Lady Amherst Pheasant", location: "Onsen Mountain (Ruins)", "birdwatch_level": 4, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 31, name: "Lear's Macaw", location: "Nest of Hundreds Event", "birdwatch_level": 7, weather: ["Rainy", "Rainbow"], time: "Full-time" },
  { id: 32, name: "Lesser Flamingo", location: "Forest Lake Shore", "birdwatch_level": 5, weather: ["Rainy", "Rainbow"], time: "Full-time" },
  { id: 33, name: "Long Eared Owl", location: "Onsen Mountain (Stone Cliff)", "birdwatch_level": 6, weather: ["Sunny", "Rainbow"], time: "Full-time" },
  { id: 34, name: "Long-Tailed Tit", location: "On Blanc's Head", "birdwatch_level": 1, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 35, name: "Mallard", location: "Lake", "birdwatch_level": 1, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 36, name: "Paradise Tanager", location: "Suburbs", "birdwatch_level": 9, weather: ["Daily"], time: "Full-time" },
  { id: 37, name: "Peregrine Falcon", location: "Onsen Mountain (Onsen)", "birdwatch_level": 7, weather: ["Rainy", "Rainbow"], time: "Full-time" },
  { id: 38, name: "Pied Imperial Pigeon", location: "Fishing Village", "birdwatch_level": 1, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 39, name: "Pine Grosbeak", location: "Forest Island", "birdwatch_level": 4, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 40, name: "Pink Pigeon", location: "Flower Field (Whale Mountain)", "birdwatch_level": 7, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 41, name: "Pink-Necked Green Pigeon", location: "Flower Field", "birdwatch_level": 2, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 42, name: "Przevalski's Parrotbill", location: "Fishing Village (Fishing Village Square)", "birdwatch_level": 4, weather: ["Sunny", "Rainbow"], time: "Full-time" },
  { id: 43, name: "Red Faced Cormorant", location: "Old Sea / Whale Sea", "birdwatch_level": 6, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 44, name: "Red-and-Green Macaw", location: "Nest of Hundreds Event", "birdwatch_level": 3, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 45, name: "Redpolis", location: "Forest (Spirit Oak Pine Forest)", "birdwatch_level": 8, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 46, name: "Regent Bowerbird", location: "Forest (Spirit Oak Pine Forest)", "birdwatch_level": 4, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 47, name: "Ruddy Shelduck", location: "Suburban Lake", "birdwatch_level": 3, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 48, name: "Seagull", location: "Seaside", "birdwatch_level": 2, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 49, name: "Silver-Throated Tit", location: "Forest (Jump Puzzle)", "birdwatch_level": 3, weather: ["Sunny", "Rainbow"], time: "Full-time" },
  { id: 50, name: "Smew", location: "Forest Lake", "birdwatch_level": 4, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 51, name: "Stock Dove", location: "Central Area", "birdwatch_level": 1, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 52, name: "Tern", location: "East Side Seaside", "birdwatch_level": 7, weather: ["Rainbow"], time: "Full-time" },
  { id: 53, name: "Wallace's Fruit Dove", location: "Flower Field (Windmill Flower Field)", "birdwatch_level": 4, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 54, name: "White Wagtail", location: "Amethyst Beach", "birdwatch_level": 4, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 55, name: "White-Headed Duck", location: "Onsen Mountain (Lake Shore)", "birdwatch_level": 9, weather: ["Rainy", "Rainbow"], time: "Full-time" },
  { id: 56, name: "Wonga Pigeon", location: "Forest", "birdwatch_level": 2, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 57, name: "Woodchat Shrike", location: "Suburbs", "birdwatch_level": 2, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" },
  { id: 58, name: "Yellow Bellied Flycatcher", location: "Fishing Village (Wharf)", "birdwatch_level": 5, weather: ["Sunny", "Rainy", "Rainbow"], time: "Full-time" }
];

export const WILD_ANIMALS_DATA = [
  { id: 1, name: "Capybara", location: "Ruins in the circle area", food: ["Tomato", "Raspberry", "Grape"], weather: "Cloudy", icon: "🦦" },
  { id: 1, name: "Sika Deer", location: "Between Deer Tower & Spirit Oak Pine Forest", food: ["Lettuce", "House Salad", "Branch"], weather: "Cloudy", icon: "🦌" },
  { id: 1, name: "Panda", location: "Jump Puzzle", food: ["Bamboo", "Apple", "Corn"], weather: "Cloudy", icon: "🐼" },
  { id: 1, name: "Sea Otter", location: "Fishing Village Square Harbor", food: ["Mussel", "Common Shrimp", "Oriental Shrimp"], weather: "Cloudy", icon: "🦦" },
  { id: 1, name: "Alpaca", location: "Amethyst near wooden bridge", food: ["Blueberry", "Pineapple", "Wheat"], weather: "Sunny", icon: "🦙" },
  { id: 1, name: "Fox", location: "Below Meadow Lake", food: ["Meat", "European Perch", "Largemouth Bass"], weather: "Rainbow", icon: "🦊" },
  { id: 1, name: "Bunny", location: "Suburbs (Road from Art Street)", food: ["Weed", "Carrot", "Strawberry"], weather: "Sunny", icon: "🐰" },
  { id: 1, name: "Ferret", location: "Below Rosy River near wooden bridge", food: ["Egg", "Sea Bass", "Goby"], weather: "Rainbow", icon: "🦦" }
];

export const COOKING_DATA = [
  {
    id: 1,
    name: "Afternoon Tea",
    ingredients: ["Tiramisu", "Any fruit/vegetable"],
    level: 7,
    recipePrice: 3200,
    prices: [710, 1065, 1420, 2840, 5680],
    energy: [20, 30, 35, 40]
  }, //
  {
    id: 2,
    name: "Apple Jam",
    ingredients: ["🍎", "🍎", "🍎", "🍎"],
    level: 1,
    recipePrice: 0,
    prices: [270, 405, 540, 1080, 2160],
    energy: [35, 42, 49, 56, 70]
  }, //
  {
    id: 3,
    name: "Apple Pie",
    ingredients: ["🍎", "🌾", "🥚", "🧈"],
    level: 5,
    recipePrice: 1600,
    prices: [730, 1095, 1460, 2920, 5840],
    energy: [70, 84, 98, 112, 140]
  }, //
  {
    id: 4,
    name: "Baked Eggplant w/ Meat",
    ingredients: ["🍆", "🥩", "🧂"],
    level: 9,
    recipePrice: 6400,
    prices: [1230, 1845, 2460],
    energy: [75, 90, 105]
  }, //
  {
    id: 5,
    name: "Bizarre Food",
    ingredients: ["Missed Stove Heat Adjust"],
    level: 1,
    recipePrice: 0,
    prices: [30],
    energy: [10]
  }, //
  {
    id: 6,
    name: "Bizzare Drink",
    ingredients: ["Missed Stove Heat Adjust"],
    level: 1,
    recipePrice: 0,
    prices: [30],
    energy: [10]
  }, //
  {
    id: 7,
    name: "Black Truffle Cream Pasta",
    ingredients: ["🍄", "🌾", "🥛"],
    level: 3,
    recipePrice: 800,
    prices: [900, 1350, 1800, 3600, 7200],
    energy: [90, 108, 126, 144, 180]
  }, //
  {
    id: 8,
    name: "Black Truffle Pie",
    ingredients: ["🍄", "🍄", "🌾", "🥚"],
    level: 1,
    recipePrice: 0,
    prices: [830, 1245, 1660, 3320, 6640],
    energy: [80, 96, 112, 128, 160]
  }, //
  {
    id: 9,
    name: "Blue Roll Cake",
    ingredients: ["🥚", "🥛", "💙", "💙"],
    level: 1,
    recipePrice: 0,
    prices: [570, 855, 1140, 2280, 4560],
    energy: [48, 58, 67, 77, 96]
  }, //
  {
    id: 10,
    name: "Blueberry Jam",
    ingredients: ["🔵", "🔵", "🔵", "🔵"],
    level: 1,
    recipePrice: 0,
    prices: [170, 255, 340, 680, 1360],
    energy: [22, 26, 31, 35, 44]
  }, //
  {
    id: 11,
    name: "Button Mushroom Pie",
    ingredients: ["🍄", "🍄", "🌾", "🥚"],
    level: 1,
    recipePrice: 0,
    prices: [500, 750, 1000, 2000],
    energy: [35, 42, 49, 56, 70]
  }, //
  {
    id: 12,
    name: "Candlelight Dinner",
    ingredients: ["House salad", "Smoked fish bagel", "Seafood risotto", "Tiramisu"],
    level: 9,
    recipePrice: 6400,
    prices: [1760, 2640, 3520, 7040, 14080],
    energy: [75, 90, 105, 120, 150]
  }, //
  {
    id: 13,
    name: "Carrot Cake",
    ingredients: ["🥕", "🥕", "🌾", "🥚"],
    level: 5,
    recipePrice: 1600,
    prices: [840, 1260, 1680, 3360, 6720],
    energy: [55, 66, 77, 88]
  }, //
  {
    id: 14,
    name: "Cheese Cake",
    ingredients: ["🧀", "🥛", "🥚"],
    level: 2,
    recipePrice: 200,
    prices: [480, 720, 960, 1920],
    energy: [50]
  }, //
  {
    id: 15,
    name: "Coffee",
    ingredients: ["🫘", "🫘", "🫘", "🫘"],
    level: 1,
    recipePrice: 0,
    prices: [290, 435, 580, 1160],
    energy: [40, 48, 56, 56]
  }, //
  {
    id: 16,
    name: "Coffee Latte",
    ingredients: ["🫘", "🫘", "🥛", "🥛"],
    level: 1,
    recipePrice: 0,
    prices: [300, 450, 600, 1200, 2400],
    energy: [40, 48, 56, 56]
  }, //
  {
    id: 17,
    name: "Corn Soup",
    ingredients: ["🥛", "🧈", "🌽", "🌽"],
    level: 5,
    recipePrice: 1600,
    prices: [1340, 2010, 2680, 5360, 10720],
    energy: [80, 96, 112, 128, 160]
  }, //
  {
    id: 18,
    name: "Crayfish Sashimi",
    ingredients: ["🦞", "🦞", "🦞", "🥬"],
    level: 8,
    recipePrice: 3200,
    prices: [850, 1275, 1700, 3400],
    energy: [30, 36, 42, 48]
  }, //
  {
    id: 19,
    name: "Deluxe Seafood Platter",
    ingredients: ["🦞", "🦞", "🐟", "🐟"],
    level: 6,
    recipePrice: 1600,
    prices: [410, 615, 820, 1640, 3280],
    energy: [65, 75, 91, 104, 130]
  }, //
  {
    id: 20,
    name: "Fish N Chips",
    ingredients: ["🐟", "🐟", "🥔", "🍞"],
    level: 1,
    recipePrice: 200,
    prices: [310, 465, 620, 1240, 2480],
    energy: [40, 48, 56, 56]
  }, //
  {
    id: 21,
    name: "Grape Jam",
    ingredients: ["🍇", "🍇", "🍇", "🍇"],
    level: 1,
    recipePrice: 0,
    prices: [2020, 3030, 4040, 8080, 16160],
    energy: [40]
  }, //
  {
    id: 22,
    name: "Green Roll Cake",
    ingredients: ["🥚", "🥛", "💚", "💚"],
    level: 1,
    recipePrice: 0,
    prices: [670, 1005, 1340, 2680],
    energy: [48, 58, 67, 77, 96]
  }, //
  {
    id: 23,
    name: "House Salad",
    ingredients: ["🥬", "🥬"],
    level: 1,
    recipePrice: 200,
    prices: [90, 135, 180, 360, 720],
    energy: [15, 18, 21, 24, 30]
  }, //
  {
    id: 24,
    name: "Meat Burger",
    ingredients: ["🌾", "🥬", "🥩", "🥫"],
    level: 8,
    recipePrice: 3200,
    prices: [1350, 2025, 2700, 5400, 10800],
    energy: [75, 90, 105, 120, 150]
  }, //
  {
    id: 25,
    name: "Meat Sauce Pasta",
    ingredients: ["🥩", "🍅", "🍳", "🍝"],
    level: 4,
    recipePrice: 800,
    prices: [670, 1005, 1340, 2680, 5360],
    energy: [80, 96, 112, 128]
  }, //
  {
    id: 26,
    name: "Mixed Jam",
    ingredients: ["Any of the four: 🍎, 🍇, 🍍, 🍓, 🍅, 🔵"],
    level: 1,
    recipePrice: 0,
    prices: [160, 240, 320, 640, 1280],
    energy: [22, 26, 31, 35]
  }, //
  {
    id: 27,
    name: "Mushroom Pie",
    ingredients: ["🍄", "🍄", "🌾", "🥚"],
    level: 1,
    recipePrice: 0,
    prices: [500, 750, 1000, 2000],
    energy: [35, 42, 49, 56, 70]
  }, //
  {
    id: 28,
    name: "Orange Roll Cake",
    ingredients: ["🥚", "🥛", "🧡", "🧡"],
    level: 1,
    recipePrice: 0,
    prices: [670, 1005, 1340, 2680],
    energy: [48, 58, 67, 77, 96]
  }, //
  {
    id: 29,
    name: "Picnic Set",
    ingredients: ["Seafood pizza", "Apple pie", "Fish n chips", "Any drink"],
    level: 7,
    recipePrice: 3200,
    prices: [2260, 3390, 4520, 9040, 18080],
    energy: [100, 140, 160, 200]
  }, //
  {
    id: 30,
    name: "Pineapple Jam",
    ingredients: ["🍍", "🍍", "🍍", "🍍"],
    level: 1,
    recipePrice: 0,
    prices: [280, 420, 560, 1120, 2240],
    energy: [40, 48, 56, 64, 80]
  }, //
  {
    id: 31,
    name: "Seafood Pizza",
    ingredients: ["🧀", "🥫", "🌾", "🐟"],
    level: 4,
    recipePrice: 800,
    prices: [780, 1170, 1560, 3120],
    energy: [70, 84, 98, 112]
  }, //
  {
    id: 32,
    name: "Strawberry Jam",
    ingredients: ["🍓", "🍓", "🍓", "🍓"],
    level: 1,
    recipePrice: 0,
    prices: [1580, 2370, 3160, 6320, 12640],
    energy: [40, 48, 56, 56]
  }, //
  {
    id: 33,
    name: "Tiramisu",
    ingredients: ["🫘", "🥛", "🧀"],
    level: 6,
    recipePrice: 1600,
    prices: [530, 795, 1060, 2120, 4240],
    energy: [65, 78, 91, 104, 130]
  }, //
  {
    id: 34,
    name: "Tomato Sauce",
    ingredients: ["🍅", "🍅", "🍅", "🍅"],
    level: 1,
    recipePrice: 0,
    prices: [180, 270, 360, 720, 1440],
    energy: [35, 42, 49, 56, 70]
  },
  {
    id: 35,
    name: "Grilled Button Mushroom",
    ingredients: ["🍄", "🍄", "🍄", "🍄"],
    level: 1,
    recipePrice: 0,
    prices: [180, 270, 360, 720, 1440],
    energy: [15, 18, 21, 24, 30]
  }, //
  {
    id: 36,
    name: "Grilled Mushrooms",
    ingredients: ["🍄", "🍄", "🍄", "🍄"],
    level: 1,
    recipePrice: 0,
    prices: [180, 270, 360, 720, 1440],
    energy: [15, 18, 21, 24, 30]
  }, //
  {
    id: 37,
    name: "Grilled Oyster Mushroom",
    ingredients: ["🍄", "🍄", "🍄", "🍄"],
    level: 1,
    recipePrice: 0,
    prices: [180, 270, 360, 720, 1440],
    energy: [15, 18, 21, 24, 30]
  }, //
  {
    id: 38,
    name: "Grilled Penny Bun",
    ingredients: ["🍄", "🍄", "🍄", "🍄"],
    level: 1,
    recipePrice: 0,
    prices: [180, 270, 360, 720, 1440],
    energy: [15, 18, 21, 24, 30]
  }, //
  {
    id: 39,
    name: "Grilled Shiitake Mushroom",
    ingredients: ["🍄", "🍄", "🍄", "🍄"],
    level: 1,
    recipePrice: 0,
    prices: [180, 270, 360, 720, 1440],
    energy: [15, 18, 21, 24, 30]
  }, //
  {
    id: 40,
    name: "Indigo Roll Cake",
    ingredients: ["🥚", "🥛", "🖤", "🖤"],
    level: 1,
    recipePrice: 0,
    prices: [570, 855, 1140, 2280, 4560],
    energy: [48, 58, 67, 77, 96]
  }, //
  {
    id: 41,
    name: "Mandarin Jam",
    ingredients: ["🍊", "🍊", "🍊", "🍊"],
    level: 1,
    recipePrice: 0,
    prices: [270, 405, 540, 1080, 2160],
    energy: [35, 42, 49, 56, 70]
  }, //
  {
    id: 42,
    name: "Meat Sauce Pasta",
    ingredients: ["🥩", "🍅", "🍳", "🍝"],
    level: 4,
    recipePrice: 800,
    prices: [670, 1005, 1340, 2680, 5360],
    energy: [80, 96, 112, 128]
  }, //
  {
    id: 43,
    name: "Mellow Black Tea",
    ingredients: [],
    level: 11,
    recipePrice: 6400,
    prices: [],
    energy: []
  }, //
  {
    id: 44,
    name: "Milkshake",
    ingredients: [],
    level: 11,
    recipePrice: 6400,
    prices: [],
    energy: []
  }, //
  {
    id: 45,
    name: "Original Roll Cake",
    ingredients: ["🥚", "🥛", "⚪", "[any sugar]"],
    level: 1,
    recipePrice: 0,
    prices: [550, 825, 1100, 2200, 4400],
    energy: [35, 42, 49, 56, 70]
  }, //
  {
    id: 46,
    name: "Oyster Mushroom Pie",
    ingredients: ["🍄", "🍄", "🌾", "🥚"],
    level: 1,
    recipePrice: 0,
    prices: [500, 750, 1000, 2000],
    energy: [35, 42, 49, 56, 70]
  }, //
  {
    id: 47,
    name: "Penny Bun Pie",
    ingredients: ["🍄", "🍄", "🌾", "🥚"],
    level: 1,
    recipePrice: 0,
    prices: [500, 750, 1000, 2000],
    energy: [35, 42, 49, 56, 70]
  }, //
  {
    id: 48,
    name: "Raspberry Jam",
    ingredients: ["🔴", "🔴", "🔴", "🔴"],
    level: 1,
    recipePrice: 0,
    prices: [250, 375, 500, 1000, 2000],
    energy: [30, 36, 42, 48]
  }, //
  {
    id: 49,
    name: "Red Roll Cake",
    ingredients: ["🥚", "🥛", "❤️", "❤️"],
    level: 1,
    recipePrice: 0,
    prices: [670, 1005, 1340, 2680, 5360],
    energy: [48, 58, 67, 77, 96]
  }, //
  {
    id: 50,
    name: "Refreshing Green Tea",
    ingredients: [],
    level: 12,
    recipePrice: 6400,
    prices: [],
    energy: []
  }, //
  {
    id: 51,
    name: "Rustic Ratatouille",
    ingredients: ["🍅", "🥔", "🥬"],
    level: 3,
    recipePrice: 800,
    prices: [640, 960, 1280, 2560, 5120],
    energy: [60, 72, 84, 96]
  }, //
  {
    id: 52,
    name: "Seafood Risotto",
    ingredients: ["🦞", "🌾", "🍅"],
    level: 3,
    recipePrice: 800,
    prices: [490, 735, 980, 1960],
    energy: []
  }, //
  {
    id: 53,
    name: "Shiitake Pie",
    ingredients: ["🍄", "🍄", "🌾", "🥚"],
    level: 1,
    recipePrice: 0,
    prices: [500, 750, 1000, 2000],
    energy: [35, 42, 49, 56, 70]
  }, //
  {
    id: 54,
    name: "Shrimp Avocado Cup",
    ingredients: [],
    level: 13,
    recipePrice: 6400,
    prices: [],
    energy: []
  }, //
  {
    id: 55,
    name: "Smoked Fish Bagel",
    ingredients: ["🐟", "🥦", "🌾"],
    level: 2,
    recipePrice: 200,
    prices: [520, 780, 1040, 2080],
    energy: [50]
  }, //
  {
    id: 56,
    name: "Steamed King Crab",
    ingredients: [],
    level: 10,
    recipePrice: 6400,
    prices: [],
    energy: []
  }, //
  {
    id: 57,
    name: "Violet Roll Cake",
    ingredients: ["🥚", "🥛", "💜", "💜"],
    level: 1,
    recipePrice: 0,
    prices: [570, 855, 1140, 2280, 4560],
    energy: [48, 58, 67, 77, 96]
  }, //
  {
    id: 58,
    name: "Yellow Roll Cake",
    ingredients: ["🥚", "🥛", "💛", "💛"],
    level: 1,
    recipePrice: 0,
    prices: [670, 1005, 1340, 2680],
    energy: [48, 58, 67, 77, 96]
  } //
];

export const GARDENING_DATA = [
  {
    id: 1,
    name: "Potatoes",
    icon: "🥔",
    growthTime: "60 min",
    gardeningLvl: 1,
    seedSell: 15,
    seedPurchase: 30,
    prices: [90, 120, 150, 180],
    weather: "☀️"
  },
  {
    id: 2,
    name: "Tomato",
    icon: "🍅",
    growthTime: "15 min",
    gardeningLvl: 1,
    seedSell: 5,
    seedPurchase: 10,
    prices: [30, 40, 50, 60, 70],
    weather: "☀️"
  },
  {
    id: 3,
    name: "Wheat",
    icon: "🌾",
    growthTime: "4 hours",
    gardeningLvl: 2,
    seedSell: 47,
    seedPurchase: 95,
    prices: [285, 381, 475, 570, 855],
    weather: "☀️"
  },
  {
    id: 4,
    name: "Lettuce",
    icon: "🥬",
    growthTime: "8 hours",
    gardeningLvl: 3,
    seedSell: 72,
    seedPurchase: 145,
    prices: [435, 582, 726, 870, 1305],
    weather: "☀️"
  },
  {
    id: 5,
    name: "Pineapple",
    icon: "🍍",
    growthTime: "30 min",
    gardeningLvl: 4,
    seedSell: 7,
    seedPurchase: 15,
    prices: [52, 69, 86, 104],
    weather: "☀️"
  },
  {
    id: 6,
    name: "Carrot",
    icon: "🥕",
    growthTime: "2 hours",
    gardeningLvl: 5,
    seedSell: 25,
    seedPurchase: 50,
    prices: [155, 207, 258, 310],
    weather: "☀️"
  },
  {
    id: 7,
    name: "Strawberry",
    icon: "🍓",
    growthTime: "6 hours",
    gardeningLvl: 6,
    seedSell: 62,
    seedPurchase: 125,
    prices: [375, 502, 626, 750, 1125],
    weather: "☀️"
  },
  {
    id: 8,
    name: "Corn",
    icon: "🌽",
    growthTime: "12 hours",
    gardeningLvl: 6,
    seedSell: 85,
    seedPurchase: 170,
    prices: [515, 690, 860, null, 1545],
    weather: "☀️"
  },
  {
    id: 9,
    name: "Grape",
    icon: "🍇",
    growthTime: "10 hours",
    gardeningLvl: 7,
    seedSell: 80,
    seedPurchase: 160,
    prices: [480, 643, 801, 960],
    weather: "☀️"
  },
  {
    id: 10,
    name: "Eggplant",
    icon: "🍆",
    growthTime: "7 hours",
    gardeningLvl: 8,
    seedSell: null,
    seedPurchase: 135,
    prices: [406, 544, 678, 812, 1218],
    weather: "☀️"
  },
  {
    id: 11,
    name: "Tea Tree",
    icon: "🍵",
    growthTime: "N/A",
    gardeningLvl: 11,
    seedSell: null,
    seedPurchase: 25,
    prices: [],
    weather: "☀️"
  },
  {
    id: 12,
    name: "Cacao",
    icon: "🍫",
    growthTime: "N/A",
    gardeningLvl: 12,
    seedSell: null,
    seedPurchase: 110,
    prices: [],
    weather: "☀️"
  },
  {
    id: 13,
    name: "Avocado",
    icon: "🥑",
    growthTime: "N/A",
    gardeningLvl: 13,
    seedSell: null,
    seedPurchase: 180,
    prices: [],
    weather: "☀️"
  }
];