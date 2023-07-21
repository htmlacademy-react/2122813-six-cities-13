import { Offer } from '../types/offer';

export const offers: Offer[] = [{
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name : 'Amsterdam'
  },
  description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. Where the bustle of the city comes to rest in this alley flowery and colorful.',
  goods: ['Heating', 'TV-cable', 'Wi-Fi', 'Fridge'],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 3,
    isPro: true,
    name: 'Angelina'
  },
  id: '1',
  images: ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
  isFavorite: true,
  isPremium: true,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: 'img/apartment-01.jpg',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location. An independent House, strategically located between Rembrand Square and National Opera.',
  type: 'apartment'
},

{
  bedrooms: 2,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name : 'Amsterdam'
  },
  description: 'A quiet cozy and picturesque.',
  goods: ['Heating', 'TV-cable', 'Wi-Fi'],
  host: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 4,
    isPro: false,
    name: 'Max'
  },
  id: '2',
  images: ['img/apartment-03.jpg'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.33514938496378,
    longitude: 4.643877537499948,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: 'img/apartment-03.jpg',
  price: 100,
  rating: 3.8,
  title: 'Nice, cozy, warm big bed apartment',
  type: 'apartment'
},

{
  bedrooms: 1,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name : 'Amsterdam'
  },
  description: 'Nice place to rest.',
  goods: ['Heating', 'TV-cable', 'Wi-Fi'],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 5,
    isPro: false,
    name: 'Angelina'
  },
  id: '3',
  images: ['img/apartment-01.jpg'],
  isFavorite: true,
  isPremium: true,
  location: {
    latitude: 52.36514938496378,
    longitude: 4.343877537499948,
    zoom: 8
  },
  maxAdults: 3,
  previewImage: 'img/apartment-01.jpg',
  price: 90,
  rating: 3.8,
  title: 'Nice, cozy, studio',
  type: 'studio'
},

{
  bedrooms: 2,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name : 'Amsterdam'
  },
  description: 'A quiet cozy and picturesque.',
  goods: ['Heating', 'Wi-Fi'],
  host: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 5,
    isPro: false,
    name: 'Max'
  },
  id: '4',
  images: ['img/apartment-03.jpg', 'img/apartment-02.jpg'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.33514938496378,
    longitude: 4.643877537499948,
    zoom: 8
  },
  maxAdults: 2,
  previewImage: 'img/apartment-02.jpg',
  price: 100,
  rating: 3.8,
  title: 'Nice, cozy, warm big bed apartment',
  type: 'apartment'
}];
