import {Offer} from '../types/offer';
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
    latitude: 52.3459553943508,
    longitude: 4.85309666406198,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: 'img/apartment-01.jpg',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at Amsterdam',
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
    latitude: 52.3609553943508,
    longitude: 4.85309666406198,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: 'img/apartment-03.jpg',
  price: 100,
  rating: 3.8,
  title: 'Nice, cozy, warm big bed apartment at Amsterdam',
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
    latitude: 52.3709553943508,
    longitude: 4.929309666406198,
    zoom: 8
  },
  maxAdults: 3,
  previewImage: 'img/apartment-01.jpg',
  price: 90,
  rating: 3.8,
  title: 'Nice, cozy, studio at Amsterdam',
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
    latitude: 52.3129553943508,
    longitude: 4.939309666406198,
    zoom: 8
  },
  maxAdults: 2,
  previewImage: 'img/apartment-02.jpg',
  price: 100,
  rating: 3.8,
  title: 'Nice, cozy, warm big bed apartment at Amsterdam',
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
    name : 'Paris'
  },
  description: 'A quiet cozy and picturesque.',
  goods: ['Heating', 'TV-cable', 'Wi-Fi'],
  host: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 4,
    isPro: false,
    name: 'Max'
  },
  id: '5',
  images: ['img/apartment-02.jpg'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.3259553943508,
    longitude: 4.85309666406198,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: 'img/apartment-02.jpg',
  price: 100,
  rating: 3.8,
  title: 'Nice, cozy, warm big bed apartment at Paris',
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
    name : 'Paris'
  },
  description: 'Nice place to rest.',
  goods: ['Heating', 'TV-cable', 'Wi-Fi'],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 5,
    isPro: false,
    name: 'Angelina'
  },
  id: '6',
  images: ['img/apartment-01.jpg'],
  isFavorite: true,
  isPremium: true,
  location: {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
    zoom: 8
  },
  maxAdults: 3,
  previewImage: 'img/apartment-01.jpg',
  price: 90,
  rating: 3.8,
  title: 'Nice, cozy, studio at Paris',
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
    name : 'Paris'
  },
  description: 'A quiet cozy and picturesque.',
  goods: ['Heating', 'Wi-Fi'],
  host: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 7,
    isPro: false,
    name: 'Max'
  },
  id: '7',
  images: ['img/apartment-03.jpg', 'img/apartment-02.jpg'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.3919553943508,
    longitude: 4.945309666406198,
    zoom: 8
  },
  maxAdults: 2,
  previewImage: 'img/apartment-02.jpg',
  price: 100,
  rating: 3.8,
  title: 'Nice, cozy, warm big bed apartment at Paris',
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
    name : 'Cologne'
  },
  description: 'A quiet cozy and picturesque.',
  goods: ['Heating', 'TV-cable', 'Wi-Fi'],
  host: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 4,
    isPro: false,
    name: 'Max'
  },
  id: '8',
  images: ['img/apartment-02.jpg'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.3609553943508,
    longitude: 4.86209666406198,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: 'img/apartment-02.jpg',
  price: 100,
  rating: 3.8,
  title: 'Nice, cozy, warm big bed apartment at Cologne',
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
    name : 'Cologne'
  },
  description: 'Nice place to rest.',
  goods: ['Heating', 'TV-cable', 'Wi-Fi'],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 5,
    isPro: false,
    name: 'Angelina'
  },
  id: '9',
  images: ['img/apartment-01.jpg'],
  isFavorite: true,
  isPremium: true,
  location: {
    latitude: 52.3808553943508,
    longitude: 4.939309666406198,
    zoom: 8
  },
  maxAdults: 3,
  previewImage: 'img/apartment-01.jpg',
  price: 90,
  rating: 3.8,
  title: 'Nice, cozy, studio at Cologne',
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
    name : 'Cologne'
  },
  description: 'A quiet cozy and picturesque.',
  goods: ['Heating', 'Wi-Fi'],
  host: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 7,
    isPro: false,
    name: 'Max'
  },
  id: '10',
  images: ['img/apartment-03.jpg', 'img/apartment-02.jpg'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.3865553943508,
    longitude: 4.939779666406198,
    zoom: 8
  },
  maxAdults: 2,
  previewImage: 'img/apartment-02.jpg',
  price: 100,
  rating: 3.8,
  title: 'Nice, cozy, warm big bed apartment at Cologne',
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
    name : 'Dusseldorf'
  },
  description: 'A quiet cozy and picturesque.',
  goods: ['Heating', 'TV-cable', 'Wi-Fi'],
  host: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 4,
    isPro: false,
    name: 'Max'
  },
  id: '11',
  images: ['img/apartment-02.jpg'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.3459553943508,
    longitude: 4.85689666406198,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: 'img/apartment-02.jpg',
  price: 100,
  rating: 3.8,
  title: 'Nice, cozy, warm big bed apartment at Dusseldorf',
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
    name : 'Dusseldorf'
  },
  description: 'Nice place to rest.',
  goods: ['Heating', 'TV-cable', 'Wi-Fi'],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 5,
    isPro: false,
    name: 'Angelina'
  },
  id: '12',
  images: ['img/apartment-01.jpg'],
  isFavorite: true,
  isPremium: true,
  location: {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
    zoom: 8
  },
  maxAdults: 3,
  previewImage: 'img/apartment-01.jpg',
  price: 90,
  rating: 3.8,
  title: 'Nice, cozy, studio at Dusseldorf',
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
    name : 'Dusseldorf'
  },
  description: 'A quiet cozy and picturesque.',
  goods: ['Heating', 'Wi-Fi'],
  host: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 7,
    isPro: false,
    name: 'Max'
  },
  id: '13',
  images: ['img/apartment-03.jpg', 'img/apartment-02.jpg'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    zoom: 8
  },
  maxAdults: 2,
  previewImage: 'img/apartment-02.jpg',
  price: 100,
  rating: 3.8,
  title: 'Nice, cozy, warm big bed apartment at Dusseldorf',
  type: 'apartment'
},

