export type UserProfile = {
  id: string;
  username: string;
  fullName: string;
  bio: string;
  avatarUrl: string;
  homeCity: string;
  travelStyles: string[];
  dreamDestinations: string[];
  followers: number;
  following: number;
};

export type Place = {
  id: string;
  name: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  description: string;
  notes?: string;
};

export type TripPost = {
  id: string;
  creator: UserProfile;
  title: string;
  destinationName: string;
  destinationSlug: string;
  startDate: string;
  endDate: string;
  coverImageUrl: string;
  galleryImages: string[];
  caption: string;
  taggedPlaces: Place[];
  likes: number;
  comments: number;
  saves: number;
  season: string;
};

export type ItineraryItem = {
  id: string;
  title: string;
  description: string;
  timeLabel: string;
  place?: Place;
};

export type ItineraryDay = {
  id: string;
  dayNumber: number;
  title: string;
  date: string;
  notes: string;
  items: ItineraryItem[];
};

export type Itinerary = {
  id: string;
  title: string;
  destinationName: string;
  startDate: string;
  endDate: string;
  days: ItineraryDay[];
};
