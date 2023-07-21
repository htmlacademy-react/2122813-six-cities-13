import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Mon Mar 13 2023 11:41:43 GMT+0700 (Новосибирск, стандартное время)',
    id: '1',
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Oliver Conner'
    }
  },

  {
    comment: 'Just fine!',
    date: 'Mon Mar 11 2022 12:40:43 GMT+0500 (Екатеринбург, стандартное время)',
    id: '2',
    rating: 3,
    user: {
      avatarUrl: 'img/avatar.svg',
      id: 1,
      isPro: false,
      name: 'Piter Parker'
    }
  },

  {
    comment: 'A place where you don\'t wanna be appeared',
    date: 'Mon Feb 19 2023 16:42:43 GMT+0300 (Москва, стандартное время)',
    id: '3',
    rating: 1,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Anna Koroleva'
    }
  }
];