{
  bedrooms: 2,
  city: {
    location: {
      latitude: 50.8504,
      longitude: 4.34878,
      zoom: 10
    },
    name : 'Brussels'
  },
  description: 'A quiet cozy and picturesque.',
  goods: ['Heating', 'TV-cable', 'Wi-Fi'],
  host: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 4,
    isPro: false,
    name: 'Max'
  },
  id: '14',
  images: ['img/apartment-02.jpg'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 50.8309553943508,
    longitude: 4.3445553943508,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: 'img/apartment-02.jpg',
  price: 100,
  rating: 3.8,
  title: 'Nice, cozy, warm big bed apartment at Brussels',
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
    name : 'Brussels'
  },
  description: 'Nice place to rest.',
  goods: ['Heating', 'TV-cable', 'Wi-Fi'],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 5,
    isPro: false,
    name: 'Angelina'
  },
  id: '15',
  images: ['img/apartment-01.jpg'],
  isFavorite: true,
  isPremium: true,
  location: {
    latitude: 50.8209553943508,
    longitude: 4.3545553943508,
    zoom: 8
  },
  maxAdults: 3,
  previewImage: 'img/apartment-01.jpg',
  price: 90,
  rating: 3.8,
  title: 'Nice, cozy, studio at Brussels',
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
    name : 'Brussels'
  },
  description: 'A quiet cozy and picturesque.',
  goods: ['Heating', 'Wi-Fi'],
  host: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 7,
    isPro: false,
    name: 'Max'
  },
  id: '16',
  images: ['img/apartment-03.jpg', 'img/apartment-02.jpg'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 50.8339553943508,
    longitude: 4.3425553943508,
    zoom: 8
  },
  maxAdults: 2,
  previewImage: 'img/apartment-02.jpg',
  price: 100,
  rating: 3.8,
  title: 'Nice, cozy, warm big bed apartment at Brussels',
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
    name : 'Hamburg'
  },
  description: 'A quiet cozy and picturesque.',
  goods: ['Heating', 'TV-cable', 'Wi-Fi'],
  host: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 4,
    isPro: false,
    name: 'Max'
  },
  id: '17',
  images: ['img/apartment-02.jpg'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.3609553943508,
    longitude: 4.85309666406198,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: 'img/apartment-02.jpg',
  price: 100,
  rating: 3.8,
  title: 'Nice, cozy, warm big bed apartment at Hamburg',
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
    name : 'Hamburg'
  },
  description: 'Nice place to rest.',
  goods: ['Heating', 'TV-cable', 'Wi-Fi'],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 5,
    isPro: false,
    name: 'Angelina'
  },
  id: '18',
  images: ['img/apartment-01.jpg'],
  isFavorite: true,
  isPremium: true,
  location: {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
    zoom: 8
  },
  maxAdults: 3,
  previewImage: 'img/apartment-01.jpg',
  price: 90,
  rating: 3.8,
  title: 'Nice, cozy, studio at Hamburg',
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
    name : 'Hamburg'
  },
  description: 'A quiet cozy and picturesque.',
  goods: ['Heating', 'Wi-Fi'],
  host: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 7,
    isPro: false,
    name: 'Max'
  },
  id: '19',
  images: ['img/apartment-03.jpg', 'img/apartment-02.jpg'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    zoom: 8
  },
  maxAdults: 2,
  previewImage: 'img/apartment-02.jpg',
  price: 100,
  rating: 3.8,
  title: 'Nice, cozy, warm big bed apartment at Hamburg',
  type: 'apartment'
},
];
