import type { Itinerary, Place, TripPost, UserProfile } from "@/types/app";

export const profiles: UserProfile[] = [
  {
    id: "u1",
    username: "mara.wanders",
    fullName: "Mara Chen",
    bio: "Slow travel, coastal cities, small hotels, and routes that leave room for detours.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
    homeCity: "San Francisco",
    travelStyles: ["Food", "Architecture", "Coastlines"],
    dreamDestinations: ["Oaxaca", "Kyoto", "Madeira"],
    followers: 1820,
    following: 318
  },
  {
    id: "u2",
    username: "atlas.noah",
    fullName: "Noah Rivera",
    bio: "Mountain roads, rail trips, and practical guides for people who like beautiful logistics.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
    homeCity: "Denver",
    travelStyles: ["Hiking", "Rail", "Photography"],
    dreamDestinations: ["Dolomites", "Patagonia", "Norway"],
    followers: 972,
    following: 204
  }
];

export const places: Place[] = [
  {
    id: "p1",
    name: "Miradouro da Senhora do Monte",
    city: "Lisbon",
    country: "Portugal",
    lat: 38.7191,
    lng: -9.1327,
    description: "Hilltop viewpoint with wide city views and an easy walk into Graça."
  },
  {
    id: "p2",
    name: "LX Factory",
    city: "Lisbon",
    country: "Portugal",
    lat: 38.703,
    lng: -9.178,
    description: "Creative warehouse district for lunch, bookstores, and design shops.",
    notes: "Go before sunset and walk to the river after."
  },
  {
    id: "p3",
    name: "Arashiyama Bamboo Grove",
    city: "Kyoto",
    country: "Japan",
    lat: 35.017,
    lng: 135.671,
    description: "Atmospheric bamboo path best visited early before the tour groups."
  },
  {
    id: "p4",
    name: "Fushimi Inari Taisha",
    city: "Kyoto",
    country: "Japan",
    lat: 34.967,
    lng: 135.7727,
    description: "Iconic shrine route with thousands of torii gates and a rewarding upper trail."
  }
];

export const tripPosts: TripPost[] = [
  {
    id: "t1",
    creator: profiles[0],
    title: "Four Days Across Lisbon's Hills",
    destinationName: "Lisbon, Portugal",
    destinationSlug: "lisbon-portugal",
    startDate: "2026-04-03",
    endDate: "2026-04-07",
    coverImageUrl: "https://images.unsplash.com/photo-1501927023255-9063be98970c?auto=format&fit=crop&w=1400&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?auto=format&fit=crop&w=900&q=80"
    ],
    caption:
      "A route through tiled facades, lookout points, late lunches, and neighborhoods that are better explored slowly. The best days started with one planned stop and ended with three saved places.",
    taggedPlaces: [places[0], places[1]],
    likes: 428,
    comments: 34,
    saves: 119,
    season: "Spring"
  },
  {
    id: "t2",
    creator: profiles[1],
    title: "Kyoto Before the City Wakes",
    destinationName: "Kyoto, Japan",
    destinationSlug: "kyoto-japan",
    startDate: "2026-03-12",
    endDate: "2026-03-18",
    coverImageUrl: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1400&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=900&q=80"
    ],
    caption:
      "An early-start itinerary for temples, quiet side streets, and the food stops worth saving. It is built around gentle mornings and short transit hops.",
    taggedPlaces: [places[2], places[3]],
    likes: 612,
    comments: 58,
    saves: 204,
    season: "Cherry blossom season"
  }
];

export const itinerary: Itinerary = {
  id: "i1",
  title: "Lisbon Long Weekend",
  destinationName: "Lisbon, Portugal",
  startDate: "2026-04-03",
  endDate: "2026-04-07",
  days: [
    {
      id: "d1",
      dayNumber: 1,
      title: "Arrive and climb to Graça",
      date: "2026-04-03",
      notes: "Keep the first day loose. Focus on views, food, and getting oriented.",
      items: [
        {
          id: "ii1",
          title: "Sunset viewpoint",
          description: "Walk up through Mouraria and stay for golden hour.",
          timeLabel: "6:00 PM",
          place: places[0]
        },
        {
          id: "ii2",
          title: "Dinner near Alfama",
          description: "Book a small table and keep transit minimal after the flight.",
          timeLabel: "8:30 PM"
        }
      ]
    },
    {
      id: "d2",
      dayNumber: 2,
      title: "Design shops and river walk",
      date: "2026-04-04",
      notes: "Start later and use the afternoon for west-side neighborhoods.",
      items: [
        {
          id: "ii3",
          title: "Lunch and browsing at LX Factory",
          description: "Save room for coffee and the bookstore.",
          timeLabel: "1:00 PM",
          place: places[1]
        }
      ]
    }
  ]
};
